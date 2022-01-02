import React from "react";
import { Button, Grid, Text, Image } from "../elements/TbIndex";
import { history } from "../redux/configureStore";
import Heads from "../components/Heads";
import { useSelector } from "react-redux";

const TbNotice = (props) => {
    const notice = useSelector((state) => (state.chat.notice))

    React.useEffect(() => {
        
    },[])

    return (
        <>
        <Heads none bg="#fff" stroke="#fff" color="#333" text="알림" />
        <Grid margin="70px 0 0 0">
            <Grid
            borderB
            borderT
            padding="16px 20px"
            width="100%"
            height="45px"
            flex="flex"
            justify="space-between"
            bg="#FBF7F7"
            _onClick={()=>{
                // history.push(`/`)
            }}
            >
            <Image shape="circle" Isize="30" />
            <Grid align="center" width="60%">
                <Text size="15px" family="NotoSansCJK">
                아직 등록된 공지가 없어요!
                </Text>
            </Grid>
            <Grid flex="flex" direction="column" align="center" width="20%">
                <Grid
                width="23px"
                height="23px"
                bg="#FF5454"
                flex="flex"
                radius="20px"
                >
                <Text color="#fff" size="11px">
                    N
                </Text>
                </Grid>
            </Grid>
            </Grid>
            {/* 맵돌릴구간 */}
            {notice?.map((n,idx) => {
                return (
                    <Grid
                    borderB
                    borderT
                    padding="16px 20px"
                    width="100%"
                    flex="flex"
                    justify="space-between"
                    bg="#FFF"
                    // _onClick={()=>{
                        // history.push(`/`)
                    // }}
                    >
                    <Image shape="circle" Isize="50" />
                    <Grid width="60%">
                        <Text padding="0 0 10px 0" size="20px">
                        내 생드백에 새로운 잽 등록
                        </Text>
                    </Grid>
                    <Grid flex="flex" direction="column" align="center" width="20%">
                        <Grid
                        width="23px"
                        height="23px"
                        bg="#FF5454"
                        flex="flex"
                        radius="20px"
                        >
                        <Text color="#fff" size="11px">
                            N
                        </Text>
                        </Grid>
                    </Grid>
                    </Grid>
                )
            })}
            
        </Grid>
        
        </>
    )
}

export default TbNotice;
