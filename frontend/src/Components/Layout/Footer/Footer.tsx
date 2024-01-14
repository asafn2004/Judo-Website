import { useState } from "react";
import "./Footer.css";
// import facebook from "./images/facebook.png";
// import instagram from "./images/instagram.png";
// import tiktok from "./images/tik-tok.png";
import axios from "axios";

function Footer(): JSX.Element {
  // ========================================================================
  const [name, setName] = useState("");
  const [pNumber, setPNumber] = useState("");
  const [reason, setReason] = useState("");
  const [email, setEmail] = useState("");

  const imgURL = "http://3.70.229.210/images/";
  // const imgURL = "http://localhost:5000/images/";
  // const videoURL = "http://localhost:5000/video/";

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // Send form data to asafn2004@gmail.com
    try {
      const response = await axios.post("http://localhost:5000/api/sendEmail", {
        name,
        pNumber,
        email,
        reason
      });

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }

    // reset inputs 
    setName('');
    setPNumber(''); 
    setEmail('');
    setReason('');
  };

 
  return (
    <div className="Footer">
      <div className="sb footer section_padding">
        <div className="sb_footer-links mt-1">
          <div className="sb_footer-links_div">
            <h4>עקבו אחרינו</h4>
            <div className="socialMedia">
              <a href="https://www.facebook.com/judocenters1/" target="_blank" rel="noopener noreferrer" >
                <img src={imgURL + "facebook.png"} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/judo.centers/" target="_blank" rel="noopener noreferrer" >
                <img src={imgURL + "instagram.png"} alt="Instagram" />
              </a>
              <a href="https://www.tiktok.com/@judo.centers/" target="_blank" rel="noopener noreferrer" >
                <img src={imgURL + "tik-tok.png"} alt="TikTok" />
              </a>
            </div>
          </div>
          <div className="sb_footer-links_div snifim">
            <h4>צרו איתנו קשר</h4>

            <p style={{ fontSize: "26px" }}>
              <svg
                width="30"
                height="30"
                fill="#c13327"
                stroke="currentColor"
                strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                transform="matrix(-1 0 0 1 10 0)"
              >
                <path d="M3.586 3.586A2 2 0 0 0 3 5v1c0 8.284 6.716 15 15 15h1a2 2 0 0 0 2-2v-3.279a1 1 0 0 0-.684-.949l-4.493-1.498a1 1 0 0 0-1.21.502l-1.13 2.257a11.042 11.042 0 0 1-5.516-5.516l2.257-1.13a1 1 0 0 0 .502-1.21L9.228 3.684A1 1 0 0 0 8.28 3H5a2 2 0 0 0-1.414.586Z"></path>
              </svg>
              054-550-2237
            </p>

            <a href="mailto:asafn2004@gmail.com">
              <p style={{ fontSize: "18px" }}>
                <svg
                  width="30"
                  height="30"
                  fill="#c13327"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="matrix(-1 0 0 1 10 0)"
                >
                  <path d="M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2Z"></path>
                  <path d="m3 8 7.89 5.26a2 2 0 0 0 2.22 0L21 8"></path>
                </svg>
                asafn2004@gmail.com
              </p>
            </a>
            <a href="https://wa.link/38zvf9" target="_blank" rel="noopener noreferrer" >
              <p style={{ fontSize: "20px" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  fill="#c13327"
                  viewBox="0 0 50 50"
                  transform="matrix(1 0 0 1 10 0)"
                >
                  <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"></path>
                </svg>
                דברו איתנו בווטסאפ
              </p>
            </a>
          </div>
          <div className="sb_footer-links_div snifim">
            <h4>סניפים</h4>
            <a href="https://maps.app.goo.gl/jk2zUYxg5hamUdLW6" target="_blank" rel="noopener noreferrer" >
              <p style={{ fontSize: "20px" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#c13327"
                >
                  <path d="M12 2a7.008 7.008 0 0 0-7 7c0 5.353 6.036 11.45 6.293 11.707l.707.707.707-.707C12.964 20.45 19 14.353 19 9a7.008 7.008 0 0 0-7-7zm0 16.533C10.471 16.825 7 12.553 7 9a5 5 0 0 1 10 0c0 3.546-3.473 7.823-5 9.533z" />
                  <path d="M12 6a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" />
                </svg>
                ביה"ס ממלכתי כרכור
              </p>
            </a>
            <a href="https://maps.app.goo.gl/YdPeEbWXvg3DoWwj9" target="_blank" rel="noopener noreferrer" >
              <p style={{ fontSize: "20px" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#c13327"
                >
                  <path d="M12 2a7.008 7.008 0 0 0-7 7c0 5.353 6.036 11.45 6.293 11.707l.707.707.707-.707C12.964 20.45 19 14.353 19 9a7.008 7.008 0 0 0-7-7zm0 16.533C10.471 16.825 7 12.553 7 9a5 5 0 0 1 10 0c0 3.546-3.473 7.823-5 9.533z" />
                  <path d="M12 6a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" />
                </svg>
                מתנ"ס רמת ישי
              </p>
            </a>
            <a href="https://maps.app.goo.gl/JmHYdsiRMV6Z8eT86" target="_blank" rel="noopener noreferrer" >
              <p style={{ fontSize: "20px" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#c13327"
                >
                  <path d="M12 2a7.008 7.008 0 0 0-7 7c0 5.353 6.036 11.45 6.293 11.707l.707.707.707-.707C12.964 20.45 19 14.353 19 9a7.008 7.008 0 0 0-7-7zm0 16.533C10.471 16.825 7 12.553 7 9a5 5 0 0 1 10 0c0 3.546-3.473 7.823-5 9.533z" />
                  <path d="M12 6a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" />
                </svg>
                מתנ"ס יקנעם עלית
              </p>
            </a>
            <a href="https://maps.app.goo.gl/HaGasVoHdHo6YSHD8" target="_blank" rel="noopener noreferrer" >
              <p style={{ fontSize: "20px" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#c13327"
                >
                  <path d="M12 2a7.008 7.008 0 0 0-7 7c0 5.353 6.036 11.45 6.293 11.707l.707.707.707-.707C12.964 20.45 19 14.353 19 9a7.008 7.008 0 0 0-7-7zm0 16.533C10.471 16.825 7 12.553 7 9a5 5 0 0 1 10 0c0 3.546-3.473 7.823-5 9.533z" />
                  <path d="M12 6a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" />
                </svg>
                יישוב שקד
              </p>
            </a>
            <a href="https://maps.app.goo.gl/9kLUaNoi8mfkV3fH6" target="_blank" rel="noopener noreferrer" >
              <p style={{ fontSize: "20px" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#c13327"
                >
                  <path d="M12 2a7.008 7.008 0 0 0-7 7c0 5.353 6.036 11.45 6.293 11.707l.707.707.707-.707C12.964 20.45 19 14.353 19 9a7.008 7.008 0 0 0-7-7zm0 16.533C10.471 16.825 7 12.553 7 9a5 5 0 0 1 10 0c0 3.546-3.473 7.823-5 9.533z" />
                  <path d="M12 6a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" />
                </svg>
                קיבוץ גן שמואל
              </p>
            </a>
          </div>
          <div className="sb_footer-links_div formStyle">
            <h4>לתיאום אימון ניסיון</h4>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="שם מלא"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="טלפון"
                value={pNumber}
                onChange={(e) => setPNumber(e.target.value)}
              />

              <input
                type="email"
                placeholder="אימייל"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <textarea
                rows={3}
                placeholder="הודעה"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              />

              <button type="submit">שליחה</button>
            </form>
          </div>
        </div>

        {/* <hr className="hr" /> */}

        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>
              <svg
                width="25"
                height="25"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m13.392 10.436 1.418-1.418a4 4 0 1 0 .176 5.798l-1.313-1.313h-.209a2 2 0 1 1-.073-3.067Z"></path>
                <path
                  fillRule="evenodd"
                  d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Zm0 2a7 7 0 1 1 0 14 7 7 0 0 1 0-14Z"
                  clipRule="evenodd"
                ></path>
              </svg>{" "}
              כל הזכויות שמורות למרכזים לג'ודו והגנה עצמית
            </p>
            <p>
              Designed and Developed by Asaf Nahmias{" "}
              <svg
                width="25"
                height="25"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m13.392 10.436 1.418-1.418a4 4 0 1 0 .176 5.798l-1.313-1.313h-.209a2 2 0 1 1-.073-3.067Z"></path>
                <path
                  fillRule="evenodd"
                  d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Zm0 2a7 7 0 1 1 0 14 7 7 0 0 1 0-14Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
