export default `
uniform float time;
uniform float progress;
uniform sampler2D texture1;
uniform sampler2D texture2;
uniform vec2 pixels;
uniform vec2 uvRate1;
uniform vec2 accel;

varying vec2 vUv;
varying vec2 vUv1;

vec2 mirrored(vec2 v) {
  vec2 m = mod(v, 2.0);
  return mix(m, 2.0 - m, step(1.0, m));
}

float tri(float p) {
  return mix(p, 1.0 - p, step(0.5, p))*2.0;
}

void main()  {
  vec2 uv = gl_FragCoord.xy / pixels.xy;

  float p = fract(progress);

  float delayValue = p * 7.0 - uv.y * 2.0 + uv.x - 2.0;

  delayValue = clamp(delayValue, 0.0, 1.0);

  vec2 translateValue = p + delayValue*accel;
  vec2 translateValue1 = vec2(-0.5,1.) * translateValue;
  vec2 translateValue2 = vec2(-0.5,1.) * (translateValue - 1.0 - accel);

  vec2 w = sin( sin(time)*vec2(0,0.3) + vUv.yx*vec2(0,4.)) * vec2(0, 0.5);
  vec2 xy = w*(tri(p)*0.5 + tri(delayValue)*0.5);

  vec2 uv1 = vUv1 + translateValue1 + xy;
  vec2 uv2 = vUv1 + translateValue2 + xy;

  vec4 rgba1 = texture2D(texture1, mirrored(uv1));
  vec4 rgba2 = texture2D(texture2, mirrored(uv2));

  vec4 rgba = mix(rgba1, rgba2, delayValue);
  gl_FragColor = rgba;
  // gl_FragColor = vec4(tri(progress));
  // gl_FragColor = vec4(delayValue);
  // gl_FragColor = vec4(uv,1.,1.);
}
`
