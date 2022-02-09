import React from "react";
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
        <TbLoading/>
        </>
    );
};

export default AuthRedirect;