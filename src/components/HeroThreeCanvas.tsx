import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

export interface ServiceItem {
  id: number;
  name: string;
  slug: string;
  image?: string;
  imageAlt?: string;
}

export const SERVICES: ServiceItem[] = [
  { id: 1, name: "Video editing", slug: "video-editing" },
  { id: 2, name: "Motion graphics", slug: "motion-graphics" },
  { id: 3, name: "Graphic design", slug: "graphic-design" },
  { id: 4, name: "Color & Sound", slug: "color-sound" },
  { id: 5, name: "Brand identity", slug: "brand-identity" }
];

export interface HeroGraphicPlane {
  id: number;
  name: string;
  slug: string;
  image: string;
  imageAlt: string;
}

export const HERO_PLANES: HeroGraphicPlane[] = [
  { id: 1, name: "Graphic design", slug: "graphic-design", image: "/textures/graphic-hero/hero-1.webp", imageAlt: "Graphic Poster Design" },
  { id: 2, name: "Video editing", slug: "video-editing", image: "/textures/graphic-hero/hero-2.webp", imageAlt: "Vector & Illustration Art" },
  { id: 3, name: "Motion graphics", slug: "motion-graphics", image: "/textures/graphic-hero/hero-3.webp", imageAlt: "Motion Graphic Composition" },
  { id: 4, name: "Brand identity", slug: "brand-identity", image: "/textures/graphic-hero/hero-4.webp", imageAlt: "Creative Brand Artwork" },
  { id: 5, name: "Color & Sound", slug: "color-sound", image: "/textures/graphic-hero/hero-5.webp", imageAlt: "Commercial Design Asset" },
  { id: 6, name: "Graphic design", slug: "graphic-design", image: "/textures/graphic-hero/hero-6.webp", imageAlt: "Social Media & Banner Art" },
  { id: 7, name: "Video editing", slug: "video-editing", image: "/textures/graphic-hero/hero-7.webp", imageAlt: "Cinematic Narrative Cut" },
  { id: 8, name: "Motion graphics", slug: "motion-graphics", image: "/textures/graphic-hero/hero-8.webp", imageAlt: "Kinetic Typography & Effects" },
  { id: 9, name: "Brand identity", slug: "brand-identity", image: "/textures/graphic-hero/hero-9.webp", imageAlt: "Visual Identity System" },
  { id: 10, name: "Color & Sound", slug: "color-sound", image: "/textures/graphic-hero/hero-10.webp", imageAlt: "Atmospheric Color Palette" },
  { id: 11, name: "Graphic design", slug: "graphic-design", image: "/textures/graphic-hero/hero-11.webp", imageAlt: "Packaging & Product Art" },
  { id: 12, name: "Video editing", slug: "video-editing", image: "/textures/graphic-hero/hero-12.webp", imageAlt: "Commercial Product Video" },
  { id: 13, name: "Motion graphics", slug: "motion-graphics", image: "/textures/graphic-hero/hero-13.webp", imageAlt: "Visual Effects & Compositing" },
  { id: 14, name: "Brand identity", slug: "brand-identity", image: "/textures/graphic-hero/hero-14.webp", imageAlt: "High-Impact Brand Layout" },
  { id: 15, name: "Color & Sound", slug: "color-sound", image: "/textures/graphic-hero/hero-15.webp", imageAlt: "Master Creative Showcase" }
];

// Exact Vertex Shader 'j' from Weichie production bundle with cylindrical bend
const vertexShader = `
uniform float uBend;
uniform vec2 uSize;
varying vec2 vUv;

void main() {
  vUv = uv;
  vec3 p = position;
  float halfW = uSize.x * 0.5;
  float distX = clamp(abs(p.x) / halfW, 0.0, 1.0); 
  p.z -= uBend * distX * distX;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}
`;

// Shadow Studio 3 Progressive Volumetric Shadow Vertex Shader
const shadowVertexShader = `
uniform float uBend;
uniform vec2 uSize;
varying vec2 vUv;

void main() {
  vUv = uv;
  vec3 p = position;
  float halfW = uSize.x * 0.5;
  float distX = clamp(abs(p.x) / halfW, 0.0, 1.0); 
  p.z -= uBend * distX * distX;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}
`;

// Shadow Studio 3 Progressive Volumetric Shadow Fragment Shader
const shadowFragmentShader = `
precision highp float;

uniform vec2 uCardSize;
uniform vec2 uShadowSize;
uniform float uRadius;
uniform float uOpacity;
uniform vec2 uOffset;
varying vec2 vUv;

float sdRoundedBox(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + vec2(r);
  return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r;
}

void main() {
  vec2 p = (vUv - 0.5) * uShadowSize;
  vec2 shadowP = p - uOffset;
  float d = sdRoundedBox(shadowP, uCardSize * 0.5, uRadius);

  // Shadow Studio 3: 3-Stage Progressive Volumetric Falloff
  // Peak opacity strictly tuned to 0.45 (between 40% and 50% as requested)
  // Stage 1: Contact Occlusion (tight & deep)
  float s1 = exp(-max(d, 0.0) * 18.0) * 0.22;

  // Stage 2: Directional Soft Mid-Falloff
  float s2 = exp(-max(d, 0.0) * 6.5) * 0.15;

  // Stage 3: Volumetric Studio Diffusion (wide ambient bloom)
  float s3 = exp(-max(d, 0.0) * 2.5) * 0.08;

  float shadowAlpha = (s1 + s2 + s3) * uOpacity;

  // Strict Top Cutoff: Eliminates any upward shadow marks/bleed above card top
  float topFade = smoothstep(uCardSize.y * 0.5 - 0.01, uCardSize.y * 0.5 - 0.08, shadowP.y);
  shadowAlpha *= topFade;

  // Perimeter feathering: guarantees zero bounding box lines outside the shape
  vec2 normP = abs(p) / (uShadowSize * 0.5);
  float edgeFade = (1.0 - smoothstep(0.65, 0.96, normP.x)) * (1.0 - smoothstep(0.65, 0.96, normP.y));
  shadowAlpha *= edgeFade;

  if (shadowAlpha <= 0.002) discard;

  // Warm studio shadow tone
  vec3 shadowColor = vec3(0.045, 0.035, 0.03);
  gl_FragColor = vec4(shadowColor, shadowAlpha);
}
`;

// Clean Artwork Fragment Shader (100% pristine texture without dark border artifacts)
const fragmentShader = `
precision highp float;

uniform sampler2D uMap;
uniform float uHasMap;
uniform vec3 uColor;
uniform vec2 uSize;        
uniform float uRadius;     
uniform float uOpacity;
uniform float uImageAspect; 
varying vec2 vUv;

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

void main() {
  vec2 uv = coverUv(vUv, uImageAspect, uSize.x / uSize.y);
  vec3 col = uHasMap > 0.5 ? texture2D(uMap, uv).rgb : uColor;
  vec2 p = (vUv - 0.5) * uSize;
  float d = sdRoundedBox(p, uSize * 0.5, uRadius);
  float aa = fwidth(d);
  float maskAlpha = 1.0 - smoothstep(-aa, aa, d);
  float alpha = maskAlpha * uOpacity;
  if (alpha <= 0.001) discard;

  gl_FragColor = vec4(linearToSRGB(col), alpha);
}
`;

interface HeroThreeCanvasProps {
  activeSlug: string;
  onActiveChange: (slug: string) => void;
}

export const HeroThreeCanvas: React.FC<HeroThreeCanvasProps> = ({ activeSlug, onActiveChange }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const internalActiveSlug = useRef(activeSlug);
  const stateRef = useRef({
    rotation: 0,
    targetRotation: 0,
    spinVelocity: -0.04,
    dragInfluence: 0.0035,
    isDragging: false,
    lastPointerX: 0,
    pointerDownX: 0,
    lastPointerTime: 0,
    planes: [] as THREE.Mesh[],
    carousel: null as THREE.Group | null,
    isAnimatingScroll: false
  });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 720;

    // Weichie camera parameters: fov = 24, z = 8.6 (desktop) / 11.5 (mobile framing)
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(24, width / height, 0.1, 100);
    camera.position.set(0, 0, width < 768 ? 11.5 : 8.6);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    const carousel = new THREE.Group();
    scene.add(carousel);
    stateRef.current.carousel = carousel;

    // Apply exact tilt: -13 degrees
    const carouselRadius = 4.3;
    const tiltDeg = -13;
    const tiltRad = THREE.MathUtils.degToRad(tiltDeg);
    carousel.rotation.x = tiltRad;
    carousel.position.y = carouselRadius * Math.sin(tiltRad);

    const textureLoader = new THREE.TextureLoader();
    textureLoader.crossOrigin = 'anonymous';

    // 15 unique graphic artwork planes around the 3D cylinder
    const planeList = HERO_PLANES;

    const totalPlanes = planeList.length;
    const planeWidth = 1.6;
    const planeHeight = 1.6;
    const borderRadius = 0.08;
    const bendAmount = 0.12;

    // Shadow Studio 3 directional geometry (tuned with downward cast and 0 bleed above card top)
    const shadowWidth = 1.95;
    const shadowHeight = 1.95;
    const shadowGeometry = new THREE.PlaneGeometry(shadowWidth, shadowHeight, 24, 1);

    planeList.forEach((service, index) => {
      const angle = (index / totalPlanes) * Math.PI * 2;
      // 24 horizontal segments allow smooth vertex shader bending
      const geometry = new THREE.PlaneGeometry(planeWidth, planeHeight, 24, 1);

      const uniforms = {
        uMap: { value: null },
        uHasMap: { value: 0.0 },
        uColor: { value: new THREE.Color(0xeeeeee) },
        uSize: { value: new THREE.Vector2(planeWidth, planeHeight) },
        uRadius: { value: borderRadius },
        uBend: { value: bendAmount },
        uOpacity: { value: 1.0 },
        uImageAspect: { value: 1.0 }
      };

      const material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms,
        transparent: true,
        side: THREE.DoubleSide
      });

      // Shadow Studio 3 Progressive Volumetric Shadow Material (40%-50% opacity range)
      const shadowUniforms = {
        uCardSize: { value: new THREE.Vector2(planeWidth, planeHeight) },
        uShadowSize: { value: new THREE.Vector2(shadowWidth, shadowHeight) },
        uRadius: { value: borderRadius },
        uBend: { value: bendAmount },
        uOpacity: { value: 1.0 },
        uOffset: { value: new THREE.Vector2(0.0, -0.06) }
      };

      const shadowMaterial = new THREE.ShaderMaterial({
        vertexShader: shadowVertexShader,
        fragmentShader: shadowFragmentShader,
        uniforms: shadowUniforms,
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide
      });

      if (service.image) {
        textureLoader.load(service.image, (tex) => {
          tex.colorSpace = THREE.SRGBColorSpace;
          material.uniforms.uMap.value = tex;
          material.uniforms.uHasMap.value = 1.0;
          if (tex.image && tex.image.width && tex.image.height) {
            material.uniforms.uImageAspect.value = tex.image.width / tex.image.height;
          }
          material.needsUpdate = true;
        });
      }

      const mesh = new THREE.Mesh(geometry, material);
      mesh.renderOrder = 2;

      // Attach Shadow Studio 3 mesh positioned strictly downward & behind the card in 3D space
      const shadowMesh = new THREE.Mesh(shadowGeometry, shadowMaterial);
      shadowMesh.position.set(0, -0.08, -0.04);
      shadowMesh.renderOrder = 1;
      mesh.add(shadowMesh);

      mesh.position.set(
        Math.sin(angle) * carouselRadius,
        0,
        Math.cos(angle) * carouselRadius
      );
      mesh.rotation.y = angle;

      mesh.userData = {
        baseAngle: angle,
        service,
        material,
        shadowMaterial
      };

      carousel.add(mesh);
      stateRef.current.planes.push(mesh);
    });

    // Continuous 120 FPS Wheel Motion Dynamics - Gentle Hypnotic Slow Wheel Speed (~2.3 deg/s)
    const BASE_SPEED = -0.04;

    const onPointerDown = (e: PointerEvent) => {
      stateRef.current.isDragging = true;
      stateRef.current.isAnimatingScroll = false;
      stateRef.current.lastPointerX = e.clientX;
      stateRef.current.pointerDownX = e.clientX;
      stateRef.current.lastPointerTime = performance.now();
      stateRef.current.spinVelocity = 0;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!stateRef.current.isDragging) return;
      const deltaX = e.clientX - stateRef.current.lastPointerX;
      stateRef.current.lastPointerX = e.clientX;

      const influence = stateRef.current.dragInfluence;
      stateRef.current.rotation += deltaX * influence;

      const now = performance.now();
      const dt = Math.max((now - stateRef.current.lastPointerTime) / 1000, 0.001);
      stateRef.current.lastPointerTime = now;
      const v = (deltaX * influence) / dt;
      stateRef.current.spinVelocity = stateRef.current.spinVelocity * 0.7 + v * 0.3;
    };

    const onPointerUp = () => {
      if (!stateRef.current.isDragging) return;
      stateRef.current.isDragging = false;
      stateRef.current.spinVelocity = THREE.MathUtils.clamp(stateRef.current.spinVelocity, -2.5, 2.5);
    };

    const dom = renderer.domElement;
    dom.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    // Continuous 120 FPS Sub-frame Render Loop
    let animId: number;
    let lastTime = performance.now();
    const I = Math.cos(Math.PI / 3);

    const tick = () => {
      animId = requestAnimationFrame(tick);
      const now = performance.now();
      // Sub-frame delta time normalization (smooth at 120 FPS, 60 FPS, or 144 FPS)
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      const state = stateRef.current;
      if (!state.isDragging) {
        if (state.isAnimatingScroll) {
          // Smooth spring to requested service, then seamlessly continue wheel rotation
          const diff = state.targetRotation - state.rotation;
          if (Math.abs(diff) < 0.003) {
            state.rotation = state.targetRotation;
            state.isAnimatingScroll = false;
            state.spinVelocity = BASE_SPEED;
          } else {
            state.rotation += diff * Math.min(dt * 7.0, 1.0);
          }
        } else {
          // Continuous unbroken rotation like a slow wheel
          state.spinVelocity += (BASE_SPEED - state.spinVelocity) * Math.min(dt * 2.0, 1.0);
          state.rotation += state.spinVelocity * dt;
        }
      }

      carousel.rotation.y = state.rotation;

      // Update plane opacity based on cosine angle
      let maxCos = -Infinity;
      let activeS = '';

      state.planes.forEach((mesh) => {
        const r = mesh.userData.baseAngle + state.rotation;
        const cosA = Math.cos(r);
        if (cosA > maxCos) {
          maxCos = cosA;
          activeS = mesh.userData.service.slug;
        }

        let opacity: number;
        if (cosA >= I) {
          opacity = 1.0;
        } else {
          const n = (cosA + 1) / (I + 1);
          opacity = Math.max(0, n);
        }
        mesh.userData.material.uniforms.uOpacity.value = opacity;

        // Shadow Studio 3: Soft progressive downward shadow with 40-50% opacity
        if (mesh.userData.shadowMaterial) {
          mesh.userData.shadowMaterial.uniforms.uOpacity.value = opacity;
          const sinA = Math.sin(r);
          mesh.userData.shadowMaterial.uniforms.uOffset.value.set(
            0.02 * sinA,
            -0.06 - 0.025 * Math.max(cosA, 0.0)
          );
        }
      });

      // Update active label smoothly without halting wheel rotation
      if (activeS && activeS !== internalActiveSlug.current) {
        internalActiveSlug.current = activeS;
        onActiveChange(activeS);
      }

      renderer.render(scene, camera);
    };

    tick();

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || 720;
      camera.aspect = w / h;
      camera.position.z = w < 768 ? 11.5 : 8.6;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      dom.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      if (dom.parentNode) dom.parentNode.removeChild(dom);
    };
  }, []);

  // When external activeSlug changes via click, smoothly steer wheel to target, then keep rotating
  useEffect(() => {
    if (activeSlug === internalActiveSlug.current) return;
    internalActiveSlug.current = activeSlug;

    if (!stateRef.current.carousel || stateRef.current.isDragging) return;
    const matchingPlanes = stateRef.current.planes.filter(
      p => p.userData.service.slug === activeSlug
    );
    if (!matchingPlanes.length) return;

    // Pick closest matching plane
    let closestPlane = matchingPlanes[0];
    let minDiff = Infinity;
    const twoPi = Math.PI * 2;

    matchingPlanes.forEach(p => {
      let targetRot = -p.userData.baseAngle;
      while (targetRot - stateRef.current.rotation > Math.PI) targetRot -= twoPi;
      while (targetRot - stateRef.current.rotation < -Math.PI) targetRot += twoPi;
      const diff = Math.abs(targetRot - stateRef.current.rotation);
      if (diff < minDiff) {
        minDiff = diff;
        closestPlane = p;
      }
    });

    let targetRot = -closestPlane.userData.baseAngle;
    while (targetRot - stateRef.current.rotation > Math.PI) targetRot -= twoPi;
    while (targetRot - stateRef.current.rotation < -Math.PI) targetRot += twoPi;

    stateRef.current.targetRotation = targetRot;
    stateRef.current.isAnimatingScroll = true;
  }, [activeSlug]);

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[500px] relative cursor-grab active:cursor-grabbing select-none"
    />
  );
};
