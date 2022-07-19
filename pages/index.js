import Head from 'next/head'
import { Suspense } from "react"
import { Canvas, useLoader } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

const Model = () => {
  // location of the 3D model
  const gltf = useLoader(GLTFLoader, "/earth/scene.gltf");
  return (
    <div>
      {/* Use scale to control the size of the 3D model */}
      <primitive object={gltf.scene} scale={0.01} />
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Three.js Example</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="globe">
        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
          <Suspense fallback={null}>
            <Model />
            <Environment preset="city" />
          </Suspense>
        </Canvas>
      </div>

    </div>
  )
}
