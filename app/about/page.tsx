import {css} from "@/styled-system/css";
import {Headline} from "@/components/Headline";

function Page() {
    return (
        <div className={css({
            width:'80%',
            margin:'20px auto',
            maxWidth:'1200px',
            sm: {
                width:'95%',
            }
        })}>
            <div>
                <Headline>Profile</Headline>
            </div>
        </div>
    )
}

export default Page