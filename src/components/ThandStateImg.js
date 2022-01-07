import React from "react";
import styled from "styled-components";
import { Grid, Button, Text } from "../elements/TbIndex";
import { history } from "../redux/configureStore";
import Lv1 from "../static/images/lv_1.jpg";

const ThandStateImg = (props) => {
  const { display, not_share_close, share_close, id, two_hit, one_hit, not_share } = props;
  const styles = { display: display };
  console.log(share_close)
  if(not_share){
    return(
      <React.Fragment>
      <BackgroundState>
      {not_share_close ? <Grid
        width="100%"
        padding="16px 20px"
        flex="flex"
        justify="flex-end"
        is_align="flex-end"
        direction="column"
      >
        <Text color="#fff" size="1.2rem" margin="0 0 10px 0" padding="0 16px 0 0">
          총{" "}
          <span
            style={{
              color: "#fff",
              padding: "0 3px",
              background:
                "linear-gradient(to top, rgba(0,0,0,0.45) 50%, transparent 50%)",
            }}
          >
            {one_hit}
          </span>{" "}
          맞음!!
        </Text>
        <Text color="#fff" size="1.2rem" margin="0 0 10px 0" padding="0 16px 0 0">
          펑💥
        </Text>
      </Grid>:
      <Grid
          width="100%"
          padding="16px 20px"
          flex="flex"
          justify="flex-end"
          is_align="flex-end"
          direction="column"
          _onClick={() => {
            history.push(`/TbHitDetail/${id}`)
          }}
        >
          <Text color="#fff" size="1.2rem" margin="0 0 10px 0" padding="0 16px 0 0">
            현재{" "}
            <span
              style={{
                color: "#fff",
                padding: "0 3px",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.45) 50%, transparent 50%)",
              }}
            >
              {one_hit}
            </span>{" "}
            맞음!!
          </Text>
          <Button
            {...styles}
            width="176px"
            height="43px"
            color="#fff"
            radius="12px"
            bg="#333"
            size="1.2rem"
            text="생드백 때리러가기 =>"
          />
        </Grid>
        }
      </BackgroundState>
    </React.Fragment>
    )
  }
  return (
    <React.Fragment>
      <BackgroundState>
        {share_close ? <Grid
        width="100%"
        padding="16px 20px"
        flex="flex"
        justify="flex-end"
        is_align="flex-end"
        direction="column"
      >
        <Text color="#fff" size="1.2rem" margin="0 0 10px 0" padding="0 16px 0 0">
          총{" "}
          <span
            style={{
              color: "#fff",
              padding: "0 3px",
              background:
                "linear-gradient(to top, rgba(0,0,0,0.45) 50%, transparent 50%)",
            }}
          >
            {two_hit}
          </span>{" "}
          맞음!!
        </Text>
        <Text color="#fff" size="1.2rem" margin="0 0 10px 0" padding="0 16px 0 0">
          펑💥
        </Text>
      </Grid>:
      <Grid
          width="100%"
          padding="16px 20px"
          flex="flex"
          justify="flex-end"
          is_align="flex-end"
          direction="column"
          _onClick={() => {
            history.push(`/TbHitDetail/${id}`)
          }}
        >
          <Text color="#fff" size="1.2rem" margin="0 0 10px 0" padding="0 16px 0 0">
            현재{" "}
            <span
              style={{
                color: "#fff",
                padding: "0 3px",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.45) 50%, transparent 50%)",
              }}
            >
              {two_hit}
            </span>{" "}
            맞음!!
          </Text>
          <Button
            {...styles}
            width="176px"
            height="43px"
            color="#fff"
            radius="12px"
            bg="#333"
            size="1.2rem"
            text="생드백 때리러가기 =>"
          />
        </Grid>
        }
      </BackgroundState>
    </React.Fragment>
  );
};

const BackgroundState = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  background-image: url(${Lv1});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export default ThandStateImg;
