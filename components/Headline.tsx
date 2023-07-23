import {FC, ReactNode} from "react";
import {css} from "@/styled-system/css";
import {StandardLonghandProperties} from "@/styled-system/types/csstype";

interface Props {
    children: ReactNode
    classNames?: StandardLonghandProperties
}
export const Headline:FC<Props> = ({children,classNames}) => {
    return (
        <h1 className={css({
            ...classNames,
            fontSize: "3rem",
            fontWeight: "900",
            lineHeight: "1.2",
        })}>
            {children}
        </h1>
    )
}