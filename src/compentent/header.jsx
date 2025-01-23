import React from "react";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="container">
        <a className="navbar-brand col-9" href="#">
        NEWSLETTER
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex text-light  " role="search">
            <input style={{backgroundColor:" #04594D", color:"white"}}
              className="form-control text-light "
              type="search"
              placeholder="Search "
              aria-label="Search"
            />
            <button className="btn btn-outline-success me-2 " style={{color:"white" ,backgroundColor:" #8E4042"}} type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;

