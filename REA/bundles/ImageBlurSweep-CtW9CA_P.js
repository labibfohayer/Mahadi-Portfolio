import{t as e}from"./gsap-C1dwDtf_.js";import{n as t,r as n}from"./SmoothScroll-IMqSb9lI.js";import{a as r,c as i,f as a,l as o,n as s,o as c,t as l,u}from"./Sketch-BeEm10aS.js";var d=`varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,f=`precision highp float;

uniform sampler2D uMap;        
uniform float uProgress;       
uniform float uOpacity;        
uniform vec3 uColor;           
uniform vec2 uSize;            
uniform float uRadius;         
uniform float uMaxBlur;        
uniform float uPlaneAspect;    
uniform float uImageAspect;    
uniform float uTint;           
uniform float uParallax;       
uniform float uParallaxAmount; 
uniform float uZoom;           
uniform float uDriftY;         
uniform vec2 uMouse;           
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

const float PEAK_BLOCK = 0.012;   
const float PEAK_BLUR = 0.014;    
const float MOUSE_RADIUS = 0.35;  
const float MOUSE_PUSH = 0.05;    
const float REST_LEVELS = 255.0;
const float PEAK_LEVELS = 16.0;   

vec2 parallaxUv(vec2 uv) {
  
  
  vec2 fuv = (uv - 0.5) / uZoom + 0.5;
  fuv.y += uDriftY;
  vec2 suv = coverUv(fuv, uImageAspect, uPlaneAspect);
  suv.y = (suv.y - 0.5) * (1.0 - 2.0 * uParallaxAmount) + 0.5
        + uParallax * uParallaxAmount;
  return suv;
}

vec3 sampleBlurred(vec2 uv, float radius) {
  vec3 sum = vec3(0.0);
  for (int x = -1; x <= 1; x++) {
    for (int y = -1; y <= 1; y++) {
      vec2 off = vec2(float(x), float(y)) * radius;
      sum += texture2D(uMap, parallaxUv(uv + off)).rgb
           * gaussWeight(x) * gaussWeight(y);
    }
  }
  return sum;
}

void main() {
  
  float veil = sin(uProgress * PI);

  
  
  vec2 delta = vUv - uMouse;
  float md = length(delta * vec2(uPlaneAspect, 1.0)); 
  float influence = smoothstep(MOUSE_RADIUS, 0.0, md);
  vec2 dir = length(delta) > 1e-4 ? normalize(delta) : vec2(0.0);
  vec2 warpedUv = vUv + dir * influence * MOUSE_PUSH * veil;

  
  
  float blockUv = veil * PEAK_BLOCK;
  vec2 sampleUv = warpedUv;
  if (blockUv > 0.0001) {
    vec2 block = vec2(blockUv / uPlaneAspect, blockUv);
    sampleUv = (floor(warpedUv / block) + 0.5) * block;
  }

  
  vec3 col = sampleBlurred(sampleUv, veil * PEAK_BLUR);

  
  col = mix(col, uColor, veil * uTint);

  
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
}`;e.registerPlugin(n);var p=.9,m=.45,h=5;function g(){let e=t()?.lenis?.velocity;return e!=null&&Math.abs(e)>h}var _=null,v=8,y=typeof window.requestIdleCallback==`function`,b=y?e=>window.requestIdleCallback(e,{timeout:500}):e=>setTimeout(e,0),x=y?e=>window.cancelIdleCallback(e):e=>clearTimeout(e),S={fov:28,far:50,cameraPosition:{x:0,y:0,z:5},alpha:!0,autoRender:!1};function C(e,{colorSource:t}){e.uniforms={uMap:{value:null},uProgress:{value:1},uOpacity:{value:1},uColor:{value:new s(getComputedStyle(t).getPropertyValue(`--clr-primary`).trim()||`#ff4f31`)},uSize:{value:new a(1,1)},uRadius:{value:0},uMaxBlur:{value:.045},uPlaneAspect:{value:1},uImageAspect:{value:1},uTint:{value:.65},uParallax:{value:0},uParallaxAmount:{value:0},uZoom:{value:1},uDriftY:{value:0},uMouse:{value:new a(.5,.5)}},e.geometry=new c(1,1,1,1),e.material=new o({vertexShader:d,fragmentShader:f,uniforms:e.uniforms,transparent:!0}),e.mesh=new r(e.geometry,e.material),e.scene.add(e.mesh)}function w(e,{radiusPx:t,widthPx:n}){let r=e.camera.fov*Math.PI/180,i=2*Math.abs(e.camera.position.z)*Math.tan(r/2),a=i*e.camera.aspect;e.mesh.scale.set(a,i,1),e.uniforms.uSize.value.set(a,i),e.uniforms.uRadius.value=t/(n||1)*a,e.uniforms.uPlaneAspect.value=e.camera.aspect}function T(e,t){let n={imageOrientation:`flipY`,resizeQuality:`high`};if(t){let r=Math.min(window.devicePixelRatio||1,2),i=Math.round(t*r),{naturalWidth:a,naturalHeight:o}=e;a<=o?a>i&&(n.resizeWidth=i):o>i&&(n.resizeHeight=i)}return createImageBitmap(e,n).then(e=>{let t=new u(e);return t.colorSpace=i,t.flipY=!1,t.needsUpdate=!0,t.userData={aspect:e.width/e.height},t})}var E=class extends l{constructor(){let e=document.createElement(`div`);e.setAttribute(`data-blur-sweep-canvas`,``),super({...S,dom:e}),this.holder=e,this.activeWrapper=null,this.activeImg=null,this.pendingPlay=!1,this.pendingHold=null,this.radiusPx=16,this.pipelineWarm=!1,this.textures=new Map,this.textureOrder=[],this.onPointerMove=e=>this.trackPointer(e)}init(){C(this,{colorSource:document.documentElement})}trackPointer(e){if(!this.activeWrapper)return;let t=this.activeWrapper.getBoundingClientRect();this.uniforms.uMouse.value.set((e.clientX-t.left)/t.width,1-(e.clientY-t.top)/t.height),this.renderFrame()}warm(){this.renderer.setSize(2,2),this.renderer.compile(this.scene,this.camera)}onResize(){this.activeWrapper&&(w(this,{radiusPx:this.radiusPx,widthPx:this.holder.offsetWidth}),this.renderFrame())}attachTo(e,t){this.activeWrapper&&this.activeWrapper!==e&&this.detach(),this.activeWrapper=e,this.activeImg=t,e.appendChild(this.holder);let n=e.offsetWidth||1,r=e.offsetHeight||1;this.renderer.setSize(n,r),this.camera.aspect=n/r,this.camera.updateProjectionMatrix(),this.radiusPx=parseFloat(getComputedStyle(e).borderTopLeftRadius)||16,w(this,{radiusPx:this.radiusPx,widthPx:n}),this.matchParallax(),window.addEventListener(`mousemove`,this.onPointerMove),this.useTexture(t)}matchParallax(){let t=this.activeWrapper?.querySelector(`[data-parallax]`),n=t&&e.getProperty(t,`scaleX`)||1,r=t&&e.getProperty(t,`yPercent`)||0;this.uniforms.uZoom.value=n,this.uniforms.uDriftY.value=r/100/n}detach(){this.activeWrapper&&(window.removeEventListener(`mousemove`,this.onPointerMove),e.killTweensOf(this.uniforms.uProgress),this.stop(),this.activeWrapper.removeAttribute(`data-blur-sweep-ready`),this.holder.parentNode===this.activeWrapper&&this.activeWrapper.removeChild(this.holder),this.activeWrapper=null,this.activeImg=null,this.pendingPlay=!1,this.pendingHold=null)}prewarm(e,t,n){this.textures.has(e)||!e.complete||!e.naturalWidth||T(e,Math.max(t,n)).then(r=>{if(this.textures.has(e)){r.image?.close?.(),r.dispose?.();return}this.renderer.initTexture(r),this.cacheTexture(e,r),this.warmPipeline(r,t,n)})}warmPipeline(e,t,n){if(this.pipelineWarm)return;this.pipelineWarm=!0,this.renderer.setSize(t||2,n||2),this.camera.aspect=(t||1)/(n||1),this.camera.updateProjectionMatrix();let r=this.uniforms.uMap.value,i=this.uniforms.uProgress.value;this.uniforms.uMap.value=e,this.uniforms.uProgress.value=1,this.renderer.render(this.scene,this.camera),this.uniforms.uMap.value=r,this.uniforms.uProgress.value=i}useTexture(e){let t=this.textures.get(e);if(t){this.bumpTexture(e),this.applyTexture(e,t);return}let n=()=>{if(!e.naturalWidth)return;let t=this.activeWrapper;T(e,t?Math.max(t.offsetWidth,t.offsetHeight):0).then(t=>{this.cacheTexture(e,t),this.activeImg===e&&this.applyTexture(e,t)})};e.complete&&e.naturalWidth?n():e.addEventListener(`load`,n,{once:!0})}applyTexture(e,t){this.uniforms.uMap.value=t,this.uniforms.uImageAspect.value=t.userData.aspect,this.activeWrapper?.setAttribute(`data-blur-sweep-ready`,``),this.renderFrame(),this.pendingPlay?this.play():this.pendingHold!=null&&this.hold(this.pendingHold)}cacheTexture(e,t){for(this.textures.set(e,t),this.textureOrder.push(e);this.textureOrder.length>v;){let e=this.textureOrder.findIndex(e=>e!==this.activeImg);if(e===-1)break;let[t]=this.textureOrder.splice(e,1),n=this.textures.get(t);this.textures.delete(t),n?.image?.close?.(),n?.dispose?.()}}bumpTexture(e){this.textureOrder=this.textureOrder.filter(t=>t!==e),this.textureOrder.push(e)}play(){if(!this.uniforms.uMap.value){this.pendingPlay=!0;return}this.pendingPlay=!1,e.killTweensOf(this.uniforms.uProgress),this.uniforms.uProgress.value=0,this.start(),e.to(this.uniforms.uProgress,{value:1,duration:p,ease:`power2.inOut`,onComplete:()=>{this.stop(),this.renderFrame()}})}hold(t){if(!this.uniforms.uMap.value){this.pendingHold=t;return}this.pendingHold=null,e.killTweensOf(this.uniforms.uProgress),this.start(),e.to(this.uniforms.uProgress,{value:t?.5:0,duration:m,ease:`power2.out`,onComplete:()=>{this.stop(),this.renderFrame(),t||this.detach()}})}renderFrame(){!this.material||!this.uniforms.uMap.value||this.renderer.render(this.scene,this.camera)}destroy(){this.detach(),e.killTweensOf(this.uniforms?.uProgress);for(let e of this.textures.values())e.image?.close?.(),e.dispose?.();this.textures.clear(),this.textureOrder=[],this.material?.dispose?.(),this.geometry?.dispose?.(),super.destroy()}},D=class extends l{constructor({wrapper:e,img:t,canvasMount:n}){super({...S,dom:n}),this.wrapper=e,this.img=t,this.pendingPlay=!1,this.setupParallax(),this.loadImage(),this.bindEvents()}init(){this.radiusPx=parseFloat(getComputedStyle(this.options.dom.parentElement).borderTopLeftRadius)||16,C(this,{colorSource:this.options.dom}),this.fit()}fit(){this.camera.aspect=this.options.dom.offsetWidth/this.options.dom.offsetHeight||1,this.camera.updateProjectionMatrix(),w(this,{radiusPx:this.radiusPx,widthPx:this.options.dom.offsetWidth})}onResize(){this.fit(),this.renderFrame()}setupParallax(){let e=parseFloat(this.wrapper.dataset.blurSweepParallax);if(!e)return;this.uniforms.uParallaxAmount.value=Math.abs(e)/100;let t=e<0?-1:1;this.scrollTrigger=n.create({trigger:this.wrapper,start:`top bottom`,end:`bottom top`,scrub:!0,onUpdate:e=>{this.uniforms.uParallax.value=(e.progress*2-1)*t,this.renderFrame()}})}loadImage(){let e=()=>{if(!this.material||!this.img.naturalWidth)return;let e=Math.max(this.options.dom.offsetWidth,this.options.dom.offsetHeight);T(this.img,e).then(e=>{if(!this.material)return e.image?.close?.();this.uniforms.uMap.value=e,this.uniforms.uImageAspect.value=e.userData.aspect,this.wrapper.setAttribute(`data-blur-sweep-ready`,``),this.renderFrame(),this.pendingPlay&&this.play()})};this.img.complete&&this.img.naturalWidth?e():this.img.addEventListener(`load`,e,{once:!0})}bindEvents(){this.onEnter=()=>this.play(),this.wrapper.addEventListener(`mouseenter`,this.onEnter)}unbindEvents(){this.onEnter&&this.wrapper.removeEventListener(`mouseenter`,this.onEnter)}play(){if(!this.uniforms.uMap.value){this.pendingPlay=!0;return}this.pendingPlay=!1,e.killTweensOf(this.uniforms.uProgress),this.uniforms.uProgress.value=0,this.start(),e.to(this.uniforms.uProgress,{value:1,duration:p,ease:`power2.inOut`,onComplete:()=>{this.stop(),this.renderFrame()}})}renderFrame(){!this.material||!this.uniforms.uMap.value||this.renderer.render(this.scene,this.camera)}destroy(){this.unbindEvents(),this.scrollTrigger?.kill(),e.killTweensOf(this.uniforms?.uProgress),this.uniforms?.uMap.value?.image?.close?.(),this.uniforms?.uMap.value?.dispose?.(),this.material?.dispose?.(),this.geometry?.dispose?.(),super.destroy(),this.options.dom.remove(),this.wrapper.removeAttribute(`data-blur-sweep-ready`)}},O=class e{static mount(t=document){let n=t.querySelectorAll(`[data-blur-sweep]`);return!n.length||window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches||!window.matchMedia?.(`(hover: hover)`).matches?null:new e(n)}constructor(e){let n=[...e].filter(e=>e.querySelector(`img`));this.hoverWrappers=n.filter(e=>!e.hasAttribute(`data-blur-sweep-parallax`));let r=n.filter(e=>e.hasAttribute(`data-blur-sweep-parallax`));this.pool=null,this.poolWarmId=null,this.parallaxInstances=[],this.queue=[],this.idleId=null,this.visibleHover=new Set,this.textureQueue=[],this.texIdleId=null,this.triggerMedia=new Map;for(let e of this.hoverWrappers)this.triggerMedia.set(e.closest(`.card`)||e,e);this.onEnter=e=>{let t=this.triggerMedia.get(e.currentTarget);if(t){if(g()){_=t;return}_=null,this.activateHover(t)}},this.onLeave=e=>{let t=this.triggerMedia.get(e.currentTarget);t&&this.pool?.activeWrapper===t&&this.pool.hold(!1)};for(let e of this.triggerMedia.keys())e.addEventListener(`mouseenter`,this.onEnter),e.addEventListener(`mouseleave`,this.onLeave);if(this.lenis=t()?.lenis??null,this.wasMoving=!1,this.onLenisScroll=()=>{this.pool?.activeWrapper?.querySelector(`[data-parallax]`)&&(this.pool.matchParallax(),this.pool.renderFrame());let e=g();this.wasMoving&&!e&&(this.playPendingHover(),this.warmVisibleTextures()),this.wasMoving=e},this.lenis?.on(`scroll`,this.onLenisScroll),this.hoverWrappers.length){this.poolWarmId=b(()=>{this.poolWarmId=null,this.ensurePool()}),this.hoverObserver=new IntersectionObserver(e=>{for(let t of e)t.isIntersecting?this.visibleHover.add(t.target):this.visibleHover.delete(t.target);this.warmVisibleTextures()},{rootMargin:`100px`});for(let e of this.hoverWrappers)this.hoverObserver.observe(e)}if(r.length){this.observer=new IntersectionObserver(e=>{for(let t of e)t.isIntersecting&&(this.observer.unobserve(t.target),this.enqueue(t.target))},{rootMargin:`200px`});for(let e of r)this.observer.observe(e)}}ensurePool(){return this.pool?this.pool:(this.pool=new E,this.pool.warm(),this.pool)}activateHover(e){let t=e.querySelector(`img`);if(!t)return;let n=this.ensurePool();n.attachTo(e,t),n.hold(!0)}playPendingHover(){let e=_;_=null,e&&(e.closest(`.card`)||e).matches(`:hover`)&&this.activateHover(e)}warmVisibleTextures(){if(!(g()||!this.visibleHover.size)){for(let e of this.visibleHover)this.textureQueue.includes(e)||this.textureQueue.push(e);this.scheduleTextureWarm()}}scheduleTextureWarm(){this.texIdleId!==null||!this.textureQueue.length||(this.texIdleId=b(()=>{if(this.texIdleId=null,g())return;let e=this.textureQueue.shift(),t=e?.querySelector(`img`);t&&this.ensurePool().prewarm(t,e.offsetWidth,e.offsetHeight),this.textureQueue.length&&this.scheduleTextureWarm()}))}enqueue(e){this.queue.push(e),this.scheduleDrain()}scheduleDrain(){this.idleId===null&&(this.idleId=b(()=>{this.idleId=null;let e=this.queue.shift();e&&this.createParallaxInstance(e),this.queue.length&&this.scheduleDrain()}))}createParallaxInstance(e){let t=e.querySelector(`img`);if(!t)return;let n=document.createElement(`div`);n.setAttribute(`data-blur-sweep-canvas`,``),e.appendChild(n),this.parallaxInstances.push(new D({wrapper:e,img:t,canvasMount:n}))}destroy(){this.lenis?.off(`scroll`,this.onLenisScroll),_=null;for(let e of this.triggerMedia.keys())e.removeEventListener(`mouseenter`,this.onEnter),e.removeEventListener(`mouseleave`,this.onLeave);this.poolWarmId!==null&&(x(this.poolWarmId),this.poolWarmId=null),this.texIdleId!==null&&(x(this.texIdleId),this.texIdleId=null),this.hoverObserver?.disconnect(),this.visibleHover.clear(),this.textureQueue=[],this.observer?.disconnect(),this.idleId!==null&&(x(this.idleId),this.idleId=null),this.queue=[];try{this.pool?.destroy()}catch(e){console.warn(`BlurSweepPool teardown failed`,e)}this.pool=null;for(let e of this.parallaxInstances)try{e.destroy()}catch(e){console.warn(`BlurSweepImage teardown failed`,e)}this.parallaxInstances=[]}};export{O as default};