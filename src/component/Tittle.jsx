
import { Helmet } from "react-helmet";

 export default function Tittle(props){
    return(
        <Helmet>
            <title>HypersMovie | {props.children}</title>
        </Helmet>
    )
 }