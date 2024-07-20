import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import Technology from "./Technology";

const DESC = styled.div`
    width:200px;
    height: 100px;
    font-size: 14px;
    color: #555;
    position: absolute;
    bottom: 100px;
    right: -120px;
    background-color:white;
    border-radius: 5px;
    padding: 10px;

    @media only screen and (max-width: 768px){
        position: relative;
        right: 0;
        bottom: 0;
        width: fit-content;
        height: fit-content;
    }
`;

function Development() {
    return (
        <>
            <Canvas camera={{fov: 25, position:[.5,.5,.5]}}>
                <OrbitControls enableZoom={true} />
                <Stage intensity={1}>
                    <Technology />
                </Stage>
            </Canvas>
            <DESC>
                We design products with a strong focus on both world class design and ensuring your
                product is a marget success
            </DESC>
        </>
    )
}

export default Development