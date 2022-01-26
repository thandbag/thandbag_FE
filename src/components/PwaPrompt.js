import React from "react";
import { useReactPWAInstall } from "react-pwa-install";
import {Button} from "../elements/TbIndex";
import icon from "../static/icons/thandbag_app.png"


const PwaPrompt = () => {
    const { pwaInstall, supported, isInstalled} = useReactPWAInstall();
    const pwaClick = () => {
        pwaInstall({
            title: "thandbag 다운받기",
            logo: icon,
        })
        .then(() => {
        })
        .catch(() => {
        });
    };
    

    return (
        <div>
        {supported() && !isInstalled() &&
            <Button
            margin="0 0 20px 0"
            width="150px"
            height="50px"
            radius="12px"
            bg="#333"
            color="#fff"
            size="1.2rem"
            text="앱 다운받기"
            _onClick={
            pwaClick}>
            </Button>
        }
        </div>
        
        
    );
};

export default PwaPrompt;
