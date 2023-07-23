import {css} from "@/styled-system/css";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import {SocialIconList} from "@/constants/socialicon";
export const SocialIcon = () => {
    return (
        <ul className={css({
            display: "flex",
            gap: "12px",
            alignItems: "center",
        })}>
            {SocialIconList.map((item) => (
                <li key={item.link} className={css({
                    fontSize: "1rem",
                    fontWeight: "bold",
                    display:"flex",
                    alignItems: "center",
                    width: "20px",
                    height: "20px",
                })}>
                    <Link href={item.link}>
                        <Image src={item.image_src} alt="" width={30} height={30} />
                    </Link>
                </li>
            ))}
        </ul>
    )
}

