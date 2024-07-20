import { OrbitControls, Stage } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Hologram from "./Hologram"
import styled from "styled-components"


const DESC = styled.div`
    width:200px;
    height: 100px;
    font-size: 14px;
    color: #555;
    position: absolute;
    bottom: 0px;
    right: -120px;
    background-color:white;
    border-radius: 5px;
    padding: 10px;

    @media only screen and (max-width: 768px){
        position: relative;
        right: 0;
        width: fit-content;
        height: fit-content;
    }
`
function ProductDesign() {
    return (
        <>
            <Canvas camera={{fov: 1000, position:[1,1,1]}}>
                <OrbitControls enableZoom={true} autoRotate/>
                <Stage environment='city' intensity={.9}>
                    <Hologram />
                </Stage>
            </Canvas>
            <DESC>
                We design products with a strong focus on both world class design and ensuring your
                product is a marget success
            </DESC>
        </>
    )
}

export default ProductDesign

