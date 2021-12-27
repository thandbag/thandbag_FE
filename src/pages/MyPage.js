import React from "react";
import { Grid, Text, Image } from "../elements/TbIndex";

const MyPage = (props) => {
    return (
        <>
        <Grid padding="90px 20px 0px 20px">
            <Grid flex="flex; justify-content:space-around; align-items: center;">
                <Image shape="circle" size="100"></Image>
                <Grid padding="25px 0 0 0" width="70px">
                    <Text bold>닉네임</Text>
                    <Text bold margin="10px 0 0 0" size="15px">MBTI</Text>
                </Grid>
                
                <Text>LV 2</Text>
                <Text>설정</Text>
            </Grid>
            <Grid margin="40px 0 0 0" padding="0 0 0 20px">
                <Text bold>내가 작성한 생드백</Text>
            </Grid>

        </Grid>
        
        
        </>
    )
}

export default MyPage;
