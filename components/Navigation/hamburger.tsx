import React from "react";
import {css} from "@/styled-system/css";

function Hamburger():React.JSX.Element {
    const spanStyle = css({
                position: "absolute",
                left: "14px",
                height: "2px",
                borderRadius: "2px",
                display:'inline-block',
                backgroundColor: "black",
    })
    return (
        <>
            <span style={{top:'15px',width:'80%'}} className={spanStyle}></span>
            <span style={{top:'23px',width:'50%'}} className={spanStyle}></span>
            <span style={{top:'31px',width:'40%'}} className={spanStyle}></span>
        </>
    )
}

export default Hamburger