import Wheather from "./components/Wheather";
import Nav from "./components/nav";
import imgfarmer from './images/farmer.jpg'

export default function Agriculture(){
    return(
        <> 
        <Nav/>
        <div className="fluid bg-dark">
        <img src={imgfarmer} alt="farmer" style={{
            width:"95rem",
            height:"35rem"
        }}/>
        <div className="container">
        <Wheather/>
        </div>
        </div>
        </>
    )
}