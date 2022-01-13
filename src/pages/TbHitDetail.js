import React from "react";
import { useSpring, animated } from "react-spring";
import { Grid, Text, Button } from "../elements/TbIndex";
import Heads from "../components/Heads";
import { ReactComponent as UserGloveLv1 } from "../static/images/userglove/user_ glove_lv1.svg";
import { ReactComponent as UserGloveLv2 } from "../static/images/userglove/user_ glove_lv2.svg";
import { history } from "../redux/configureStore";
import thandbag_frame from "../static/images/thandbag/one_thand_frame.png";
import thandbag_frame2 from "../static/images/thandbag/two_thand_frame.png";
import one_thandbag1 from "../static/images/thandbag/one_thandbag_1.png";
import one_thandbag2 from "../static/images/thandbag/one_thandbag_2.png";
import one_thandbag3 from "../static/images/thandbag/one_thandbag_3.png";
import two_thandbag1 from "../static/images/thandbag/two_thandbag_1.png";
import two_thandbag2 from "../static/images/thandbag/two_thandbag_2.png";
import two_thandbag3 from "../static/images/thandbag/two_thandbag_3.png";
import three_thandbag1 from "../static/images/thandbag/three_thandbag_1.png";
import three_thandbag2 from "../static/images/thandbag/three_thandbag_2.png";
import three_thandbag3 from "../static/images/thandbag/three_thandbag_3.png";
import effect1 from "../static/images/thandbag/effect1.svg";
import effect2 from "../static/images/thandbag/effect2.svg";
import hit from "../static/images/Hit.svg";
import api from "../shared/Api";

const TbHitDetail = (props) => {
  const token = sessionStorage.getItem("token");
  const is_me = sessionStorage.getItem("userId");
  const postid = props.match.params.postid;
  const [stop, setStops] = React.useState(true);
  const [state, toggle] = React.useState(true);
  const [count, setCounts] = React.useState(0);
  const [pastCount, setPastcounts] = React.useState(null)
  const [effect, setEffects] = React.useState(true);
  const is_level = history.location.state.level;
  
  const clickCount = () => {
    setCounts(count + 1);
  };

  const { x } = useSpring({
    immediate: stop,
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { mass: 1, tension: 120, friction: 100, duration: 500 },
  });

  const clickTarget = (e) => {
    setEffects(false);
    setTimeout(() => {
      setEffects(true);
    }, 400);
  };

  const clickHit = () => {
    toggle(!state);
    clickCount();
    clickTarget();
    
  }

  const onEnterPress = (e) => {
    if(e.key === 'Enter') {
      toggle(!state);
      clickCount();
      clickTarget();
    }
  }

  React.useEffect(() => {
    setStops(false);
    api
      .get(`/api/thandbag/punch/${postid}`, {
        headers: { Authorization: token },
      })
      .then(function (response) {
        setPastcounts(response.data.totalHitCount);
        setCounts(response.data.totalHitCount);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (is_level === 1) {
    return (
      <Grid width="100%" height="100vh" bg="#fbf7f7">
        <Heads
          post_id={postid}
          hitcount={count}
          pastHitcount={pastCount}
          hit
          bg="transparent"
          stroke="#333"
          color="#333"
        ></Heads>
        <Grid
          cursor="pointer"
          flex="flex"
          height="90vh"
          align="center"
          justify="center"
          position="relative"
        >
          <Grid
            _onClick={() => {
              clickHit();
            }}
            position="absolute"
          >
            <Grid>
              <img style={{ width: "90%" }} src={thandbag_frame} />
            </Grid>
          </Grid>
          <Grid
            _onClick={() => {
              clickHit();
            }}
          >
            <Grid>
              <animated.img
                src={
                  10 > count
                    ? one_thandbag1
                    : 20 > count
                    ? one_thandbag2
                    : one_thandbag3
                }
                style={{
                  width: "90%",
                  height: "90%",
                  scale: x.to({
                    range: [0, 0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1, 0.77, 0.9, 1.2, 0.8, 1.4, 1.03, 1],
                  }),
                }}
              ></animated.img>
            </Grid>
          </Grid>
          {effect ? (
            <></>
          ) : (
            <>
              <Grid width="auto" top="30%" right="10%" position="absolute">
                <animated.img
                  src={effect1}
                  style={{
                    width: "100%",
                    scale: x.to({
                      range: [0, 0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                      output: [1, 0.77, 0.9, 1.2, 0.8, 1.4, 1.03, 1],
                    }),
                  }}
                ></animated.img>
              </Grid>
              <Grid width="auto" left="10%" position="absolute">
                <animated.img
                  src={effect2}
                  style={{
                    width: "100%",
                    scale: x.to({
                      range: [0, 0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                      output: [1, 0.77, 0.9, 1.2, 0.8, 1.4, 1.03, 1],
                    }),
                  }}
                ></animated.img>
              </Grid>
            </>
          )}
          <Grid
            _onClick={() => {
              clickHit();
            }}
            top="60%"
            left="20%"
            position="absolute"
          >
            <animated.div
              style={{
                scale: x.to({
                  range: [0, 0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                  output: [1, 0.87, 0.9, 1.1, 0.8, 1.2, 1.03, 1],
                }),
              }}
            >
              <Grid position="relative" flex="flex">
                <img style={{ width: "55%" }} src={hit} />
                <Grid width="auto" position="absolute">
                  <Text size="6vmax" bold>
                    Hit!
                  </Text>
                  <Text align="center" size="6vmax" bold>
                    {count}
                  </Text>
                </Grid>
              </Grid>
            </animated.div>
          </Grid>
          {10 > count ? (
            <></>
          ) : is_me == history.location.state.userId ? (
            <Grid top="90%" right="2%" width="35%" position="absolute">
              <Button
                login
                _onClick={() => {
                  history.push(`/TbFinish/${postid}`, {
                    pastcount: pastCount,
                    count: count,
                    level: history.location.state.level,
                  });
                }}
                height="50px"
                text="생드백 터트리기"
              ></Button>
            </Grid>
          ) : (
            <></>
          )}
          <Grid width="30%" top="83%" left="10%" position="absolute">
            <Text size="2vmax">생드백의 아무 곳이나 클릭해주세요!</Text>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  if (is_level === 2) {
    return (
      <Grid width="100%" height="100vh" bg="#fbf7f7">
        <Heads
          post_id={postid}
          hitcount={count}
          pastHitcount={pastCount}
          hit
          bg="transparent"
          stroke="#333"
          color="#333"
        ></Heads>
        <Grid
          cursor="pointer"
          flex="flex"
          height="90vh"
          align="center"
          justify="center"
          position="relative"
        >
          <Grid
            _onClick={() => {
              clickHit();
            }}
            position="absolute"
          >
            <Grid>
              <img style={{ width: "90%" }} src={thandbag_frame2} />
            </Grid>
          </Grid>
          <Grid
            _onClick={() => {
              clickHit();
            }}
          >
            <Grid>
              <animated.img
                src={
                  10 > count
                    ? two_thandbag1
                    : 20 > count
                    ? two_thandbag2
                    : two_thandbag3
                }
                style={{
                  width: "90%",
                  height: "90%",
                  scale: x.to({
                    range: [0, 0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1, 0.77, 0.9, 1.2, 0.8, 1.4, 1.03, 1],
                  }),
                }}
              ></animated.img>
            </Grid>
          </Grid>
          {effect ? (
            <></>
          ) : (
            <>
              <Grid width="auto" top="30%" right="10%" position="absolute">
                <animated.img
                  src={effect1}
                  style={{
                    width: "100%",
                    scale: x.to({
                      range: [0, 0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                      output: [1, 0.77, 0.9, 1.2, 0.8, 1.4, 1.03, 1],
                    }),
                  }}
                ></animated.img>
              </Grid>
              <Grid width="auto" left="10%" position="absolute">
                <animated.img
                  src={effect2}
                  style={{
                    width: "100%",
                    scale: x.to({
                      range: [0, 0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                      output: [1, 0.77, 0.9, 1.2, 0.8, 1.4, 1.03, 1],
                    }),
                  }}
                ></animated.img>
              </Grid>
            </>
          )}
          <Grid
            _onClick={() => {
              clickHit();
            }}
            top="50%"
            left="20%"
            position="absolute"
          >
            <animated.div
              style={{
                scale: x.to({
                  range: [0, 0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                  output: [1, 0.87, 0.9, 1.1, 0.8, 1.2, 1.03, 1],
                }),
              }}
            >
              <Grid position="relative" flex="flex">
                <img style={{ width: "55%" }} src={hit} />
                <Grid width="auto" position="absolute">
                  <Text size="50px" bold>
                    Hit!
                  </Text>
                  <Text align="center" size="50px" bold>
                    {count}
                  </Text>
                </Grid>
              </Grid>
            </animated.div>
          </Grid>
          {10 > count ? (
            <></>
          ) : is_me == history.location.state.userId ? (
            <Grid top="90%" right="2%" width="35%" position="absolute">
              <Button
                login
                _onClick={() => {
                  history.push(`/TbFinish/${postid}`, {
                    pastcount: pastCount,
                    count: count,
                    level: history.location.state.level,
                  });
                }}
                height="50px"
                text="생드백 터트리기"
              ></Button>
            </Grid>
          ) : (
            <></>
          )}
          <Grid width="30%" top="90%" left="10%" position="absolute">
            <Text size="2vmax">생드백의 아무 곳이나 클릭해주세요!</Text>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  return (
    <>
      <Grid width="100%" height="100vh" bg="#fbf7f7">
        <Heads
          post_id={postid}
          hitcount={count}
          pastHitcount={pastCount}
          hit
          bg="transparent"
          stroke="#333"
          color="#333"
        ></Heads>
        <Grid
          cursor="pointer"
          flex="flex"
          height="90vh"
          align="center"
          justify="center"
          position="relative"
        >
          <Grid
            _onClick={() => {
              clickHit();
            }}
          >
            <Grid>
              <animated.img
                src={
                  10 > count
                    ? three_thandbag1
                    : 20 > count
                    ? three_thandbag2
                    : three_thandbag3
                }
                style={{
                  width: "85%",
                  height: "85%",
                  scale: x.to({
                    range: [0, 0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1, 0.77, 0.9, 1.2, 0.8, 1.4, 1.03, 1],
                  }),
                }}
              ></animated.img>
            </Grid>
          </Grid>
          {effect ? (
            <></>
          ) : (
            <>
              <Grid width="auto" top="30%" right="10%" position="absolute">
                <animated.img
                  src={effect1}
                  style={{
                    width: "100%",
                    scale: x.to({
                      range: [0, 0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                      output: [1, 0.77, 0.9, 1.2, 0.8, 1.4, 1.03, 1],
                    }),
                  }}
                ></animated.img>
              </Grid>
              <Grid width="auto" left="10%" position="absolute">
                <animated.img
                  src={effect2}
                  style={{
                    width: "100%",
                    scale: x.to({
                      range: [0, 0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                      output: [1, 0.77, 0.9, 1.2, 0.8, 1.4, 1.03, 1],
                    }),
                  }}
                ></animated.img>
              </Grid>
            </>
          )}
          <Grid
            _onClick={() => {
              clickHit();
            }}
            top="60%"
            left="20%"
            position="absolute"
          >
            <animated.div
              style={{
                scale: x.to({
                  range: [0, 0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                  output: [1, 0.87, 0.9, 1.1, 0.8, 1.2, 1.03, 1],
                }),
              }}
            >
              <Grid position="relative" flex="flex">
                <img style={{ width: "55%" }} src={hit} />
                <Grid width="auto" position="absolute">
                  <Text size="6vmax" bold>
                    Hit!
                  </Text>
                  <Text align="center" size="6vmax" bold>
                    {count}
                  </Text>
                </Grid>
              </Grid>
            </animated.div>
          </Grid>
          {10 > count ? (
            <></>
          ) : is_me == history.location.state.userId ? (
            <Grid top="90%" right="2%" width="35%" position="absolute">
              <Button
                login
                _onClick={() => {
                  history.push(`/TbFinish/${postid}`, {
                    pastcount: pastCount,
                    count: count,
                    level: history.location.state.level,
                  });
                }}
                height="50px"
                text="생드백 터트리기"
              ></Button>
            </Grid>
          ) : (
            <></>
          )}
          <Grid width="30%" top="90%" left="10%" position="absolute">
            <Text size="2vmax">생드백의 아무 곳이나 클릭해주세요!</Text>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default TbHitDetail;
