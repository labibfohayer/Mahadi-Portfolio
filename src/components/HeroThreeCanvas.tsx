import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

export interface ServiceItem {
  id: number;
  name: string;
  slug: string;
  image: string;
  imageAlt: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 60,
    name: "Web development",
    slug: "web-development",
    image: "/textures/website-service-cover.jpg",
    imageAlt: "website service cover"
  },
  {
    id: 63,
    name: "eCommerce",
    slug: "ecommerce",
    image: "/textures/ecommerce-service-cover.jpg",
    imageAlt: "ecommerce service cover"
  },
  {
    id: 61,
    name: "Application development",
    slug: "applications",
    image: "/textures/application-service-cover-1024x1024.jpg",
    imageAlt: "Application service cover"
  },
  {
    id: 64,
    name: "Artificial intelligence",
    slug: "artificial-intelligence",
    image: "/textures/ai-service-cover-1024x1024.jpg",
    imageAlt: "ai service cover"
  },
  {
    id: 62,
    name: "Blockchain",
    slug: "blockchain",
    image: "/textures/blockchain-service-cover-1024x1024.jpg",
    imageAlt: "blockchain service cover"
  }
];

// Exact Vertex Shader 'j' from Weichie production bundle
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

// Exact Fragment Shader 'M' from Weichie production bundle
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
  const stateRef = useRef({
    rotation: 0,
    targetRotation: 0,
    spinVelocity: -0.003,
    autoRotateSpeed: -0.003,
    dragInfluence: 0.005,
    isDragging: false,
    lastPointerX: 0,
    pointerDownX: 0,
    lastPointerTime: 0,
    planes: [] as THREE.Mesh[],
    carousel: null as THREE.Group | null,
    isAnimatingScroll: false,
    resumeTimer: null as any
  });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 720;

    // Weichie camera parameters: fov = 24, z = 8.6
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(24, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.6);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
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

    // Weichie parameters: N = 3 repetitions of 5 services = 15 planes!
    const N = 3;
    const planeList: ServiceItem[] = [];
    for (let r = 0; r < N; r++) {
      SERVICES.forEach(s => planeList.push(s));
    }

    const totalPlanes = planeList.length;
    const planeWidth = 1.6;
    const planeHeight = 1.6;
    const borderRadius = 0.08;
    const bendAmount = 0.12;

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
      mesh.position.set(
        Math.sin(angle) * carouselRadius,
        0,
        Math.cos(angle) * carouselRadius
      );
      mesh.rotation.y = angle;

      mesh.userData = {
        baseAngle: angle,
        service,
        material
      };

      carousel.add(mesh);
      stateRef.current.planes.push(mesh);
    });

    // Pointer Drag Physics matching Weichie
    const R = 0.35;
    const B = 6.0;

    const onPointerDown = (e: PointerEvent) => {
      stateRef.current.isDragging = true;
      stateRef.current.lastPointerX = e.clientX;
      stateRef.current.pointerDownX = e.clientX;
      stateRef.current.lastPointerTime = performance.now();
      stateRef.current.spinVelocity = 0;
      if (stateRef.current.resumeTimer) {
        clearTimeout(stateRef.current.resumeTimer);
        stateRef.current.resumeTimer = null;
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!stateRef.current.isDragging) return;
      const deltaX = e.clientX - stateRef.current.lastPointerX;
      stateRef.current.lastPointerX = e.clientX;

      const influence = stateRef.current.dragInfluence;
      stateRef.current.rotation += deltaX * influence;
      stateRef.current.targetRotation = stateRef.current.rotation;

      const now = performance.now();
      const dt = Math.max(now - stateRef.current.lastPointerTime, 1) / 1000;
      stateRef.current.lastPointerTime = now;
      const v = (deltaX * influence) / dt;
      stateRef.current.spinVelocity = stateRef.current.spinVelocity * (1 - R) + v * R;
    };

    const onPointerUp = () => {
      if (!stateRef.current.isDragging) return;
      stateRef.current.isDragging = false;
      stateRef.current.spinVelocity = THREE.MathUtils.clamp(stateRef.current.spinVelocity, -B, B);

      stateRef.current.resumeTimer = setTimeout(() => {
        stateRef.current.resumeTimer = null;
      }, 1500);
    };

    const dom = renderer.domElement;
    dom.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    // Render loop
    let animId: number;
    let lastTime = performance.now();
    const I = Math.cos(Math.PI / 3);

    const tick = () => {
      animId = requestAnimationFrame(tick);
      const now = performance.now();
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      const state = stateRef.current;
      if (!state.isDragging && !state.isAnimatingScroll) {
        if (!state.resumeTimer) {
          const speed = state.autoRotateSpeed;
          state.spinVelocity += (speed - state.spinVelocity) * (dt * 1.5);
          state.rotation += state.spinVelocity * (dt * 60);
        } else {
          state.spinVelocity *= 0.95;
          state.rotation += state.spinVelocity * (dt * 60);
        }
      }

      carousel.rotation.y = state.rotation;

      // Update plane opacity based on cosine angle (Weichie optical falloff)
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
      });

      if (!state.isAnimatingScroll && activeS && activeS !== activeSlug) {
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

  // When external activeSlug changes, animate rotation to bring that card front-center
  useEffect(() => {
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

    stateRef.current.isAnimatingScroll = true;
    gsap.to(stateRef.current, {
      rotation: targetRot,
      duration: 1.2,
      ease: 'power2.inOut',
      onComplete: () => {
        stateRef.current.isAnimatingScroll = false;
      }
    });
  }, [activeSlug]);

  return (
    <div
      ref={mountRef}
      className="w-full h-[540px] sm:h-[640px] md:h-[720px] relative cursor-grab active:cursor-grabbing select-none"
    />
  );
};
