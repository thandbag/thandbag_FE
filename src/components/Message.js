import React from "react";
import { useSelector } from "react-redux";
import {history} from "../redux/configureStore";
import { Grid, Text, Image } from "../elements/TbIndex";

const Message = (props) => {
    const {messageInfo} = props;
    const user_info = sessionStorage.getItem('nickname');
    console.log(props)

    if(user_info === messageInfo.sender ) {
        return (
            <Grid marginB="16px" flex="flex" justify="end" >
                <Grid marginT="auto"  width="12%">
                    <Text size="10px" family="NotoSansCJK">{messageInfo.createdAt}</Text>
                </Grid>
                <Grid radius="10px" bg="#F7C8C8" padding="10px" width="auto">
                    <Text family="NotoSansCJK" size="13px" width="auto" color="#fff">
                        {messageInfo.message} </Text>
                </Grid>
            </Grid>
        );
    } else {
        return (
            <Grid marginB="8px" flex="flex" justify="flex-start">
                <Grid padding="0px 10px" marginB="auto" width="auto">
                    <Image shape="circle" Isize="40"/>
                </Grid>
                <Grid width="auto">
                    <Text padding="5px">{messageInfo.sender}</Text>
                    <Grid radius="10px" bg="#FBF7F7" padding="10px" width="auto">
                        <Text family="NotoSansCJK" size="13px" width="190px" color="#333">
                        {messageInfo.message} </Text>
                    </Grid>
                </Grid>
                <Grid marginT="auto"  width="12%">
                    <Text size="10px" family="NotoSansCJK">{messageInfo.createdAt}</Text>
                </Grid>
            </Grid>
        );
    } 
};

export default Message;