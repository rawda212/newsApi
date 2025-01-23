import React from "react"
import "./navbar.css"
const Navbar=()=>{
return (
    <nav className="navbar navbar-expand-lg ">
  <div className="container  bg-dark">
  
    <div className="collapse navbar-collapse col-10" id="navbarNavAltMarkup">
      <div className="navbar-nav ">
      <a  className="navbar-brand text-light" href="#">Politcs</a>
        <a className="nav-link active text-light " aria-current="page" href="#">World</a>
        <a className="nav-link text-light" href="#">Economy</a>
        <a className="nav-link text-light" href="#">Science&tech</a>
        <a className="nav-link  text-light" aria-disabled="true">Bussiness</a>
        <a className="nav-link  text-light" aria-disabled="true">Travel</a>
        <a className="nav-link text-light" href="#">Climate</a>
        <a className="nav-link text-light" href="#">Lifestyle</a>
        <a className="nav-link  text-light" aria-disabled="true">Food</a>
        <a className="nav-link  text-light" aria-disabled="true">Sports</a>
      </div>
      <div className="col-2  " style={{ marginLeft:"300px"}}>
        <span className="text-light">13:40 24C</span>
      </div>
    </div>
  </div>
</nav>
)
}
// const style={
//     a:hover{
//         background-color:"green"
//     }
// }
export  default Navbar;