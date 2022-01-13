import React, { useEffect } from "react";
import { Grid, Text, Image, Button } from "../elements/TbIndex";
import { history } from "../redux/configureStore";
import TbModalTwoButton from "./TbModals/TbModalTwoButton";
import { ReactComponent as SettingButton } from "../static/icons/setting_button.svg";
import styled from "styled-components";

import { ReactComponent as ENFJ } from "../static/icons/mbti icons/Property 1=mbti_ENFJ.svg";
import { ReactComponent as INFP } from "../static/icons/mbti icons/Property 1=mbti_INFP.svg";
import { ReactComponent as ENFP } from "../static/icons/mbti icons/Property 1=mbti_ENFP.svg";
import { ReactComponent as ENTJ } from "../static/icons/mbti icons/Property 1=mbti_ENTJ.svg";
import { ReactComponent as ESFP } from "../static/icons/mbti icons/Property 1=mbti_ESFP.svg";
import { ReactComponent as ESTJ } from "../static/icons/mbti icons/Property 1=mbti_ESTJ.svg";
import { ReactComponent as ESTP } from "../static/icons/mbti icons/Property 1=mbti_ESTP.svg";
import { ReactComponent as ESFJ } from "../static/icons/mbti icons/Property 1=mbti_ESFJ.svg";
import { ReactComponent as ENTP } from "../static/icons/mbti icons/Property 1=mbti_ENTP.svg";
import { ReactComponent as INFJ } from "../static/icons/mbti icons/Property 1=mbti_INFJ.svg";
import { ReactComponent as INTJ } from "../static/icons/mbti icons/Property 1=mbti_INTJ.svg";
import { ReactComponent as INTP } from "../static/icons/mbti icons/Property 1=mbti_INTP.svg";
import { ReactComponent as ISFJ } from "../static/icons/mbti icons/Property 1=mbti_ISFJ.svg";
import { ReactComponent as ISFP } from "../static/icons/mbti icons/Property 1=mbti_ISFP.svg";
import { ReactComponent as ISTJ } from "../static/icons/mbti icons/Property 1=mbti_ISTJ.svg";
import { ReactComponent as ISTP } from "../static/icons/mbti icons/Property 1=mbti_ISTP.svg";
import { ReactComponent as NoMbti } from "../static/icons/mbti icons/Property 1=Variant17.svg";
import { ReactComponent as LevelOne } from "../static/icons/lv icons/LV. 1.svg";
import { ReactComponent as LevelTwo } from "../static/icons/lv icons/LV. 2.svg";
import { ReactComponent as LevelThree } from "../static/icons/lv icons/LV. 3.svg";

import { ReactComponent as CENFJ } from "../static/icons/mbti icons_comment/Property 1=Default-ENFJ.svg";
import { ReactComponent as CINFP } from "../static/icons/mbti icons_comment/Property 1=Default-15_INFP.svg";
import { ReactComponent as CENFP } from "../static/icons/mbti icons_comment/Property 1=Default-2_ENFP.svg";
import { ReactComponent as CENTJ } from "../static/icons/mbti icons_comment/Property 1=Default-4_ENTJ.svg";
import { ReactComponent as CESFP } from "../static/icons/mbti icons_comment/Property 1=Default-10_ESFP.svg";
import { ReactComponent as CESTJ } from "../static/icons/mbti icons_comment/Property 1=Default-12_ESTJ.svg";
import { ReactComponent as CESTP } from "../static/icons/mbti icons_comment/Property 1=Default-14_ESTP.svg";
import { ReactComponent as CESFJ } from "../static/icons/mbti icons_comment/Property 1=Default-8_ESFJ.svg";
import { ReactComponent as CENTP } from "../static/icons/mbti icons_comment/Property 1=Default-6_ENTP.svg";
import { ReactComponent as CINFJ } from "../static/icons/mbti icons_comment/Property 1=Default-13_INFJ.svg";
import { ReactComponent as CINTJ } from "../static/icons/mbti icons_comment/Property 1=Default-9_INTJ.svg";
import { ReactComponent as CINTP } from "../static/icons/mbti icons_comment/Property 1=Default-11_INTP.svg";
import { ReactComponent as CISFJ } from "../static/icons/mbti icons_comment/Property 1=Default-5_ISFJ.svg";
import { ReactComponent as CISFP } from "../static/icons/mbti icons_comment/Property 1=Default-7_ISFP.svg";
import { ReactComponent as CISTJ } from "../static/icons/mbti icons_comment/Property 1=Default-1_ISTJ.svg";
import { ReactComponent as CISTP } from "../static/icons/mbti icons_comment/Property 1=Default-3_ISTP.svg";
import { ReactComponent as CNoMbti } from "../static/icons/mbti icons_comment/Property 1=Default-16_none.svg";
import { ReactComponent as CLevelOne } from "../static/icons/lv icons_comment/Property 1=Default-1.svg";
import { ReactComponent as CLevelTwo } from "../static/icons/lv icons_comment/Property 1=Default-2.svg";
import { ReactComponent as CLevelThree } from "../static/icons/lv icons_comment/Property 1=Default_3.svg";

const UserProfile = (props) => {
  const nickname = sessionStorage.getItem("nickname");
  const mbti = sessionStorage.getItem("mbti");
  const level = sessionStorage.getItem("level");
  const profile = sessionStorage.getItem("profile");

  
  const {
    one_user,
    two_user,
    thank_user,
    share,
    not_share,
    comment,
    comment_user,
    size,
    Isize,
    height,
    margin,
    chat_user,
    mypage_user,
  } = props;

  const styles = {
    size: size,
    Isize: Isize,
    height: height,
    margin: margin,
    chat_user: chat_user,
    mypage_user: mypage_user,
  };
  
  if (mypage_user) {
    return (
      <React.Fragment>
        <Grid flex="flex" width="100%" hegiht="auto" bg="#fff">
          <Grid width="80%" height="auto">
            <React.Fragment>
              <Grid width="auto" flex="flex" bg="fff">
                {/* 유저 프로필 사진 */}
                <Grid width="auto" height="auto" flex="flex">
                  <Image shape="circle" Isize="80" src={profile} />
                </Grid>
                {/* mbti // 레벨 */}
                <Grid
                  width="85%"
                  height="auto"
                  flex="flex"
                  direction="column"
                  margin="0 0 0 10px"
                >
                  <Grid
                    width="100%"
                    height="50%"
                    flex="flex"
                    justify="flex-start"
                  >
                    <Grid
                      width="auto"
                      padding="3px 8px"
                      bg="#FF5454"
                      flex="flex"
                      radius="20px"
                      margin="0 4px 0 0"
                    >
                      <Text color="#fff" size="0.9rem" bold="400">
                        {mbti}
                      </Text>
                    </Grid>
                    <Grid
                      width="auto"
                      padding="3px 8px"
                      bg="#333"
                      flex="flex"
                      radius="20px"
                    >
                      <Text color="#fff" size="0.9rem" bold="400">
                        LV {level}
                      </Text>
                    </Grid>
                  </Grid>
                  <Grid width="100%" height="50%" margin="5px 0 0 0">
                    <Text {...styles}>{nickname}</Text>
                  </Grid>
                </Grid>
              </Grid>
            </React.Fragment>
          </Grid>
          <Grid
            flex="flex"
            cursor="pointer"
            justify="flex-end"
            width="20%"
            height="40px"
          >
            <SettingButton
              width="28px"
              height="28px"
              onClick={() => {
                history.push("/MyEdit");
              }}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  if (chat_user) {
    return (
      <>
        {thank_user ? (
          thank_user.map((u) => {
            return (
              <React.Fragment>
                <Grid
                  flex="flex"
                  width="100%"
                  hegiht="auto"
                  padding="20px"
                  bg="#fff"
                  borderB="1px solid #efefef"
                >
                  <Grid width="80%" height="auto">
                    <React.Fragment>
                      <Grid width="auto" flex="flex" bg="fff">
                        {/* 유저 프로필 사진 */}
                        <Grid
                          width="auto"
                          height="auto"
                          flex="flex"
                        >
                          <Image shape="circle" Isize="60" src={u.profileImgUrl}/>
                        </Grid>
                        {/* mbti // 레벨 */}
                        <Grid
                          width="85%"
                          height="auto"
                          flex="flex"
                          direction="column"
                          margin="0 0 0 10px"
                        >
                          <Grid
                            width="100%"
                            height="50%"
                            flex="flex"
                            justify="flex-start"
                          >
                            <Grid
                              width="auto"
                              padding="3px 8px"
                              bg="#FF5454"
                              flex="flex"
                              radius="20px"
                              margin="0 4px 0 0"
                            >
                              <Text color="#fff" size="0.9rem" bold="400">
                                {u.mbti}
                              </Text>
                            </Grid>
                            <Grid
                              width="auto"
                              padding="3px 8px"
                              bg="#333"
                              flex="flex"
                              radius="20px"
                            >
                              <Text color="#fff" size="0.9rem" bold="400">
                                LV {u.level}
                              </Text>
                            </Grid>
                          </Grid>
                          <Grid width="100%" height="50%" margin="5px 0 0 0">
                            <Text {...styles}>{u.nickname}</Text>
                          </Grid>
                        </Grid>
                      </Grid>
                    </React.Fragment>
                  </Grid>
                  <Grid
                    flex="flex"
                    justify="flex-end"
                    width="20%"
                    height="40px"
                  >
                    <TbModalTwoButton you_id={u.userId} />
                  </Grid>
                </Grid>
              </React.Fragment>
            );
          })
        ) : (
          <>없음</>
        )}
      </>
    );
  }

  if (comment) {
    return (
      <React.Fragment>
        <Grid width="auto" {...styles} flex="flex" bg="fff">
          {/* 유저 프로필 사진 */}
          <Grid {...styles} width="auto" height="auto" flex="flex">
            <Image {...styles} src={comment_user.profileImgUrl} />
          </Grid>
          {/* mbti // 레벨 */}
          <Grid
            width="85%"
            height="auto"
            flex="flex"
            direction="column"
            margin="0 0 0 10px"
          >
            <Grid width="100%" height="50%" flex="flex" justify="flex-start">
              <Grid
                width="auto"
                padding="10px 0px 0px 0px"
                flex="flex"
                radius="20px"
                margin="0 4px 0 0"
              >
                <Text color="#fff" size="0.9rem" bold="400">
                  {comment_user.mbti === "ENFJ" ? (
                    <CENFJ />
                  ) : comment_user.mbti === "INFP" ? (
                    <CINFP />
                  ) : comment_user.mbti === "ENFP" ? (
                    <CENFP />
                  ) : comment_user.mbti === "ENTJ" ? (
                    <CENTJ />
                  ) : comment_user.mbti === "ESFP" ? (
                    <CESFP />
                  ) : comment_user.mbti === "ESTJ" ? (
                    <CESTJ />
                  ) : comment_user.mbti === "ESTP" ? (
                    <CESTP />
                  ) : comment_user.mbti === "INFJ" ? (
                    <CINFJ />
                  ) : comment_user.mbti === "INTJ" ? (
                    <CINTJ />
                  ) : comment_user.mbti === "INTP" ? (
                    <CINTP />
                  ) : comment_user.mbti === "ISFJ" ? (
                    <CISFJ />
                  ) : comment_user.mbti === "ISFP" ? (
                    <CISFP />
                  ) : comment_user.mbti === "ISTJ" ? (
                    <CISTJ />
                  ) : comment_user.mbti === "ISTP" ? (
                    <CISTP />
                  ) : comment_user.mbti === "맞춰보셈" ? (
                    <CNoMbti />
                  ) : comment_user.mbti === "ESFJ" ? (
                    <CESFJ />
                  ) : comment_user.mbti === "ENTP" ? (
                    <CENTP />
                  ) : null}
                </Text>
              </Grid>
              <Grid
                width="auto"
                padding="10px 0px 0px 0px"
                flex="flex"
                radius="20px"
              >
                <Text color="#fff" size="0.9rem" bold="400">
                  {comment_user.level === 1 ? (
                    <CLevelOne />
                  ) : comment_user.level === 2 ? (
                    <CLevelTwo />
                  ) : comment_user.level === 3 ? (
                    <CLevelThree />
                  ) : null}
                </Text>
              </Grid>
            </Grid>
            <Grid width="100%" height="50%" margin="5px 0 0 0">
              <Text {...styles}>{comment_user.nickname}</Text>
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  if (share) {
    return (
      <React.Fragment>
        <Grid width="auto" {...styles} flex="flex" bg="fff">
          <Grid {...styles} width="auto" height="auto" flex="flex">
            <Image {...styles} src={two_user.profileImgUrl} />
          </Grid>
          {/* mbti // 레벨 */}
          <Grid
            width="85%"
            height="auto"
            flex="flex"
            direction="column"
            margin="0 0 0 10px"
          >
            <Grid width="100%" height="50%" flex="flex" justify="flex-start">
              <Grid
                width="auto"
                padding="10px 0px 0px 0px"
                flex="flex"
                radius="20px"
                margin="0 4px 0 0"
              >
                <Text color="#fff" size="0.9rem" bold="400">
                  {two_user.mbti === "ENFJ" ? (
                    <ENFJ />
                  ) : two_user.mbti === "INFP" ? (
                    <INFP />
                  ) : two_user.mbti === "ENFP" ? (
                    <ENFP />
                  ) : two_user.mbti === "ENTJ" ? (
                    <ENTJ />
                  ) : two_user.mbti === "ESFP" ? (
                    <ESFP />
                  ) : two_user.mbti === "ESTJ" ? (
                    <ESTJ />
                  ) : two_user.mbti === "ESTP" ? (
                    <ESTP />
                  ) : two_user.mbti === "INFJ" ? (
                    <INFJ />
                  ) : two_user.mbti === "INTJ" ? (
                    <INTJ />
                  ) : two_user.mbti === "INTP" ? (
                    <INTP />
                  ) : two_user.mbti === "ISFJ" ? (
                    <ISFJ />
                  ) : two_user.mbti === "ISFP" ? (
                    <ISFP />
                  ) : two_user.mbti === "ISTJ" ? (
                    <ISTJ />
                  ) : two_user.mbti === "ISTP" ? (
                    <ISTP />
                  ) : two_user.mbti === "맞춰보셈" ? (
                    <NoMbti />
                  ) : two_user.mbti === "ESFJ" ? (
                    <ESFJ />
                  ) : two_user.mbti === "ENTP" ? (
                    <ENTP />
                  ) : null}
                </Text>
              </Grid>
              <Grid
                width="auto"
                padding="10px 0px 0px 0px"
                flex="flex"
                radius="20px"
              >
                <Text color="#fff" size="0.9rem" bold="400">
                  {two_user.level === 1 ? (
                    <LevelOne />
                  ) : two_user.level === 2 ? (
                    <LevelTwo />
                  ) : two_user.level === 3 ? (
                    <LevelThree />
                  ) : null}
                </Text>
              </Grid>
            </Grid>
            <Grid width="100%" height="50%" margin="5px 0 0 0">
              <Text {...styles}>{two_user.nickname}</Text>
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  if (not_share) {
    return (
      <React.Fragment>
        <Grid width="auto" {...styles} flex="flex" bg="fff">
          {/* 유저 프로필 사진 */}
          <Grid {...styles} width="auto" height="auto" flex="flex">
            <Image {...styles} />
          </Grid>
          {/* mbti // 레벨 */}
          <Grid
            width="85%"
            height="auto"
            flex="flex"
            direction="column"
            margin="0 0 0 10px"
          >
            <Grid width="100%" height="50%" flex="flex" justify="flex-start">
              <Grid
                width="43px"
                padding="3px"
                bg="#FF5454"
                flex="flex"
                radius="20px"
                margin="0 4px 0 0"
              >
                <Text color="#fff" size="0.9rem" bold="400">
                  {one_user.mbti}
                </Text>
              </Grid>
              <Grid
                width="43px"
                padding="3px"
                bg="#333"
                flex="flex"
                radius="20px"
              >
                <Text color="#fff" size="0.9rem" bold="400">
                  {"LV." + one_user.level}
                </Text>
              </Grid>
            </Grid>
            <Grid width="100%" height="50%" margin="5px 0 0 0">
              <Text {...styles}>{one_user.nickname}</Text>
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Grid width="auto" {...styles} flex="flex" bg="fff">
        {/* 유저 프로필 사진 */}
        <Grid {...styles} width="auto" height="auto" flex="flex">
          <Image {...styles} />
        </Grid>
        {/* mbti // 레벨 */}
        <Grid
          width="85%"
          height="auto"
          flex="flex"
          direction="column"
          margin="0 0 0 10px"
        >
          <Grid width="100%" height="50%" flex="flex" justify="flex-start">
            <Grid
              width="auto"
              padding="3px 8px"
              bg="#FF5454"
              flex="flex"
              radius="20px"
              margin="0 4px 0 0"
            >
              <Text color="#fff" size="0.9rem" bold="400">
                mbti
              </Text>
            </Grid>
            <Grid
              width="auto"
              padding="3px 8px"
              bg="#333"
              flex="flex"
              radius="20px"
            >
              <Text color="#fff" size="0.9rem" bold="400">
                LV level
              </Text>
            </Grid>
          </Grid>
          <Grid width="100%" height="50%" margin="5px 0 0 0">
            <Text {...styles}>..</Text>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const profileArea = styled.div`
  background-color: black;
`;

export default UserProfile;
