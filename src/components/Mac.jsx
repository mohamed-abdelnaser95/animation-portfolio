/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { a as three } from "@react-spring/three";

export default function Mac({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("../../public/img/mac-draco.glb");
  return (
    <group ref={group} {...props} dispose={null} >
      <group position={[1, 0.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          material={materials.aluminium}
          geometry={nodes["Cube008"].geometry}
        />
        <mesh
          material={materials["matte.001"]}
          geometry={nodes["Cube008_1"].geometry}
        />
        <mesh
          material={materials["screen.001"]}
          geometry={nodes["Cube008_2"].geometry}
        />
      </group>
    </group>
  );
}
