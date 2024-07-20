/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 scene.gltf --transform 
Files: scene.gltf [4.8KB] > C:\Users\moham\OneDrive\Desktop\tech\scene-transformed.glb [366.6KB] (-7538%)
Author: Matt Rafferty (https://sketchfab.com/Matt-AeroLab)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/small-technology-atlas-e5e1716204294a2b90604585add373c8
Title: Small Technology Atlas
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Technology(props) {
  const { nodes, materials } = useGLTF('../../public/img/scene-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.defaultMaterial.geometry} material={materials.initialShadingGroup} />
    </group>
  )
}

useGLTF.preload('../../public/img/scene-transformed.glb')