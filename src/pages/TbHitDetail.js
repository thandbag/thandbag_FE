import React from "react";
import {useSpring, animated} from "react-spring";
import Heads from "../components/Heads";
import { Grid, Text, Button } from "../elements/TbIndex";
import { history } from "../redux/configureStore";
import thandbag_frame from "../static/images/thandbag/one_thand_frame.png";
import one_thandbag1 from "../static/images/thandbag/one_thandbag_1.png";
import one_thandbag2 from "../static/images/thandbag/one_thandbag_2.png";
import one_thandbag3 from "../static/images/thandbag/one_thandbag_3.png";
import effect1 from "../static/images/thandbag/effect1.svg";
import effect2 from "../static/images/thandbag/effect2.svg";
import hit from "../static/images/Hit.svg";
import api from "../shared/Api";


const TbHitDetail = (props) => {
    const token = sessionStorage.getItem("token");
    const is_me = sessionStorage.getItem("userId");
    const postid = props.match.params.postid
    const [state, toggle] = React.useState(true);
    const [count, setCounts] = React.useState(0);
    const [effect, setEffects] = React.useState(true);
    const clickCount = () => {
        setCounts(count + 1);
    }
    const { x } = useSpring({
        from: { x: 0 },
        x: state ? 1 : 0,
        config: { mass: 1, tension: 120, friction: 100 ,duration: 500},
    })
    const clickTarget = (e) => {
        setEffects(false)
        setTimeout(() => {
            setEffects(true)
        }, 400)
    }
    React.useEffect(() => {
        api.get(`/api/thandbag/punch/${postid}`,{
            headers: { Authorization: token },
          })
          .then(function (response) {
            setCounts(response.data.totalHitCount)
          })
          .catch((err) => {
            console.log(err)
          })
    },[])

    return (
        <>
        <Grid height="100vh" bg="#fbf7f7">
        <Heads post_id={postid} hitcount={count} hit bg="transparent" stroke="#333" color="#333"></Heads>
        <Grid cursor="pointer" flex="flex" height="90vh" align="center" justify="center" position="relative">
            <Grid _onClick={() => {
                toggle(!state)
                clickCount()
                clickTarget()
            }}  position="absolute">
                <Grid >
                    <img style={{width: "390px"}} src={thandbag_frame}/>
                </Grid>
            </Grid>
            <Grid _onClick={() => {
                toggle(!state)
                clickCount()
                clickTarget()
                }}>
                <Grid>
                    <animated.img src={10 > count ? one_thandbag1 : 
                                        20 > count ? one_thandbag2 : one_thandbag3 }
                    style={{
                        width: "330px",
                        height: "820px",
                        scale: x.to({
                            range: [0, 0.15 ,0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                            output: [1, 0.77, 0.9, 1.2, 0.8, 1.4, 1.03, 1],
                        }),
                    }}>
                    </animated.img>
                </Grid>
            </Grid>
                {effect ? <></> :  <>
                <Grid width="auto" top="280px" right="60px" position="absolute">
                <animated.img src={effect1}
                    style={{
                        width: "100px",
                        scale: x.to({
                            range: [0, 0.15 ,0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                            output: [1, 0.77, 0.9, 1.2, 0.8, 1.4, 1.03, 1],
                        }),
                    }}>
                </animated.img>
                </Grid>
                <Grid width="auto" left="40px" position="absolute">
                <animated.img src={effect2}
                    style={{
                        width: "100px",
                        scale: x.to({
                            range: [0, 0.15 ,0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                            output: [1, 0.77, 0.9, 1.2, 0.8, 1.4, 1.03, 1],
                        }),
                    }}>
                </animated.img>
                </Grid>
                </>}
            <Grid _onClick={() => {
                toggle(!state) 
                clickCount()
                clickTarget()
            }} 
                top="488px" left="90px" position="absolute">
                <animated.div
                     style={{
                        scale: x.to({
                            range: [0, 0.15 ,0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                            output: [1, 0.87, 0.9, 1.1, 0.8, 1.2, 1.03, 1],
                     }), }}
                    >
                    <Grid position="relative" flex="flex" >
                        <img style={{width: "250px"}} src={hit}/>
                        <Grid width="auto" position="absolute">
                        <Text size="50px" bold>Hit!</Text>
                        <Text align="center" size="50px" bold>{count}</Text>
                        </Grid>
                    </Grid>
                </animated.div>
            </Grid>
            {10 > count ? <></> : is_me == history.location.state ?
                <Grid bottom="89px" right="16px" width="auto" position="absolute">
                <Button margin="45px 0 0 0" login _onClick={() => {
                    history.push(`/TbFinish/${postid}`,count)
                    }} height="50px" width="150px" text="생드백 터트리기"></Button>
                </Grid>
            : <></>}
            <Grid width="auto" bottom="109px" left="40px"  position="absolute">
                <Text max_width="120px">생드백의 아무 곳이나 클릭해주세요!</Text>
            </Grid>
        </Grid>
    </Grid>
    </>
    )
};

export default TbHitDetail;