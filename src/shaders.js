// vertPosition is a vec3 attribute because it'll take in x, y, z
// vertColor is a vec3 attribute because it'll take r, g ,b values

// uniforms are like constants. they do not change per vertex.
// they are still inputs as well. here we have 3 as a 4x4 matrix.
// world, view, and projection (proj).
// when doing matrix operations, ordering is important.
// in opengl, operations occur in reverse order.

// mProj * mView * mWorld results in a matrix to be multiplied 
// by the vertices. 

// the transformations happen in right to left order.
// vec4 >* mWorld (rotation of shape) 
// >* mView(camera) 
// >* mProj(new points to be projected)

function vertexShaderString() {
    return [
        `precision mediump float;`,
        ``,
        `attribute vec3 vertPosition;`,
        `attribute vec3 vertColor;`,
        `varying vec3 fragColor;`,
        ``,
        `uniform mat4 mWorld;`,
        `uniform mat4 mView;`,
        `uniform mat4 mProj;`,
        ``,
        `void main() {`,
        `   fragColor = vertColor;`,
        `   gl_Position = mProj * mView * mWorld * vec4(vertPosition, 1.0);`,
        `}`,
    ].join(`\n`)
}

function fragmentShaderString() {
    return [
        `precision mediump float;`,
        ``,
        `varying vec3 fragColor;`,
        ``,
        `void main() {`,
        `   gl_FragColor = vec4(fragColor, 1.0);`,
        `}`,
    ].join(`\n`)
}

export {vertexShaderString, fragmentShaderString}