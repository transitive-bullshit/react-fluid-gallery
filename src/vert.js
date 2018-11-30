export default `
uniform float time;
uniform sampler2D texture1;
uniform sampler2D texture2;
uniform vec2 pixels;
uniform vec2 uvRate1;

varying vec2 vUv;
varying vec2 vUv1;
varying vec4 vPosition;

void main() {
  vUv = uv;
  vec2 _uv = uv - 0.5;
  vUv1 = _uv;
  vUv1 *= uvRate1.xy;

  vUv1 += 0.5;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`
