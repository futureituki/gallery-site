'use client'
import {css} from "@/styled-system/css";
import Image from "next/image";
import Link from "next/link";
import Hamburger from "@/components/Navigation/hamburger";
import {useMenuContext} from "@/context/MenuContext";
import HeaderServer from "@/components/Navigation/header-server";

function Header() {
    const {open, handleOpen} = useMenuContext()
    return (
        <HeaderServer>
            <button style={open ? {opacity:0} : {opacity:1}} className={css({
                width: "40px",
                height:'80%',
                position: "relative",
                cursor: "pointer",
                transition: "all .4s",
                lg:{
                    display:'none'
                }
            })} onClick={() => handleOpen()}>
                <Hamburger/>
            </button>
            <div className={css({
                width: "345px",
                height:'100vh',
                position: "fixed",
                transition: "all .4s",
                right: open ? "0" : "-100%",
                top: "0",
                backgroundColor: "#f8f8f8",
            })}>
                <button className={css({
                    width: "40px",
                    height:'40px',
                    position: "relative",
                    top:'50px',
                    left:'30px',
                    cursor:"pointer",
                    _before: {
                        content: '""',
                        position: "absolute",
                        top: "0%",
                        left: "0%",
                        height: "3px",
                        width: "50%",
                        backgroundColor: "black",
                        rotate: '45deg',
                    },
                    _after: {
                        content: '""',
                        position: "absolute",
                        top: "0%",
                        left: "0%",
                        height: "3px",
                        width: "50%",
                        backgroundColor: "black",
                        rotate: '-45deg',
                    }
                })} onClick={() => handleOpen()}>
                </button>
            </div>
        </HeaderServer>
    )
}

export default  Header