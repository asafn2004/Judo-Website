import "./Graduates.css";

// image files
// import asaf from "./images/graduates/asafJPEG.jpeg";
// import eshel from "./images/graduates/eshelJPEG.jpeg";
// import shachar from "./images/graduates/shacharJPEG.jpeg";
// import yoel from "./images/graduates/yoelJPEG.jpeg";
// import yuval from "./images/graduates/yuval.png";

function Graduates(): JSX.Element {
  const imgURL = "http://localhost:5000/images/";
  // const videoURL = "http://localhost:5000/video/";

  // array of image sources
  const imageFilenames = [
    "amitBenShimon.jpeg",
    "harelAntar.jpeg",
    "oriSivan.jpeg",
    "michaelMarzin.jpeg",
    "omriZach.jpeg",
    "itayLahmani.jpeg",
    "nikitaKroi.jpeg",
    "almogKami.jpeg",
    "naftali.jpg",
    "amirDayan.jpg",
    "eylon1.jpg",
     // חסר לי - נפתלי וקסלר, אילון אטיאס, מתן מאיוסט, אסף היימן
  ];
 
  const descriptions = [
    "עמית בן שמעון",
    "הראל ענטר",
    "אורי סיון",
    "מיכאל מרזין",
    "עומרי זך",
    "איתי לחמני",
    "ניקיטה קרויז'ילין",
    "אלמוג קמינר",
    "נפתלי וקסלר",
    "אמיר דיין",
    "אילון בר ששת",
    // ... descriptions for other graduates
  ];

  return (
    <div className="Graduates">
      <div className="glitch-wrapper">
        <div className="glitch" data-glitch="הבוגרים שלנו">
          הבוגרים שלנו
        </div>
      </div>

      {/* cards  */}

      <div className="coachCards">
        <div className="row row-cols-1 row-cols-lg-4 g-5  m-0 justify-content-center">
          {imageFilenames.map((filename, index) => (
            <div
              className={`col d-flex justify-content-center align-items-center fade-in-animation`}
              key={index}
              style={{ animationDelay: `${index * 0.4}s` }}
            >
              <div className="card" style={{ width: "18rem" }}>
                <img
                  key={index}
                  src={imgURL + filename}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                  {descriptions[index]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />
      <hr className="hrGraduates" />
    </div>
  );
}

export default Graduates;
