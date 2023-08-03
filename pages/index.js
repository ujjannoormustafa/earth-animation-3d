import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/earth/scene.gltf");
  return <primitive object={gltf.scene} scale={0.04} />;
};

export default function Home() {
  return (
    <div className="gridbox">
      {/* Top line */}
      <div className="line">
        <div className="box">
          <img src="/flages/usa.jpg" />
        </div>
        <div className="box"></div>
        <div className="box">
          <img src="/flages/canada.png" />
        </div>
      </div>
      {/* Second Line */}
      <div className="line">
        <div className="box">
          <img src="/flages/france.png" />
        </div>
        <div className="globe">
          <Canvas
            shadows
            dpr={[1, 2]}
            camera={{ position: [0, 0, 10], fov: 50 }}
          >
            <ambientLight intensity={0.7} />
            <spotLight
              intensity={0.5}
              angle={0.1}
              penumbra={1}
              position={[10, 15, 10]}
              castShadow
            />

            <Model />
            {/* To add environment effect to the model */}
            <Environment preset="city" />
            {/* Add the country labels */}

            <OrbitControls autoRotate enableZoom={false} />
          </Canvas>
        </div>
        <div className="box">
          <img src="/flages/netherland.png" />
        </div>
      </div>
      {/* Third Line */}
      <div className="line">
        <div className="box">
          <img src="/flages/czen.png" />
        </div>
        <div className="box"></div>
        <div className="box">
          <img src="/flages/israel.png" />
        </div>
      </div>
    </div>
  );
}
