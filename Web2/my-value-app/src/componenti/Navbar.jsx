import "./Navbar.css"
import Link from "../Link"

const x = 10;
const img = "vite";
const imgStyle = {

    height: x < 10? "300px" : "500px",
    borderRadius: x < 10? "40px" : "90px"
}
/*<nav>{x >= 10? "Sono più grande!" : "Sei minuscolo"}</nav>
<img style={{height: "500px"}} src={`/${img}.svg`}/>*/
function Navbar(){

    return (

        <>
        <nav id="box" className="box boxColor">{x}</nav>
        <img style={imgStyle}src={`/${img}.svg`}/>
        
        <ul>
            <li><Link></Link></li>
            <li><Link></Link></li>
            <li><Link></Link></li>
            <li><Link></Link></li>
            <li><Link></Link></li>
        </ul>
        
        </>
    )
}

export default Navbar