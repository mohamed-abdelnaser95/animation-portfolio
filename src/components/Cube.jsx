/* eslint-disable react/no-unknown-property */
import {  PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Cube() {
    const textRef = useRef();
    useFrame(state => textRef.current.position.x = Math.sin(state.clock.elapsedTime))
    return (
        <mesh>
        <boxGeometry/>
        <meshStandardMaterial>
            <RenderTexture attach="map">
                <PerspectiveCamera  makeDefault position={[0,0,3]} />
                <color attach="background" args={["#b83434"]}/>
                <Text ref={textRef} fontSize={3} color="#e8e6e6">
                    Hello
                </Text>
            </RenderTexture>
        </meshStandardMaterial>
    </mesh>
    )
}

export default Cube