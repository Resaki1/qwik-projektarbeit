/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import { Canvas } from "@react-three/fiber";
import { IPad } from "../Carousel/IPad/IPad";
import { CameraControls } from "@react-three/drei";

// Create React component standard way
function ThreeViewer() {
  return (
    <Canvas style={{ height: "60vh" }}>
      <CameraControls />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <IPad />
    </Canvas>
  );
}

// Convert React component to Qwik component
export const QThreeViewer = qwikify$(ThreeViewer);
