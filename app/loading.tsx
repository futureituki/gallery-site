import {css} from "@/styled-system/css";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className={css({
            position:"fixed",
            top:"50%",
            left:"50%",
            transform:"translate(-50%, -50%)",
            zIndex:9999,
        })}>
            <div className={css({
                position:"relative",
                display:"inline-block",
                backgroundColor:"#000",
                width:"50px",
                height:"50px",
                borderRadius:"50%",
                outline:"none",
                transition:"all .8s ease",
                _after: {
                    content:"''",
                    position:"absolute",
                    left:"-25%",
                    top:"-25%",
                    border:"1px solid #333",
                    width:"150%",
                    height:"150%",
                    borderRadius:"50%",
                    opacity:1,
                    animation:"1s circleanime linear infinite",
                },
                _before: {
                    content:"''",
                    position:"absolute",
                    left:"-25%",
                    top:"-25%",
                    border:"1px solid #333",
                    width:"150%",
                    height:"150%",
                    borderRadius:"50%",
                    opacity:1,
                    animation:"1s circleanime linear infinite",
                    animationDelay:".5s",
                }
            })}></div>
        </div>
    )
}