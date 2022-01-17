import React from "react";
import { history } from "../redux/configureStore";

// eslint-disable-next-line import/no-anonymous-default-export
export default (Page, checkAuth) => {
    const AuthCheck = (props) => {
        const token = sessionStorage.getItem("token");
        const is_login = token ? true : false
        console.log(token, is_login)
        React.useEffect(() => {
            if(!is_login && checkAuth) {
                window.alert("로그인이 필요한 페이지입니다")
                history.push("/login");
            } else if (is_login && !checkAuth) {
                window.alert("메인으로 가라")
                history.push("/main");
            }
        }, []);

        return <Page {...props} />
    };
    return AuthCheck;
}