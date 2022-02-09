import React from "react";
import styled from "styled-components";

import Heads from "../components/Heads";
import { Grid, Text, Image, Input, Button, Select } from "../elements/TbIndex";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import Swal from "sweetalert2";
import { useSpring, animated } from "react-spring";

const MyEdit = (props) => {
  const profile = sessionStorage.getItem("profile");
  const nick = sessionStorage.getItem("nickname");
  const my_mbti = sessionStorage.getItem("mbti");
  const dispatch = useDispatch();

  const [nickname, setNickname] = React.useState(nick);
  const [mbti, setMbti] = React.useState(my_mbti);
  const [imgfile, setImgfile] = React.useState(profile);
  const fileInput = React.useRef("");

  const [isNickname, setIsNickname] = React.useState(true);
  const nickRegex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]{2,6}$/;

  const handleChangeFile = (e) => {
    setImgfile(e.target.files);
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = () => {
      const file = reader.result;

      if (file) {
        var file_picture = file.toString();

        setImgfile(file_picture);
      }
    };
  };

  const handleClick = (e) => {
    setMbti(e.target.value);
  };

  const onChangeNick = (e) => {
    const currentNickname = e.target.value;
    setNickname(currentNickname);

    if (!nickRegex.test(currentNickname)) {
      setIsNickname(false);
    } else {
      setIsNickname(true);
    }
  };

  const clickEdit = () => {
    if (mbti == 0 || nickname == "") {
      Swal.fire({
        icon: "warning",
        title: "앗!",
        text: "빈값을 다 채워주세요",
      });
      return;
    } else {
      dispatch(userActions.editDB(nickname, mbti, fileInput.current.files[0]));
    }
  };

  const fadeIn = useSpring({
    config: {
      duration: 300,
    },
    width: "100%",
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <React.Fragment>
      <Heads is_anoter bg="#FBF7F7" stroke="#333" color="#333" none="none" />
      <animated.div style={fadeIn}>
        <Grid
          width="100%"
          height="100vh"
          bg="#FBF7F7"
          flex="flex"
          justify="flex-start"
          direction="column"
          padding="70px 0 0 0"
        >
          <Grid
            width="100%"
            miNheight="35vh"
            flex="flex"
            direction="column"
            margin="0 0 5% 0"
          >
            <Image shape="circle" src={imgfile} Isize="130" />
            <label
              style={{
                margin: "26px 0 20px 0",
                fontSize: "20px",
                cursor: "pointer",
                textDecoration: "underline",
                textUnderlinePosition: "under",
              }}
              for="profile"
            >
              프로필 이미지 변경
            </label>
            <input
              id="profile"
              ref={fileInput}
              onChange={handleChangeFile}
              style={{ display: "none" }}
              type="file"
            ></input>
          </Grid>
          <Grid
            width="100%"
            miNheight="17vh"
            padding="10px 20px"
            bg="#fff"
            border="1px solid #eee"
            flex="flex"
            direction="column"
          >
            <Grid width="100%" height="50%" flex="flex">
              <Grid flex="flex" width="30%" height="100%" justify="flex-start">
                <Text size="17px">닉네임</Text>
              </Grid>
              <Grid
                flex="flex"
                justify="flex"
                borderB
                width="70%"
                height="100%"
              >
                <Input
                  value={nickname}
                  _onChange={onChangeNick}
                  color="#FF5454"
                  size="18px"
                />
              </Grid>
            </Grid>
            <Grid width="100%" height="50%" flex="flex">
              <Grid flex="flex" width="30%" height="100%" justify="flex-start">
                <Text size="17px">MBTI 선택</Text>
              </Grid>
              <Grid flex="flex" justify="flex" width="70%" height="100%">
                <Select
                  value={mbti}
                  _onChange={handleClick}
                  height="auto"
                  width="auto"
                ></Select>
              </Grid>
            </Grid>
          </Grid>

          <Grid align="center" height="13px">
            {nickname.length > 0 && !isNickname ? (
              <Danger>올바른 닉네임 형식을 입력해주세요.</Danger>
            ) : nickname.length > 0 && mbti == 0 ? (
              <Danger>MBTI를 선택해주세요</Danger>
            ) : (
              <></>
            )}
          </Grid>
          <Grid
            width="100%"
            height="51px"
            border="1px solid #eee"
            bg="#fff"
            flex="flex"
            justify="flex-start"
            padding="10px 20px"
            margin="5% 0 0 0"
            cursor="pointer"
            _onClick={() => {
              dispatch(userActions.logOut());
            }}
          >
            <Text>로그아웃</Text>
          </Grid>
          <Grid
            width="100%"
            height="auto"
            flex="flex"
            margin="10% 0 0 0 "
          >
            <Button
              width="50%"
              height="50px"
              bg="#333"
              color="#fff"
              size="24px"
              text="저장"
              radius="12px"
              cursor="pointer"
              _onClick={clickEdit}
            />
          </Grid>
        </Grid>
      </animated.div>
    </React.Fragment>
  );
};

const Danger = styled.p`
  margin-top: 5px;
  font-size: 13px;
  color: #e25c3d;
  font-weight: bold;
  font-family: "NotoSansCJK";
`;

export default MyEdit;
