import React from "react";

import styled from "styled-components";
import "../shared/style.css";

import { Grid, Text, Input, Button, Image } from "../elements/TbIndex";
import { useDispatch } from "react-redux";
import { history } from "../redux/configureStore";
import { actionCreators as userActions } from "../redux/modules/user";

import { ReactComponent as KakaoBtn } from "../static/images/kakao_btn.svg";
import thandbag_logo from "../static/icons/thandbag_logo.svg";

import { useSpring, animated } from "@react-spring/web";
import Swal from "sweetalert2";


const Login = (props) => {
  const dispatch = useDispatch();
  const API_key = "2bbe979f5fff3c4ab9f79ad6a7be6729";
  const Redirect_URI =
    "https://thandbag.com/user/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${API_key}&redirect_uri=${Redirect_URI}&response_type=code`;

  // 이메일, 비밀번호 상태관리//
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  // 유효성검사 체크//
  const [isEmail, setIsEmail] = React.useState(false);
  const [isPassword, setIsPassword] = React.useState(false);

  const onChangeEmail = (e) => {
    const emailRegex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    const currentEmail = e.target.value;
    setEmail(currentEmail);

    if (!emailRegex.test(currentEmail)) {
      setIsEmail(false);
    } else {
      setIsEmail(true);
    }
  };

  const onChangePassword = (e) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
    const currentPassword = e.target.value;
    setPassword(currentPassword);

    if (!passwordRegex.test(currentPassword)) {
      setIsPassword(false);
    } else {
      setIsPassword(true);
    }
  };

  const clickLogin = () => {
    if (email == "" || password === "") {
      Swal.fire({
        icon: 'warning',
        title: '앗!',
        text: '빈값을 다 채워주세요'
      })

      return;
    } else {
      dispatch(userActions.logInDB(email, password));
    }
  };

  const clickSocial = () => {
    return (window.location.href = KAKAO_AUTH_URL);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      clickLogin();
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
    <>
      <animated.div style={fadeIn}>
        <Grid>
          <Grid height="100vh" flex="flex" justify="center" direction="column">
            <Grid margin="4.5vh 0" align="center">
              <Image
                shape="logo"
                width="200px"
                height="87px"
                src={thandbag_logo}
              ></Image>
            </Grid>
            <FormGroup>
              <Grid margin="30px 0px">
                <Input
                  boxSizing="border-box"
                  size="17px"
                  bg="#FBF7F7"
                  color="#FF5454"
                  radius="10px"
                  padding="10px"
                  value={email}
                  _onChange={onChangeEmail}
                  _onKeyDown={handleKeyDown}
                  height="47px"
                  width="300px"
                  placeholder="아이디"
                ></Input>
                {email.length > 0 && !isEmail && (
                  <p className="validation">
                    올바른 이메일 형식을 입력해주세요.
                  </p>
                )}
              </Grid>
              <Grid>
                <Input
                  boxSizing="border-box"
                  size="17px"
                  bg="#FBF7F7"
                  color="#FF5454"
                  radius="10px"
                  padding="10px"
                  type="password"
                  value={password}
                  _onChange={onChangePassword}
                  _onKeyDown={handleKeyDown}
                  height="47px"
                  width="300px"
                  placeholder="비밀번호"
                ></Input>
                {password.length > 0 && !isPassword && (
                  <p className="validation">
                    8자 이상의 영문/숫자/특수문자 조합을 입력해주세요.
                  </p>
                )}
              </Grid>
            </FormGroup>
            <Grid margin="8.5vh 0 0 0" align="center">
              <Button
                login
                _onClick={clickLogin}
                height="60px"
                width="220px"
                text="로그인하기"
              />
              {/* 카카오 버튼 수정 */}
              <Grid
                width="auto"
                height="auto"
                margin="20px 0 0 0"
                cursor="pointer"
              >
                <KakaoBtn onClick={clickSocial} height="60px" width="220px" />
              </Grid>
            </Grid>
            <Grid flex="flex" align="center" margin="30px 0 0 0">
              <Text color="#C4C4C4">생드백 회원이 아니신가요?&nbsp;</Text>
              <JoinLink
                onClick={() => {
                  history.push("/join");
                }}
              >
                회원가입
              </JoinLink>
            </Grid>
          </Grid>
        </Grid>
      </animated.div>
    </>
  );
};

const FormGroup = styled.div`
  .validation {
    margin-top: 5px;
    font-size: 12px;
    font-family: "NotoSansCJK";
    color: #e25c3d;
  }
`;

const JoinLink = styled.p`
  color: #767676;
  transition: color 0.1s ease-in-out, fill 0.1s ease-in-out,
    opacity 0.1s ease-in-out;
  text-decoration: underline;
  font-family: "KOTRAHOPE";
  margin-left: 5px;
  cursor: pointer;

  &:hover {
    color: #111111;
  }
`;

export default Login;
