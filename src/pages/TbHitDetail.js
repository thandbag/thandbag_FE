import React from "react";
import {useSpring, animated, config} from "react-spring";
import Heads from "../components/Heads";
import styled from "styled-components";
import { Grid, Text } from "../elements/TbIndex";
import thandbag from "../static/images/thandbag_1.png";
import thandbag2 from "../static/images/thandbag_2.png";
import hit from "../static/images/Hit.svg";

const TbHitDetail = (props) => {
    const [state, toggle] = React.useState(true);
    const [count, setCounts] =React.useState(0);
    const clickCount = () => {
        setCounts(count + 1);
    }
    const { x } = useSpring({
        from: { x: 0 },
        x: state ? 1 : 0,
        config: { mass: 1, tension: 120, friction: 100 ,duration: 500},
    })

    return (
        <>
        <Heads hit bg="#fff" stroke="#333" color="#333"></Heads>
        <Grid cursor="pointer" flex="flex" position="relative">
            <Container  onClick={() => {
                toggle(!state)
                clickCount()
                }}>
                <animated.img src={thandbag2}
                style={{
                    // opacity: x.to({ range: [0,1], output: [0.3, 1] }),
                    width: "300px",
                    height: "600px",
                    scale: x.to({
                        range: [0, 0.15 ,0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                        output: [1, 0.77, 0.9, 1.2, 0.8, 1.4, 1.03, 1],
                    }),
                }}>
                </animated.img>
            </Container>
            <Grid _onClick={() => {
                toggle(!state) 
                clickCount()}} 
                top="488px" left="90px" position="absolute">
                <Grid position="relative" flex="flex" >
                    <img style={{width: "250px"}} src={hit}/>
                    <Grid width="auto" position="absolute">
                    <Text size="50px" bold>Hit!</Text>
                    <Text align="center" size="50px" bold>{count}</Text>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        
        </>
    )
};

const Container = styled.div`
    margin-top: 100px;
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;
    
`;

export default TbHitDetail;