import "./Navbarz.css";
import { NavLink } from "react-router-dom";

function Navbarz(): JSX.Element {
  const imgURL = "https://judocenters.com/images/";
  // const imgURL = "http://localhost:5000/images/";
  // const videoURL = "http://localhost:5000/video/";


  return (
    <div className="Navbarz">
      <nav className="navbar navbar-expand-lg bg-body-light sticky-top" style={{ direction: "rtl" }}>
        <div className="container-fluid">
          <button
            className="navbar-toggler shadow-none border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarOffcanvasLg"
            aria-controls="navbarOffcanvasLg"
            aria-label="Toggle navigation"
          
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <NavLink to={"/"} className="navbar-brand">
            <div>
              <img
                src={imgURL + "logoNoBackGround.png"}
                alt="Logo"
                className="logoImg img-fluid"
              />
            </div>
          </NavLink>

          <div
           className="overflow-auto offcanvas offcanvas-end  "
             id="navbarOffcanvasLg"
             aria-labelledby="navbarOffcanvasLgLabel"
            // data-bs-backdrop="false"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 justify-content-evenly align-items-center ">
              <br />
            <li className= "nav-item item-back" >
                    <img
                      src={imgURL + "back.png"}
                      alt="belt"
                      className="backArrow"
                      // style={{ margin: 4 }}
                      data-bs-dismiss="offcanvas"
                    />
                </li>
               <br />
              <li className="nav-item">
                <NavLink to="/graduates" className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'} >
                  <p data-bs-dismiss="offcanvas">הבוגרים שלנו</p>
                  <img
                    src={imgURL + "belt.png"}
                    alt="belt"
                    className="imgLinks"
                    style={{ margin: -2 }}
                    data-bs-dismiss="offcanvas"
                  />
                </NavLink>
              </li>
              <br />
              <li className="nav-item">
                <NavLink to="/knowUs" className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'}>
                  <p data-bs-dismiss="offcanvas">הכירו אותנו</p>
                  <img
                    src={imgURL + "judogi-black-white.png"}
                    alt="judogi"
                    className="imgLinks"
                    data-bs-dismiss="offcanvas"
                  />
                </NavLink>
              </li>
              <br />
              <li className="nav-item centers">
                <NavLink to="/centers" className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'} >
                  <p data-bs-dismiss="offcanvas">סניפים</p>
                  <img
                    src={imgURL + "centers.png"}
                    alt="centers"
                    className="imgLinks"
                    style={{ margin: 4 , height:"75px"}}
                    data-bs-dismiss="offcanvas"
                  />
                  <p data-bs-dismiss="offcanvas">והרשמה</p>
                </NavLink>
              </li>
              <br />
              <li className="nav-item">
                <NavLink to="/events" className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'} >
                  <p data-bs-dismiss="offcanvas">אירועים</p>
                  <img
                    src={imgURL + "events.png"}
                    alt="judogi"
                    className="imgLinks"
                    style={{ margin: 3 }}
                    data-bs-dismiss="offcanvas"
                  />
                </NavLink>
              </li>
              <br />
              <li className="nav-item">
                <NavLink to="/gefen" className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'} >
                  <p data-bs-dismiss="offcanvas">תכנית גפ"ן</p>
                  <img
                    src={imgURL + "gefen.png"}
                    alt="judogi"
                    className="imgLinks"
                    style={{ margin: 5 }}
                    data-bs-dismiss="offcanvas"
                  />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbarz;
