import { Container } from "react-bootstrap";
import ImageCarausel from "./components/ImageCarausel";
import Nav from "./components/nav";
import Cardimg1 from "./images/enayetpur badh.jpg";
import Cardimg2 from "./images/jamuna river.jpg"     
import  Cardimg3 from "./images/harding.jpg"  
import  Cardimg4 from "./images/shahjadpur bridge.jpg"  
 
import { Link } from "react-router-dom";
export default function Tourism() {
  return (
    <>
      <Nav />

      <Container>
        <ImageCarausel />
        <div className="row justify-content-center equal mt-4 ">
          <div
           className="card  col-sm-4 d-flex"
            style={{ width: "25rem" }}
          >
            <img className="card-img-top" src={Cardimg1} alt="Card cap" />
            <div className="card-body">
              <h5 className="card-title">Enayetpur Spare Badh</h5>
              <p className="card-text">
                Enayetpur spare badh is located at Enayetpur. Some quick example
                text to build on the card title and make up the bulk of the
                card's conten <Link to="#">See More</Link>
              </p>
              <button type="button" class="btn btn-primary">
                Contact guide
              </button>
              {/* <Link  className="btn btn-primary">
              Go somewhere
            </Link> */}
            </div>
          </div>
          <div
            className="card col-sm-4 d-flex hover"
            style={{ width: "25rem" }}
          >
            <img className="card-img-top" src={Cardimg2} alt="Card cap" style={{height:'18rem'}}/>
            <div className="card-body">
              <h5 className="card-title">Jamuna River</h5>
              <p className="card-text">
                Enayetpur spare badh is located at Enayetpur. Some quick example
                text to build on the card title and make up the bulk of the
                card's conten <Link to="#">See More</Link>
              </p>
              <button type="button" class="btn btn-primary">
                Contact guide
              </button>
              {/* <Link  className="btn btn-primary">
              Go somewhere
            </Link> */}
            </div>
          </div>
          <div
            className="card col-sm-4 d-flex hover"
            style={{ width: "25rem" }}
          >
            <img className="card-img-top" src={Cardimg3} alt="Card cap" style={{height:'18rem'}}/>
            <div className="card-body">
              <h5 className="card-title">Harding bridge</h5>
              <p className="card-text">
                Enayetpur spare badh is located at Enayetpur. Some quick example
                text to build on the card title and make up the bulk of the
                card's conten <Link to="#">See More</Link>
              </p>
              <button type="button" class="btn btn-primary">
                Contact guide
              </button>
              {/* <Link  className="btn btn-primary">
              Go somewhere
            </Link> */}
            </div>
          </div>
          <div
            className="card col-sm-4 d-flex hover"
            style={{ width: "25rem" }}
          >
            <img className="card-img-top" src={Cardimg4} alt="Card cap" style={{height:'18rem'}}/>
            <div className="card-body">
              <h5 className="card-title">Enayetpur Spare Badh</h5>
              <p className="card-text">
                Enayetpur spare badh is located at Enayetpur. Some quick example
                text to build on the card title and make up the bulk of the
                card's conten <Link to="#">See More</Link>
              </p>
              <button type="button" class="btn btn-primary">
                Contact guide
              </button>
              {/* <Link  className="btn btn-primary">
              Go somewhere
            </Link> */}
            </div>
          </div>
          <div
            className="card col-sm-4 d-flex hover"
            style={{ width: "25rem" }}
          >
            <img className="card-img-top" src={Cardimg1} alt="Card cap" style={{height:'18rem'}}/>
            <div className="card-body">
              <h5 className="card-title">Enayetpur Spare Badh</h5>
              <p className="card-text">
                Enayetpur spare badh is located at Enayetpur. Some quick example
                text to build on the card title and make up the bulk of the
                card's conten <Link to="#">See More</Link>
              </p>
              <button type="button" class="btn btn-primary">
                Contact guide
              </button>
              {/* <Link  className="btn btn-primary">
              Go somewhere
            </Link> */}
            </div>
          </div>
          <div
            className="card col-sm-4 d-flex hover"
            style={{ width: "25rem" }}
          >
            <img className="card-img-top" src={Cardimg1} alt="Card cap" style={{height:'18rem'}}/>
            <div className="card-body">
              <h5 className="card-title">Enayetpur Spare Badh</h5>
              <p className="card-text">
                Enayetpur spare badh is located at Enayetpur. Some quick example
                text to build on the card title and make up the bulk of the
                card's conten <Link to="#">See More</Link>
              </p>
              <button type="button" class="btn btn-primary">
                Contact guide
              </button>
              {/* <Link  className="btn btn-primary">
              Go somewhere
            </Link> */}
            </div>
          </div>
          
         
        </div>
      </Container>
    </>
  );
}
