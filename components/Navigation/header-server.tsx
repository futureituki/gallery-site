import {css} from "@/styled-system/css";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
    children: React.ReactNode
}
function HeaderServer({children}:Props):React.JSX.Element {
    return (
        <header className={css({
            width: "100%",
            height: "80px",
        })}>
            <div className={css({
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                height: "100%",
                padding: "0 1.6rem",
            })}>
                <div className={css({
                    display: "flex",
                    alignItems: "center",
                    height:'100px',
                    width:'100px',
                })}>
                    <Link href="/">
                        <Image className={css({
                            objectFit: "contain",
                        })} src="/next.svg" alt="このサイトのロゴ" width={100} height={100} />
                    </Link>
                </div>
                <div className={css({
                    display: "flex",
                    gap: "24px",
                    alignItems: "center",
                    height:'60px',
                    fontFamily: "sans-serif",
                    lg: {
                        gap: "48px",
                    }
                })}>
                    {children}
                    <nav className={css({
                        display: "none",
                        lg: {
                            display: "block",
                        }
                    })}>
                        <ul className={css({
                            display: "flex",
                            gap: "25px",
                            alignItems: "center",
                        })}>
                            <li>
                                <Link className={css({
                                    fontSize: ".8rem",
                                    fontWeight: "bold",
                                })} href={'/'}>
                                    HOME
                                </Link>
                            </li>
                            <li>
                                <Link className={css({
                                    fontSize: ".8rem",
                                    fontWeight: "bold",
                                })} href={'/about'}>
                                    ABOUT ME
                                </Link>
                            </li>
                            <li>
                                <Link className={css({
                                    fontSize: ".8rem",
                                    fontWeight: "bold",
                                })} href={'/contact'}>
                                    CONTACT ME
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <nav>
                        <ul className={css({
                            display: "flex",
                            gap: "12px",
                            alignItems: "center",
                        })}>
                            <li className={css({
                                fontSize: "1rem",
                                fontWeight: "bold",
                                display:"flex",
                                alignItems: "center",
                                width: "20px",
                                height: "20px",
                            })}>
                                <Link href={'/'}>
                                    <Image src="/instagram.svg" alt="インスタグラムのロゴ" width={30} height={30} />
                                </Link>
                            </li>
                            <li className={css({
                                fontSize: "1rem",
                                fontWeight: "bold",
                                display:"flex",
                                alignItems: "center",
                                width: "20px",
                                height: "20px",
                            })}>
                                <Link href={'/'}>
                                    <Image src="/instagram.svg" alt="インスタグラムのロゴ" width={30} height={30} />
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            </header>
    )
}

export default HeaderServer