import React from "react";
import "./page2.css"; 

const Page2 = ({ news }) => {
  return (
    <div className="page2-container ">
    <div className="container mt-4">
      <div className="row">
        {/* الجزء الثاني: ثلاثة أرباع الصفحة */}
        <div className="col-md-9">
          <div className="row">
            {news.slice(6).map((item, index) => (
              <div className="col-md-6 mb-3" key={index}>
                <div className="card left-card"> 
                  <img    style={{height:"50%"}}
                    src={item?.urlToImage || "https://via.placeholder.com/300"}
                    className="card-img-top"
                    alt={item?.title || "News Image"}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item?.title || "No Title Available"}</h5>
                    <p className="card-text">
                      {item?.content || "No Content Available."}
                    </p>
                    <p className="card-text">
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* الجزء الأول: ربع الصفحة */}
        <div className="col-md-3">
          <div className="row">
            {news.slice(0,-4).map((item, index) => (
              <div className="col-12 mb-1" key={index}>
                <div className="card right-card ">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                      style={{height:"100%"}}
                        src={item?.urlToImage || "https://via.placeholder.com/150"}
                        className="img-fluid rounded-start"
                        alt={item?.title || "News Image"}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{item?.title || "No Title Available"}</h5>
                        <p className="card-text">
                          {item?.description?.slice(0.30) || "No Description Available."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Page2;
