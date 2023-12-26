import "./Graduates.css";

// image files
// import asaf from "./images/graduates/asafJPEG.jpeg";
// import eshel from "./images/graduates/eshelJPEG.jpeg";
// import shachar from "./images/graduates/shacharJPEG.jpeg";
// import yoel from "./images/graduates/yoelJPEG.jpeg";
// import yuval from "./images/graduates/yuval.png";

function Graduates(): JSX.Element {

  const imgURL = "http://18.196.64.252/images/";
  // const videoURL = "http://localhost:5000/video/";

  // array of image sources
  const imageFilenames = ["yoelJPEG.jpeg", "asafJPEG.jpeg", "shacharJPEG.jpeg", "eshelJPEG.jpeg"];

  return (
    <div className="Graduates">
      <div className="glitch-wrapper">
        <div className="glitch" data-glitch="הבוגרים שלנו">
          הבוגרים שלנו
        </div>
      </div>

      {/* cards  */}

      <div className="coachCards">
        <div className="row row-cols-1 row-cols-lg-3 g-5  m-0 justify-content-center">
          {imageFilenames.map((filename, index) => (
            <div className={`col d-flex justify-content-center align-items-center fade-in-animation`}
            key={index}
            style={{ animationDelay: `${index * 0.4}s` }} >
              <div className="card" style={{ width: "18rem" }}>
                <img
                  key={index}
                  src={imgURL + filename}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br /><br /><br />
      <hr className="hrGraduates" />
    </div>
  );
}

export default Graduates;
