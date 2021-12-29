import React from "react";
import Heads from "../components/Heads";
import { Grid, Image, Text } from "../elements/TbIndex";

const TbChatList = (props) => {
    return (
        <>
        <Heads
          none
          bg="#fff"
          stroke="#fff"
          color="#333"
          text="채팅"
        />
        <Grid flex="flex; justify-content: space-between" margin="150px 0 0 0">
        <Image shape="circle" Isize="100"/>
        <Grid>
        <Text>준명님</Text>
        <Text>내용내용내용</Text>
        </Grid>
        
        </Grid>
        </>
    )
};


export default TbChatList;
