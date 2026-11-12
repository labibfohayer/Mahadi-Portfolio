var e=`varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,t=`precision highp float;

uniform sampler2D uMapFrom;  
uniform sampler2D uMapTo;    
uniform float uProgress;     
uniform float uOpacity;      
uniform vec3 uColor;         
uniform vec2 uSize;          
uniform float uRadius;       
uniform float uMaxBlur;      
uniform float uPlaneAspect;  
uniform float uAspectFrom;   
uniform float uAspectTo;     
varying vec2 vUv;

#define PI 3.141592653589793

vec3 linearToSRGB(vec3 c) {
  return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
}

float sdRoundedBox(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + vec2(r);
  return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r;
}

vec2 coverUv(vec2 uv, float imgAspect, float planeAspect) {
  vec2 scale = vec2(1.0);
  if (imgAspect > planeAspect) {
    scale.x = planeAspect / imgAspect;
  } else {
    scale.y = imgAspect / planeAspect;
  }
  return (uv - 0.5) * scale + 0.5;
}

float gaussWeight(int i) {
  return i == 0 ? 0.5 : 0.25;
}

const float PEAK_BLOCK = 0.045;  
                                 
const float PEAK_BLUR = 0.006;   
const float REST_LEVELS = 255.0;
const float PEAK_LEVELS = 12.0;  

vec3 sampleBlurred(vec2 uv, float radius, float mixF) {
  vec3 sum = vec3(0.0);
  for (int x = -1; x <= 1; x++) {
    for (int y = -1; y <= 1; y++) {
      vec2 off = vec2(float(x), float(y)) * radius;
      vec3 from = texture2D(uMapFrom, coverUv(uv + off, uAspectFrom, uPlaneAspect)).rgb;
      vec3 to = texture2D(uMapTo, coverUv(uv + off, uAspectTo, uPlaneAspect)).rgb;
      sum += mix(from, to, mixF) * gaussWeight(x) * gaussWeight(y);
    }
  }
  return sum;
}

void main() {
  
  float veil = sin(uProgress * PI);
  
  float mixF = smoothstep(0.35, 0.65, uProgress);

  
  float blockUv = veil * PEAK_BLOCK;
  vec2 sampleUv = vUv;
  if (blockUv > 0.0001) {
    vec2 block = vec2(blockUv / uPlaneAspect, blockUv);
    sampleUv = (floor(vUv / block) + 0.5) * block;
  }

  vec3 col = sampleBlurred(sampleUv, veil * PEAK_BLUR, mixF);

  
  col = mix(col, uColor, veil * 0.65);

  
  vec3 srgb = linearToSRGB(col);
  float levels = mix(REST_LEVELS, PEAK_LEVELS, veil);
  srgb = floor(srgb * levels + 0.5) / levels;

  
  
  
  vec2 p = (vUv - 0.5) * uSize;
  float d = sdRoundedBox(p, uSize * 0.5, uRadius);
  float aa = fwidth(d);
  float maskAlpha = 1.0 - smoothstep(-aa, aa, d);

  float alpha = maskAlpha * uOpacity;
  if (alpha <= 0.001) discard;
  gl_FragColor = vec4(srgb, alpha);
}`;export{e as n,t};