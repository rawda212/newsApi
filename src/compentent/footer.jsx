import "./footer.css"
const Footer=()=>{
    return (
        <div className="container-fluid d-flex bg-dark">
            <div className=" col-2 text-light" >
                <h2 className="mt-4">NEWSLETTER</h2>
  
</div>

<div className=" col-7 text-light" >
    <p> 
    <span> privacyPolice  </span> <span> team of servece </span><span> copy police </span> <span>data police </span><span> accessability</span> <span> help</span>

    </p>
    <h6 className="">&copy;2023 NewsLetter,All right reverse </h6>
</div>

<div className="col-3 text-light d-flex" >
<div style={{width:"100px"}}>
    <p>Politcs</p>
    <p>World</p>
    <p>Econemy</p>
    <p>Science&tech</p>
    <p>Bussiness</p>
</div>
<div style={{width:"110px",marginLeft:"20px"}}>
    <p>Travel</p>
    <p>Climate</p>
    <p>LifeStyle</p>
    <p>food</p>
    <p>Sport</p>
</div>
</div>
        </div>
    )
}
export default Footer;