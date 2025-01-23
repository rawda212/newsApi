
import React from "react";
import "./page1.css"

const Page1 = ({ news }) => {
  return (
    <div className="page1-container ">
    <div className="container mt-4">
      <div className="row" style={{height:"170px"}}>
        <div className="col-md-6">
          <div className="card ">
            <img
              src={news[0]?.urlToImage || "https://via.placeholder.com/300"}
              className="card-img-top"
              alt={news[0]?.title || "News Image"}
            />
            <div className="card-body">
              <h5 className="card-title">{news[0]?.title || "No Title Available"}</h5>
              <p className="card-text">{news[0]?.content || "No Content Available."}</p>
              <p className="card-text">
           
              </p>
            </div>
          </div>
        </div>

<div className="col-md-6">
  <div className="row" style={{height:"170px"}}>
    {/* {news.slice(1, 3).map((item, index) => (
      <div className="col-12 mb-3" key={index}>
        <div className="card  ">
          <div className="row g-0">
            {index % 2 === 0 ? (
              <>
                <div className="col-md-4 ">
                  <img style={{height:"100%"}}
                    src={item?.urlToImage || "https://via.placeholder.com/300"}
                    className="img-fluid rounded-start"
                    alt={item?.title || "News Image"}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item?.title || "No Title Available"}</h5>
                    <p className="card-text">{item?.content || "No Content Available."}</p>
                    <p className="card-text">
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item?.title || "No Title Available"}</h5>
                    <p className="card-text">{item?.content || "No Content Available."}</p>
                    <p className="card-text">
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <img
                    src={item?.urlToImage || "https://via.placeholder.com/300"}
                    className="img-fluid rounded-end" style={{height:"100%"}}
                    alt={item?.title || "News Image"}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    ))} */}
    {news.slice(1, 3).map((item, index) => (
  <div className="col-12 mb-3" key={index}>
    <div className={`card ${index === 0 ? "first-card" : ""}`}> {/* إضافة كلاس مخصص للكارت الأول */}
      <div className="row g-0">
        {index % 2 === 0 ? (
          <>
            <div className="col-md-4">
              <img
                style={{ height: "100%" }}
                src={item?.urlToImage || "https://via.placeholder.com/300"}
                className="img-fluid rounded-start"
                alt={item?.title || "News Image"}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{item?.title || "No Title Available"}</h5>
                <p className="card-text">{item?.content || "No Content Available."}</p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{item?.title || "No Title Available"}</h5>
                <p className="card-text">{item?.content || "No Content Available."}</p>
              </div>
            </div>
            <div className="col-md-4">
              <img
                style={{ height: "100%" }}
                src={item?.urlToImage || "https://via.placeholder.com/300"}
                className="img-fluid rounded-end"
                alt={item?.title || "News Image"}
              />
            </div>
          </>
        )}
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

export default Page1;
