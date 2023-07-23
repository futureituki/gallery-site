import {css} from "@/styled-system/css";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {SocialIcon} from "@/components/Navigation/SocialIcon";
import {NavigationList} from "@/constants/navigation";

interface Props {
    children: React.ReactNode
}
function HeaderServer({children}:Props):React.JSX.Element {
    return (
        <header className={css({
            width: "100%",
            height: "80px",
            position: "fixed",
            top: "0",
            left: "0",
            zIndex: "99",
            backgroundColor: "#fff",
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
                            {NavigationList.map((item) => (
                                <li key={item.name}>
                                    <Link className={css({
                                        fontSize: ".8rem",
                                        fontWeight: "bold",
                                    })} href={item.link}>
                                        {item.name}
                                    </Link>
                                </li>
                                ))}
                        </ul>
                    </nav>
                    <nav>
                      <SocialIcon />
                    </nav>
                </div>
            </div>
            </header>
    )
}

export default HeaderServer