import { vertexShaderString, fragmentShaderString } from "./shaders.js";
import * as glMatrix from "./gl-matrix.js"


function setup(gl, canvas) {
    gl.enable(gl.DEPTH_TEST)
    gl.enable(gl.CULL_FACE)
    gl.frontFace(gl.CCW)
    gl.cullFace(gl.BACK)

    if (!gl) {
        throw new Error(`WebGL cannot be initialized.`)
    }

    // create and set shaders
    const vertexShader = gl.createShader(gl.VERTEX_SHADER)
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)
    

    window.onload = main(gl, canvas, vertexShader, fragmentShader)
}
/**
 * Main function
 */
function main(gl, canvas, vertexShader, fragmentShader) {
    // compile shaders
    compileShaders(gl, vertexShader, fragmentShader)

    // create and link program
    var program = gl.createProgram()
    makeProgram(program, gl, vertexShader, fragmentShader)

    // cube = box vertices
    var cube = new Float32Array([
    //    x     y     z      r    g    b
        // Top
        -1.0, 1.0, -1.0,   Math.random(), Math.random(), Math.random(),
		-1.0, 1.0, 1.0,    Math.random(), Math.random(), Math.random(),
		1.0, 1.0, 1.0,     Math.random(), Math.random(), Math.random(),
		1.0, 1.0, -1.0,    Math.random(), Math.random(), Math.random(),

		// Left
		-1.0, 1.0, 1.0,    Math.random(), Math.random(), Math.random(),
		-1.0, -1.0, 1.0,   Math.random(), Math.random(), Math.random(),
		-1.0, -1.0, -1.0,  Math.random(), Math.random(), Math.random(),
		-1.0, 1.0, -1.0,   Math.random(), Math.random(), Math.random(),

		// Right
		1.0, 1.0, 1.0,    Math.random(), Math.random(), Math.random(),
		1.0, -1.0, 1.0,   Math.random(), Math.random(), Math.random(),
		1.0, -1.0, -1.0,  Math.random(), Math.random(), Math.random(),
		1.0, 1.0, -1.0,   Math.random(), Math.random(), Math.random(),

		// Front
		1.0, 1.0, 1.0,      Math.random(), Math.random(), Math.random(),
		1.0, -1.0, 1.0,     Math.random(), Math.random(), Math.random(),
		-1.0, -1.0, 1.0,    Math.random(), Math.random(), Math.random(),
		-1.0, 1.0, 1.0,     Math.random(), Math.random(), Math.random(),

		// Back
		1.0, 1.0, -1.0,     Math.random(), Math.random(), Math.random(),
		1.0, -1.0, -1.0,    Math.random(), Math.random(), Math.random(),
		-1.0, -1.0, -1.0,   Math.random(), Math.random(), Math.random(),
		-1.0, 1.0, -1.0,    Math.random(), Math.random(), Math.random(),

		// Bottom
		-1.0, -1.0, -1.0,   Math.random(), Math.random(), Math.random(),
		-1.0, -1.0, 1.0,    Math.random(), Math.random(), Math.random(),
		1.0, -1.0, 1.0,     Math.random(), Math.random(), Math.random(),
		1.0, -1.0, -1.0,    Math.random(), Math.random(), Math.random(),
    ])

    var cubeVertexBufferObj = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexBufferObj)
    gl.bufferData(gl.ARRAY_BUFFER, cube, gl.STATIC_DRAW)

    // saying which sets of vertices form a triangle
    // order of triangles that need to be drawn
    var boxIndices = new Uint16Array([
        // Top
		0, 1, 2,
		0, 2, 3,

		// Left
		5, 4, 6,
		6, 4, 7,

		// Right
		8, 9, 10,
		8, 10, 11,

		// Front
		13, 12, 14,
		15, 14, 12,

		// Back
		16, 17, 18,
		16, 18, 19,

		// Bottom
		21, 20, 22,
		22, 20, 23
    ])

    var boxIndexBufferObj = gl.createBuffer()
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, boxIndexBufferObj)
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, boxIndices, gl.STATIC_DRAW)
    
    var positionAttribLocation = gl.getAttribLocation(program, `vertPosition`)
    

    gl.vertexAttribPointer(
        positionAttribLocation,
        3,
        gl.FLOAT,
        gl.FALSE,
        6 * Float32Array.BYTES_PER_ELEMENT,
        0
    )

    // enables attribute for usage
    gl.enableVertexAttribArray(positionAttribLocation)

    var colorAttribLocation = gl.getAttribLocation(program, `vertColor`)
    gl.vertexAttribPointer(
        colorAttribLocation, // attribute location
        3, // number of elements per attribute
        gl.FLOAT, // type of elements
        gl.FALSE, // normalized ?
        6 * Float32Array.BYTES_PER_ELEMENT, // size of an individual vertex. allows gpu to reinterpret data.
        3 * Float32Array.BYTES_PER_ELEMENT // offset from start of single vertex to this attribute
    )
    gl.enableVertexAttribArray(colorAttribLocation)
    
    // must be called before setting uniforms
    gl.useProgram(program)

    // Location of uniforms in GPU
    var matWorldUniformLocation = gl.getUniformLocation(program, 'mWorld')
    var matViewUniformLocation = gl.getUniformLocation(program, 'mView')
    var matProjUniformLocation = gl.getUniformLocation(program, 'mProj')

    // Identity matrices in CPU
    var worldMatrix = new Float32Array(16)
    var viewMatrix = new Float32Array(16)
    var projMatrix = new Float32Array(16)
    
    // rotates
    glMatrix.mat4.identity(worldMatrix)
    // camera
    glMatrix.mat4.lookAt(viewMatrix, [0, 0, -9], [0, 0, 0], [0, 1, 0])
    // perspective
    glMatrix.mat4.perspective(projMatrix, 
        glMatrix.glMatrix.toRadian(45), 
        document.getElementById('gl-canvas').width / document.getElementById('gl-canvas').height,
        0.1,
        1000.0
    )
    
    // Sends matrices to shader
    gl.uniformMatrix4fv(matWorldUniformLocation, gl.FALSE, worldMatrix)
    gl.uniformMatrix4fv(matViewUniformLocation, gl.FALSE, viewMatrix)
    gl.uniformMatrix4fv(matProjUniformLocation, gl.FALSE, projMatrix)

    var xRotationMatrix = new Float32Array(16)
    var yRotationMatrix = new Float32Array(16)

    
    // loop for animation
    var identityMatrix = new Float32Array(16)
    glMatrix.mat4.identity(identityMatrix)
    var angle = 0
    var loop = () => {
        // a full rotation every 6 seconds
        // ms (since site load) * 1000 = x seconds / 6
        // 2 * pi = full circle
        angle = (performance.now() / 1000 / 6) * (2 * Math.PI)
        glMatrix.mat4.rotate(xRotationMatrix, identityMatrix, angle / 4, [1, 0, 0])
        glMatrix.mat4.rotate(yRotationMatrix, identityMatrix, angle, [0, 1, 0])
        glMatrix.mat4.mul(worldMatrix, xRotationMatrix, yRotationMatrix)
        
        gl.uniformMatrix4fv(matWorldUniformLocation, gl.FALSE, worldMatrix)

        // set background color to black, full opaque
        // gl.clearColor(0.0, 0.0, 0.0, 1.0) // black
        gl.clearColor(1.0, 1.0, 1.0, 1.0) // white
        // clear color buffer to refresh
        gl.clear(gl.COLOR_BUFFER_BIT)
        gl.drawElements(gl.TRIANGLES, boxIndices.length, gl.UNSIGNED_SHORT, 0)

        requestAnimationFrame(loop)
    }
    requestAnimationFrame(loop)

} // main

function compileShaders(gl, vertexShader, fragmentShader) {
    // step1: sets shader source
    gl.shaderSource(vertexShader, vertexShaderString())
    gl.shaderSource(fragmentShader, fragmentShaderString())

    // step2: compiles both shaders
    gl.compileShader(vertexShader)
    gl.compileShader(fragmentShader)

    // checks for compilation errors
    checkCompilation(gl, vertexShader, `VERTEX`)
    checkCompilation(gl, fragmentShader, `FRAGMENT`)
    return
} // compileShaders

function makeProgram(program, gl, vertexShader, fragmentShader) {
    // attach shaders
    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)

    // link program
    gl.linkProgram(program)

    // check for error
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error(`ERR: Failed to LINK program.`,
        gl.getProgramInfoLog(program));
        return
    }
} // makeProgram

function checkCompilation(gl, shader, name) {
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(`ERR: Failed to compile ${name} shader.`,
        gl.getShaderInfoLog(shader));
    }
} // checkCompilation
export {setup}