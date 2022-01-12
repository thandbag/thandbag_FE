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
  const [state, toggle] = React.useState(true);
  const [count, setCounts] = React.useState(0);
  const [effect, setEffects] = React.useState(true);
  const is_level = history.location.state.level;

  const clickCount = () => {
    setCounts(count + 1);
  };

  const { x } = useSpring({
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

  React.useEffect(() => {
    api
      .get(`/api/thandbag/punch/${postid}`, {
        headers: { Authorization: token },
      })
      .then(function (response) {
        setCounts(response.data.totalHitCount);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (is_level === 1) {
    return (
      <Grid height="100vh" bg="#fbf7f7">
        <Heads
          post_id={postid}
          hitcount={count}
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
              toggle(!state);
              clickCount();
              clickTarget();
            }}
            position="absolute"
          >
            <Grid>
              <img style={{ width: "390px" }} src={thandbag_frame} />
            </Grid>
          </Grid>
          <Grid
            _onClick={() => {
              toggle(!state);
              clickCount();
              clickTarget();
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
                  width: "360px",
                  height: "820px",
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
              <Grid width="auto" top="280px" right="60px" position="absolute">
                <animated.img
                  src={effect1}
                  style={{
                    width: "100px",
                    scale: x.to({
                      range: [0, 0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                      output: [1, 0.77, 0.9, 1.2, 0.8, 1.4, 1.03, 1],
                    }),
                  }}
                ></animated.img>
              </Grid>
              <Grid width="auto" left="40px" position="absolute">
                <animated.img
                  src={effect2}
                  style={{
                    width: "100px",
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
              toggle(!state);
              clickCount();
              clickTarget();
            }}
            top="500px"
            left="90px"
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
                <img style={{ width: "210px" }} src={hit} />
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
            <Grid bottom="89px" right="16px" width="auto" position="absolute">
              <Button
                margin="45px 0 0 0"
                login
                _onClick={() => {
                  history.push(`/TbFinish/${postid}`, {
                    count: count,
                    level: history.location.state.level,
                  });
                }}
                height="50px"
                width="150px"
                text="생드백 터트리기"
              ></Button>
            </Grid>
          ) : (
            <></>
          )}
          <Grid width="auto" bottom="109px" left="40px" position="absolute">
            <Text max_width="120px">생드백의 아무 곳이나 클릭해주세요!</Text>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  if (is_level === 2) {
    return (
      <Grid height="100vh" bg="#fbf7f7">
        <Heads
          post_id={postid}
          hitcount={count}
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
              toggle(!state);
              clickCount();
              clickTarget();
            }}
            position="absolute"
          >
            <Grid>
              <img style={{ width: "390px" }} src={thandbag_frame2} />
            </Grid>
          </Grid>
          <Grid
            _onClick={() => {
              toggle(!state);
              clickCount();
              clickTarget();
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
                  width: "360px",
                  height: "820px",
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
              <Grid width="auto" top="280px" right="60px" position="absolute">
                <animated.img
                  src={effect1}
                  style={{
                    width: "100px",
                    scale: x.to({
                      range: [0, 0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                      output: [1, 0.77, 0.9, 1.2, 0.8, 1.4, 1.03, 1],
                    }),
                  }}
                ></animated.img>
              </Grid>
              <Grid width="auto" left="40px" position="absolute">
                <animated.img
                  src={effect2}
                  style={{
                    width: "100px",
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
              toggle(!state);
              clickCount();
              clickTarget();
            }}
            top="500px"
            left="90px"
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
                <img style={{ width: "210px" }} src={hit} />
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
            <Grid bottom="89px" right="16px" width="auto" position="absolute">
              <Button
                margin="45px 0 0 0"
                login
                _onClick={() => {
                  history.push(`/TbFinish/${postid}`, {
                    count: count,
                    level: history.location.state.level,
                  });
                }}
                height="50px"
                width="150px"
                text="생드백 터트리기"
              ></Button>
            </Grid>
          ) : (
            <></>
          )}
          <Grid width="auto" bottom="109px" left="40px" position="absolute">
            <Text max_width="120px">생드백의 아무 곳이나 클릭해주세요!</Text>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  return (
    <>
      <Grid height="100vh" bg="#fbf7f7">
        <Heads
          post_id={postid}
          hitcount={count}
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
              toggle(!state);
              clickCount();
              clickTarget();
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
                  width: "360px",
                  height: "820px",
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
              <Grid width="auto" top="280px" right="60px" position="absolute">
                <animated.img
                  src={effect1}
                  style={{
                    width: "100px",
                    scale: x.to({
                      range: [0, 0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                      output: [1, 0.77, 0.9, 1.2, 0.8, 1.4, 1.03, 1],
                    }),
                  }}
                ></animated.img>
              </Grid>
              <Grid width="auto" left="40px" position="absolute">
                <animated.img
                  src={effect2}
                  style={{
                    width: "100px",
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
              toggle(!state);
              clickCount();
              clickTarget();
            }}
            top="500px"
            left="90px"
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
                <img style={{ width: "210px" }} src={hit} />
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
            <Grid bottom="89px" right="16px" width="auto" position="absolute">
              <Button
                margin="45px 0 0 0"
                login
                _onClick={() => {
                  history.push(`/TbFinish/${postid}`, {
                    count: count,
                    level: history.location.state.level,
                  });
                }}
                height="50px"
                width="150px"
                text="생드백 터트리기"
              ></Button>
            </Grid>
          ) : (
            <></>
          )}
          <Grid width="auto" bottom="109px" left="40px" position="absolute">
            <Text max_width="120px">생드백의 아무 곳이나 클릭해주세요!</Text>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default TbHitDetail;
