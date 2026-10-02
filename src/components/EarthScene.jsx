import React, { useRef, useEffect } from "react";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";

import { OrbitControls, Stars, Html } from "@react-three/drei";

import * as THREE from "three";

/* ================================================================
   INDRA — REALISTIC EARTH SCENE

   Current version:

   - Large cinematic Earth
   - India-facing orientation
   - Real Earth texture
   - Cloud layer
   - Atmosphere
   - Cinematic lighting
   - Stars
   - Static Earth
   - Disaster markers

   The Earth intentionally does NOT rotate automatically.
================================================================ */

/* ================================================================
   EARTH TEXTURES
================================================================ */

const EARTH_TEXTURE =
  "https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg";

const EARTH_NORMAL =
  "https://threejs.org/examples/textures/planets/earth_normal_2048.jpg";

const EARTH_SPECULAR =
  "https://threejs.org/examples/textures/planets/earth_specular_2048.jpg";

const CLOUD_TEXTURE =
  "https://threejs.org/examples/textures/planets/earth_clouds_1024.png";

/* ================================================================
   DISASTER MARKER

   These labels sit on top of the globe.

   Later these can become:
   - live alerts
   - district alerts
   - IMD alerts
   - flood warnings
   - cyclone warnings
   - earthquake alerts
================================================================ */

function DisasterMarker({ position, icon, title, color }) {
  return (
    <Html position={position} center distanceFactor={4.0} occlude={false}>
      <div
        className="earth-disaster-marker"
        style={{
          "--marker-color": color,
        }}
      >
        <div className="earth-marker-icon">{icon}</div>

        <div className="earth-marker-text">{title}</div>
      </div>
    </Html>
  );
}

/* ================================================================
   EARTH MODEL
================================================================ */

function Earth() {
  const earthRef = useRef(null);

  const cloudsRef = useRef(null);

  /* ================================================================
     LOAD EARTH TEXTURES
  ================================================================= */

  const [earthTexture, normalTexture, specularTexture, cloudTexture] =
    useLoader(THREE.TextureLoader, [
      EARTH_TEXTURE,
      EARTH_NORMAL,
      EARTH_SPECULAR,
      CLOUD_TEXTURE,
    ]);

  /* ================================================================
     TEXTURE CONFIGURATION
  ================================================================= */

  useEffect(() => {
    /*
      Earth is an image texture,
      therefore use sRGB.
    */

    earthTexture.colorSpace = THREE.SRGBColorSpace;

    /*
      Clouds are also image data.
    */

    cloudTexture.colorSpace = THREE.SRGBColorSpace;

    earthTexture.needsUpdate = true;

    cloudTexture.needsUpdate = true;
  }, [earthTexture, cloudTexture]);

  /* ================================================================
     INDIA-FACING EARTH ORIENTATION

     Keep this STATIC.

     The current orientation was already working for the
     India-facing composition, so we preserve it.
  ================================================================= */

  useEffect(() => {
    if (!earthRef.current) {
      return;
    }

    /*
      Horizontal rotation.

      This determines which part of Earth faces
      the camera.
    */

    earthRef.current.rotation.y = THREE.MathUtils.degToRad(165);

    /*
      Slight vertical tilt.
    */

    earthRef.current.rotation.x = THREE.MathUtils.degToRad(28);
  }, []);

  /* ================================================================
     STATIC EARTH

     Deliberately no automatic rotation.

     The previous animated code is intentionally disabled because
     the Home hero should behave like a fixed dashboard visual.
  ================================================================= */

  useFrame(() => {
    // Static Earth.
  });

  return (
    /*
      SCALE THE WHOLE EARTH GROUP.

      The original geometry is still 2.15,
      but the group makes the complete visual substantially larger.
    */

    <group position={[1.2, -0.02, 0]} scale={1.06}>
      {/* ==========================================================
          MAIN EARTH
      ========================================================== */}

      <mesh ref={earthRef} castShadow receiveShadow>
        <sphereGeometry args={[2.15, 128, 128]} />

        <meshPhongMaterial
          map={earthTexture}
          normalMap={normalTexture}
          specularMap={specularTexture}
          specular={new THREE.Color("#607f9c")}
          shininess={13}
          emissive={new THREE.Color("#071828")}
          emissiveIntensity={0.11}
        />
      </mesh>

      {/* ==========================================================
          CLOUD LAYER
      ========================================================== */}

      <mesh ref={cloudsRef} scale={1.014}>
        <sphereGeometry args={[2.15, 96, 96]} />

        <meshPhongMaterial
          map={cloudTexture}
          transparent
          opacity={0.24}
          depthWrite={false}
        />
      </mesh>

      {/* ==========================================================
          INNER BLUE ATMOSPHERE
      ========================================================== */}

      <mesh scale={1.035}>
        <sphereGeometry args={[2.15, 96, 96]} />

        <meshBasicMaterial
          color="#2f91ff"
          transparent
          opacity={0.055}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>

      {/* ==========================================================
          OUTER ATMOSPHERE
      ========================================================== */}

      <mesh scale={1.075}>
        <sphereGeometry args={[2.15, 96, 96]} />

        <meshBasicMaterial
          color="#368cff"
          transparent
          opacity={0.12}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>

      {/* ==========================================================
          FLOOD RISK
      ========================================================== */}

      {/* ==========================================================
          LANDSLIDE RISK

      ========================================================== */}

      {/* ==========================================================
          HEAVY RAINFALL
      ========================================================== */}

      {/* ==========================================================
          CYCLONE ALERT
      ========================================================== */}
    </group>
  );
}

/* ================================================================
   EARTH SCENE
================================================================ */

function EarthScene() {
  return (
    <div className="earth-scene">
      <Canvas
        camera={{
          position: [0, 0, 7.4],

          fov: 34,

          near: 0.1,

          far: 100,
        }}
        dpr={[1, 2]}
        gl={{
          antialias: true,

          alpha: true,

          powerPreference: "high-performance",
        }}
      >
        {/* ========================================================
            SPACE BACKGROUND
        ========================================================= */}

        <color attach="background" args={["#020b14"]} />

        {/* ========================================================
            STAR FIELD
        ========================================================= */}

        <Stars
          radius={70}
          depth={35}
          count={1800}
          factor={2}
          saturation={0}
          fade
          speed={0.15}
        />

        {/* ========================================================
            MAIN SUN LIGHT

            Stronger than previous version so the Earth
            feels brighter like the reference.
        ========================================================= */}

        <directionalLight
          position={[-4, 4, 6]}
          intensity={4.2}
          color="#ffffff"
        />

        {/* ========================================================
            BLUE RIM LIGHT
        ========================================================= */}

        <directionalLight
          position={[5, -2, -5]}
          intensity={1.8}
          color="#277fff"
        />

        {/* ========================================================
            SOFT GLOBAL LIGHT
        ========================================================= */}

        <ambientLight intensity={0.34} />

        {/* ========================================================
            EARTH
        ========================================================= */}

        <Earth />

        {/* ========================================================
            ORBIT CONTROLS

            Rotation disabled.
            Zoom disabled.
            Pan disabled.

            The Earth must remain static in the hero.
        ========================================================= */}

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
}

export default EarthScene;
