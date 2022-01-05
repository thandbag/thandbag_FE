import React from "react";
import styled from "styled-components";
import Heads from "../components/Heads";
import { useDispatch } from "react-redux";
import { Grid, Text, Image, Input, Button, Select } from "../elements/TbIndex";
import { actionCreators as userActions } from "../redux/modules/user";

const MyEdit = (props) => {
  const dispatch = useDispatch();
  const option_list = [
    "MBTI 선택",
    "ENFJ",
    "ENFP",
    "ENTJ",
    "ENTP",
    "ESFJ",
    "ESFP",
    "ESTJ",
    "ESTP",
    "INFJ",
    "INFP",
    "INTJ",
    "INTP",
    "ISFJ",
    "ISFP",
    "ISTJ",
    "ISTP",
  ];

  const [nickname, setNickname] = React.useState("");
  const [mbti, setMbti] = React.useState(0);

  const [isNickname, setIsNickname] = React.useState(false);

  const handleClick = (e) => {
    setMbti(e.target.value);
  };

  const onChangeNick = (e) => {
    const nickRegex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]{2,6}$/;
    const currentNickname = e.target.value;
    setNickname(currentNickname);

    if (!nickRegex.test(currentNickname)) {
      setIsNickname(false);
    } else {
      setIsNickname(true);
    }
  };

  const clickEdit = () => {
    if (mbti === 0) {
      window.alert("mbti를 선택해주세요");
      return;
    } else {
      dispatch(userActions.editDB(nickname, option_list[mbti]));
    }
  };

  return (
    <React.Fragment>
      <Heads is_anoter bg="#FBF7F7" stroke="#333" color="#333" />
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
          height="auto"
          flex="flex"
          direction="column"
          padding="40px 0"
        >
          <Image Isize="150" />
          <Text
            size="20px"
            bold="400"
            deco="underline"
            decoP="under"
            margin="36px 0 0 0"
            cursor="pointer"
          >
            프로필 이미지 변경
          </Text>
        </Grid>
        <Grid
          width="100%"
          height="150px"
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
            <Grid flex="flex" justify="flex" borderB width="70%" height="100%">
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
            <Grid
              flex="flex"
              justify="space-between"
              borderB
              width="70%"
              height="100%"
            >
              <Select
                _onChange={handleClick}
                height="47px"
                width="300px"
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
          margin="43px 0 0 0"
          cursor="pointer"
          _onClick={() => {
            dispatch(userActions.logOutDB());
          }}
        >
          <Text>로그아웃</Text>
        </Grid>
        <Grid
          width="100%"
          height="auto"
          flex="flex"
          position="absolute"
          bottom="1.5rem"
          left="0"
        >
          <Button
            width="223px"
            height="60px"
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
