import React from "react";
import styled from "styled-components";

const TbButton = (props) => {

    const {position, width, text, _onClick, margin}=props;

    const styles={
        position:position,
        width:width,
        margin:margin,
    }

    return (
        <BtnBasic {...styles} onClick={_onClick}>
            {text}
        </BtnBasic>
    )
};

TbButton.defaultProps = {
    position:false,
    width:'100%',
    text:'텍스트',
    margin:"",
    _onClick:()=>{},
    _disabled:()=>{},
    
}

const BtnBasic = styled.button`
    position: ${(props)=> props.position};
    width: ${(props)=> props.width};
    margin:${(props)=> props.margin};
    background:#c4c4c4;
    border:none;
    border-radius:4px;
    color:#fff;
    font-size:17px;
`;


export default TbButton;
