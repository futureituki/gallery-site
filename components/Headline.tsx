import {FC, ReactNode} from "react";
import {css} from "@/styled-system/css";
import {StandardLonghandProperties} from "@/styled-system/types/csstype";

interface Props {
    children: ReactNode
    classNames?: StandardLonghandProperties
}
export const Headline:FC<{children:ReactNode}> = ({children,classNames}) => {
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