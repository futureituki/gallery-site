import React from "react";
import Link from "next/link";
import Image from "next/image";
import {css} from "@/styled-system/css";

interface Meta {
    title:string
    meta:string
}
interface Props {
    meta:Meta
    link:string
    image_link:string
    reverse?:boolean
}
function GalleryBox({meta, link, image_link, reverse}:Props):React.JSX.Element {
    return (
        <div className={css({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin:"40px 0",
            md: {
                margin:"0",
                display: "flex",
                flexDirection: reverse ? "row-reverse" : "row",
            }
        })}>
            <Link href={link} className={css({
                width: "100%",
                md: {
                    width: "50%",
                    height: "400px",
                },
                lg: {
                    height: "600px",
                }
            })}>
                <div className={css({
                    width: "100%",
                    height: "300px",
                    position:"relative",
                    transition:"all .8s ease",
                    md: {
                        width: "100%",
                        height: "400px",
                    },
                    lg: {
                        height: "600px",
                    },
                    _hover: {
                        _before: {
                            opacity: ".5",
                        }
                    },
                    _before: {
                        transition:"all .8s ease",
                        content:"''",
                        position:"absolute",
                        width:"100%",
                        height:"100%",
                        top:"0",
                        left:"0",
                        opacity:0,
                        backgroundColor:"#000",
                    }
                })}>
                    <div style={{backgroundImage: `url(${image_link})` }} className={css({
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: "100%",
                        height: "100%",
                    })}></div>
                </div>
            </Link>
            <div className={css({
                width: "100%",
                position: "relative",
                md: {
                    width: "50%",
                    height: "400px",
                },
                lg:{
                    height:"600px"
                }
            })}>
                <div className={css({
                    md: {
                        position: "absolute",
                        textAlign:"center",
                        padding: "0 10px",
                        left: "0px",
                        right: "0px",
                        top: "50%",
                        transform: "translateY(-50%)",
                    }
                    })}>
                <h1>{meta.title}</h1>
                <p>{meta.meta}</p>
                <button className={css({
                    border:".5px solid #d3d3d3",
                    fontSize:".7rem",
                    fontWeight:"normal",
                    padding:"10px 20px",
                    transition:"all .8s ease",
                    _hover: {
                        backgroundColor: "#000",
                        color:"#fff",
                    }
                })}>
                    <Link href={link}>
                        VIEW GALLERY
                    </Link>
                </button>
                </div>
            </div>
        </div>
    )
}

export default GalleryBox