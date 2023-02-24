import {Link} from "react-router-dom"; 


export default function Home(){
    return(
        <>
        <div>Home page</div>
        <ul>
            <li>
            <Link to = {'guitar'}>Guitar</Link>
            </li>
            <li>
            <Link to = {'piano'}> Piano</Link>
            </li>
        </ul>
        </>
    )
}