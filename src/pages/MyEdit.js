import React from "react";
import styled from "styled-components";
import { Grid, Text, Image, Button } from "../elements/TbIndex";

const MyEdit = (props) => {
    return (
        <>
        <Grid padding="90px 20px 0px 20px">
            <Grid flex="flex; justify-content:space-around; align-items: center; flex-direction:column">
                <Image shape="circle" size="100"></Image>
                <Grid margin="10px 0 0 0" align="center">
                    <Text>프로필 이미지 변경</Text>
                </Grid>
                
            </Grid>
            <Grid margin="30px 0 0 0" align="center">
                <EditInput></EditInput>
                <EditInput></EditInput>
                <EditInput></EditInput>
                <EditInput></EditInput>
            </Grid>
            <Grid margin="100px 0 0 0" align="center">
                <Button width="200px" text="저장"></Button>
            </Grid>

        </Grid>
        </>
    )
};

const EditInput = styled.input`
    margin-top: 10px;
    width: 300px;
    height: 44px;
    box-sizing: border-box;
    font-size: 17px;
    border: none;
    border-bottom: solid;
    outline: none;
    

`;

export default MyEdit;
