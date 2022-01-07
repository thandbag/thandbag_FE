import React from "react";
import { Grid, Image, Text } from "../elements/TbIndex";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import TbLoading from "./TbLoading";

const AuthRedirect = (props) => {
    const dispatch = useDispatch();

    let code = new URL(window.location.href).searchParams.get("code");

    React.useEffect(async () => {
        await dispatch(userActions.kakaoLogin(code))
    }, [])

    return (
        <>
        {/* <Grid flex="flex"
          direction="column" position="absolute" top="300px">
            <Image no_thand />
            <Text color="#F7C8C8" size="40px" margin="40px 0 0 0">
            로딩중...
          </Text>
        </Grid> */}
        <TbLoading/>
        </>
    );
};

export default AuthRedirect;