import React from "react";
import WelcomeOne from "../components/WelcomeOne.js";
import WelcomeTwo from "../components/WelcomeTwo.js";
import { useSpring, animated } from "@react-spring/web";

function Welcome() {
  const fadeOut = useSpring({
    width: "100%",
    height: "100vh",
    backgroundColor: "#0095ED",
    position: "absolute",
    opacity: 0,
    from: { opacity: 1 },
    transition: "0.5s",
    transitionDelay: "1.2s",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  const fadeIn = useSpring({
    width: "100%",
    height: "100vh",
    backgroundColor: "#fff",
    opacity: 1,
    from: { opacity: 0 },
    transition: "0.8s",
    transitionDelay: "1.45s",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  });

  return (
    <React.Fragment>
      <animated.div style={fadeOut}>
        <WelcomeOne />
      </animated.div>
      <animated.div style={fadeIn}>
        <WelcomeTwo />
      </animated.div>
    </React.Fragment>
  );
}

export default Welcome;
