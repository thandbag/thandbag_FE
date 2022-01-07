import React, { useEffect } from "react";
import { Grid, Text, Image, Button } from "../elements/TbIndex";
import { history } from "../redux/configureStore";
import TbModalTwoButton from "./TbModalTwoButton";
import { ReactComponent as SettingButton } from "../static/icons/setting_button.svg";

const UserProfile = (props) => {
  const userId = sessionStorage.getItem("userId");
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
                      <Grid width="auto" {...styles} flex="flex" bg="fff">
                        {/* 유저 프로필 사진 */}
                        <Grid
                          {...styles}
                          width="auto"
                          height="auto"
                          flex="flex"
                        >
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
                  {comment_user.mbti}
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
                  LV {comment_user.level}
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
                  {two_user.mbti}
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
                  {"LV." + two_user.level}
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

export default UserProfile;
