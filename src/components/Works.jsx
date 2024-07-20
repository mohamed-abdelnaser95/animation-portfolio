import { useState } from "react";
import styled from "styled-components"
import ProductDesign from "./ProductDesign";
import Development from "./Development";
import FrontEnd from "./FrontEnd";

const data = ["FrontEnd", "Design Component", "Development"];

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    align-items: center;

    @media only screen and (max-width: 768px){
        width: 100%;
        align-items: flex-start;
    }
`
const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    gap: 20px;

    @media only screen and (max-width: 768px){
        width: 100%;
        height: 100vh;
        flex-direction: column;  
        justify-content: space-around;
    }
`
const Left = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media only screen and (max-width: 768px){
        flex: 1;
    }
`
const List = styled.ul` 
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`

const ListItem = styled.li`
    font-size: 80px;
    font-weight: bold;
    -webkit-text-stroke: 1px white;
    color: transparent;
    position: relative;
    cursor: pointer;

    &::after{
        content: '${(props) => props.text}';
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        color: white;
        overflow: hidden;
        white-space: nowrap;
    }

    &:hover{
        &::after{
            animation: moveText .5s linear both; 
            @keyframes moveText {
                to {
                    width: 100%
                }
            }
        }
    }

    @media only screen and (max-width: 768px){
        font-size: 30px
    }
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media only screen and (max-width: 768px){
        flex: 1.5;
        padding: 10px;
        flex-direction: column;
    }
`
const Works = () => {
    const [work, setWork] = useState("FrontEnd")
    return (
        <Section>
            <Container>
                <Left>
                    <List>
                        {data.map((item, index) => (
                            <ListItem 
                                key={index} 
                                text={item}
                                onClick={() => setWork(item)}
                            >
                                {item}
                            </ListItem>
                        ))}
                    </List>
                </Left>
                <Right>
                        {
                            work === "Design Component"? (<ProductDesign />) :
                            work === "Development"? (<Development />) :
                            (<FrontEnd />)
                        }
                </Right>
            </Container>
        </Section>
    )
}

export default Works