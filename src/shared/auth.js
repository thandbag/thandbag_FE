import React from "react";
import { history } from "../redux/configureStore";
import Swal from "sweetalert2";

// eslint-disable-next-line import/no-anonymous-default-export
export default (Page, checkAuth) => {
    const AuthCheck = (props) => {
        const token = sessionStorage.getItem("token");
        const is_login = token ? true : false
        React.useEffect(() => {
            if(!is_login && checkAuth) {
                Swal.fire({
                    icon: 'warning',
                    title: '앗!',
                    text: '로그인이 필요한 페이지입니다'
                  })
                history.push("/login");
            } else if (is_login && !checkAuth) {
                Swal.fire({
                    icon: 'warning',
                    title: '앗!',
                    text: '이미 로그인을 하셨습니다'
                  })
                history.push("/main");
            }
        }, []);
        return <Page {...props} />
    };
    return AuthCheck;
}