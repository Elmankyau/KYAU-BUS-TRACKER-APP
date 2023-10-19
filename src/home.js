import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "./images/jamuna river.jpg";
import img2 from "./images/aspirin.jpg";
import Nav from "./components/nav";

function Home() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            {/* Content for the left column */}
            <div className="card">
              <h1 className="h1">Welcome,</h1>
              <div className="card-body">
                <p>
                  Enayetpur is a town in Sirajganj District, Rajshahi Division,
                  Bangladesh. Enayetpur lies near the banks of the river Jamuna,
                  about 137 kilometres (85 mi) northwest of Dhaka, near the
                  Jamuna Bridge.There is one Universit, 1 college and more than
                  5 high school
                </p>
                <img
                  src={img1}
                  alt=""
                  style={{
                    width: "30rem",
                    height: "30rem",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="col-md-7">
            {/* Content for the right column */}
            <div className="card">
              <h5
                className="card-title text-center p-3"
                style={{
                  height: "2rem",
                }}
              >
                Alert
              </h5>

              <div className="row justify-content-center equal mt-1 ">
                <div
                  className="card bg-dark col-sm-4 d-flex m-2"
                  style={{ width: "18rem" }}
                >
                  
                  <div className="card-body">
                    <h5 className="card-title text-white">Your Medications Today</h5>
                    <p className="card-text text-white">
                      <img src={img2} alt="hkh" style={{
                        height:"8rem" ,
                        width:"10rem"
                      }} />
                      Afternoon
                    </p>
                    <button type="button" className="btn btn-light">
                      description
                    </button>
                    
                  </div>
                </div>
                <div
                  className="card bg-dark col-sm-4 d-flex m-2"
                  style={{ width: "18rem" }}
                >
                  
                  <div className="card-body">
                    <h2 className="card-title text-white text-center">Irragation</h2>
                    <p></p>
                    <p className="card-text text-white">
                      Water pump is running from
                    </p>
                    <h2 className="text-white text-center">8 am</h2>
                    <p className="text-white text-center">Soil Humidity: 380</p>
                    <p className="text-white text-center">Soil is humid</p>
                  </div>
                </div>
               
               
              </div>
              

              <div className="card-body">
                {/* Add your content for the right column here */}
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </>
  );
}

export default Home;
