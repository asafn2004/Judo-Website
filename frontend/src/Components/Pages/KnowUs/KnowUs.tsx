import "./KnowUs.css";
import { useEffect, useRef, useState } from "react";

// import yoel from "./images/yoelJPEG.jpeg";
// import asaf from "./images/asafJPEG.jpeg";
// import shachar from "./images/shacharJPEG.jpeg";
// import lital from "./images/lital.jpeg";
// import eshel from "./images/eshelJPEG.jpeg";

function KnowUs(): JSX.Element {

  // const imgURL = "http://localhost:5000/images/";
  // const videoURL = "http://localhost:5000/video/";
  const imgURL = "https://judocenters.com/images/";
  const videoURL = "https://judocenters.com/video/";

  const tzevetRef = useRef<HTMLDivElement | null>(null);
  const [muted,setMuted] = useState(true);

  const handleMute = () => {
    setMuted(!muted);
  }

  const scrollToTzevet = () => {
    if (tzevetRef.current) {
      tzevetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const videoRef = useRef<HTMLVideoElement>(null);
 
    

   useEffect(() => {
    // Declare 'currentVideoRef' here
    const currentVideoRef = videoRef.current;
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && currentVideoRef) {
          currentVideoRef.play();
        } else if (currentVideoRef) {
          currentVideoRef.pause();
        }
      });
    });
  
    if (currentVideoRef) {
      observer.observe(currentVideoRef);
    }
  
    return () => {
      if (currentVideoRef) {
        observer.unobserve(currentVideoRef);
      }
    };
  }, []);


  const MuteIcon = () => {
    return (
    <svg width="36" height="36" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewBox="0 3 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M19.5 20.25 3 3.75"></path>
  <path fill="currentColor" stroke="none" d="M10.5 6.418v1.585c0 .05.02.097.054.132L11.68 9.26a.187.187 0 0 0 .32-.132V5.652a1.15 1.15 0 0 0-.593-1.018 1.12 1.12 0 0 0-1.229.11L8.68 5.969a.188.188 0 0 0-.014.278l.8.8a.187.187 0 0 0 .251.012l.782-.64Z"></path>
  <path fill="currentColor" stroke="none" d="m10.5 17.582-3.66-2.996a1.5 1.5 0 0 0-.95-.336H3v-4.5h2.378a.187.187 0 0 0 .132-.32L4.385 8.305a.188.188 0 0 0-.132-.055H2.625A1.125 1.125 0 0 0 1.5 9.375v5.25a1.125 1.125 0 0 0 1.125 1.125h3.27l4.283 3.506.03.024a1.122 1.122 0 0 0 1.212.08 1.149 1.149 0 0 0 .58-1.01v-2.353c0-.05-.02-.097-.055-.132L10.82 14.74a.187.187 0 0 0-.32.133v2.709Z"></path>
  <path fill="currentColor" stroke="none" d="M16.5 12.004c0-1.152-.273-2.245-.832-3.341a.75.75 0 0 0-1.336.681c.45.881.668 1.751.668 2.66 0 .125-.005.252-.015.38a.376.376 0 0 0 .109.293l.921.923a.188.188 0 0 0 .317-.094 6.89 6.89 0 0 0 .168-1.502Z"></path>
  <path fill="currentColor" stroke="none" d="M19.5 12c0-2.4-.612-3.933-1.601-5.628a.75.75 0 0 0-1.296.755C17.49 8.645 18.001 9.93 18.001 12c0 1.117-.154 2.01-.44 2.843a.375.375 0 0 0 .09.387l.786.786a.188.188 0 0 0 .305-.06c.482-1.149.759-2.366.759-3.956Z"></path>
  <path fill="currentColor" stroke="none" d="M22.5 12c0-3.48-.947-5.676-2.369-7.903a.75.75 0 1 0-1.265.807c1.28 2.005 2.133 3.98 2.133 7.097 0 2.224-.417 3.849-1.106 5.296a.187.187 0 0 0 .036.214l.836.836a.187.187 0 0 0 .3-.047c1.007-1.977 1.434-3.909 1.434-6.3Z"></path>
</svg>
    )
  }

  const UnMuteIcon = () => {
    return (
    <svg width="36" height="36" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 3 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.906 9H2.625a.375.375 0 0 0-.375.374v5.25a.375.375 0 0 0 .375.375H5.89a.746.746 0 0 1 .475.166l4.288 3.51a.374.374 0 0 0 .597-.3V5.624a.374.374 0 0 0-.597-.302l-4.288 3.51A.703.703 0 0 1 5.906 9Z"></path>
  <path d="M15 15c.457-.908.75-1.914.75-3 0-1.1-.281-2.082-.75-3"></path>
  <path d="M17.25 17.25c.913-1.59 1.5-3.003 1.5-5.25s-.563-3.644-1.5-5.25"></path>
  <path d="M19.5 19.5c1.406-2.156 2.25-4.286 2.25-7.5 0-3.214-.844-5.297-2.25-7.5"></path>
</svg>
    )
  }



  return (
    <div className="KnowUs">
      <div className="glitch-wrapper1">
        <div className="glitch1" data-glitch="הכירו אותנו">
          הכירו אותנו
        </div>
      </div>
     

      <section className="tzevetDiv" >
        <div className="parentDiv">
      <div className="container1">
   <div className="cta1">
      <img className="img2" src={imgURL + "yoelJPEG.jpeg"} alt="Yoel" style={{left:"-40px", top:"-35px"}}/>
      <div className="text1">
         <h2 className="header1">יואל נחמיאס</h2>
         <p className="content1">יו"ר המרכזים לג'ודו והגנה עצמית, שופט בכיר באיגוד הג'ודו הישראלי ובעל תעודות הסמכה רבות כולל מאמן ג'ודו בכיר ממכון ויגנייט, מאמן לוחמים ועוד...

יואל גידל דורות של ספורטאים, מאמנים ושופטים. מומחה באימון אוכלוסיות בעלות צרכים מיוחדים, ספיישל אולימפיקס, נכים ונוער בסיכון.

יואל ממקימי ענף הג'ודו במדינת ישראל</p>
      </div>
   </div>
</div>
<div className="container1">
   <div className="cta1">
      <img className="img2" src={imgURL + "asafJPEG.jpeg"} alt="Asaf" style={{left:"-35px", top:"-75px"}}/>
      <div className="text1">
         <h2 className="header1">אסף נחמיאס</h2>
         <p className="content1">מנהל בפועל ומאמן ראשי במרכזים לג'ודו והגנה עצמית, אסף בעל תעודות הסמכה רבות כולל מאמן ג'ודו ומנהל מערכות ספורט מטעם וינגייט ובעל תואר ראשון במנהל עסקים מטעם רופין.

אסף מתמחה באימון ילדים ובאימון תחרותי מקצועי לכל הגילאים.

 גידל ואימן ספורטאים וספורטאיות אשר הגיעו להצלחה גדולה בזירת התחרויות הישראלית והבינלאומית בג'ודו</p>
      </div>
   </div>
</div>
<div className="scroll-down-arrow" onClick={scrollToTzevet}>
        <span>
          <svg
            width="46"
            height="46"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 8 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m5.25 8.625 6.75 6.75 6.75-6.75"></path>
          </svg>
        </span>
      </div>
<div className="container1" ref={tzevetRef}>
   <div className="cta">
      <img className="img1" src={imgURL + "lital.jpeg"} alt="Lital" style={{left:"-40px", top:"-15px"}}/>
      <div className="text">
         <h2 className="header2">ליטל אטיאס</h2>
         <p className="content1">תעודת מדריך ג'ודו מוינגייט, סטודנטית שנה ג לפיזיותרפיה, שירות קרבי כלוחמת ומפקדת בגדוד אריות הירדן, מתאמנת מגיל 4 , אלופת ישראל בג'ודו בגילאי הילדים, הקדטים והג'וניור כמה פעמים ברציפות, חברת נבחרת ישראל נשים לשעבר, מאמנת בעיקר בפנימיות של נוער בסיכון</p>
      </div>
   </div>
</div>
<div className="container1">
   <div className="cta">
      <img className="img1" src={imgURL + "shacharJPEG.jpeg"} alt="Shachar" style={{left:"-40px", top:"-50px"}}/>
      <div className="text">
         <h2 className="header2">שחר שגיא</h2>
         <p className="content1">מאמנת מוסמכת ע״י מכון וינגייט 
מעסה רפואית וספורטאים במכללת כרכור ובבית ספר למקצועות הטיפול בתא . 
המעסה של נבחרת ישראל נשים- סגל אולימפי בג׳ודו . 
התחלתי להתאמן בגיל 4 והפסקתי להתחרות בגיל 21 . 
אלופת ישראל מ-2008-2014 מגילאי הילדות ועד הבוגרות 
<br />
חגורה שחורה </p>
      </div>
   </div>
</div>
<div className="container1">
   <div className="cta">
      <img className="img1" src={imgURL + "eshelJPEG.jpeg"} alt="Eshel" style={{left:"-15px", top:"-60px"}}/>
      <div className="text">
         <h2 className="header2">אשל אלישב</h2>
         <p className="content1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit accusamus temporibus voluptates exercitationem, ipsa officiis a animi esse explicabo repudiandae in, blanditiis cum quam magni? Voluptates illum earum praesentium veniam.</p>
      </div>
   </div>
</div>
<div className="container1">
   <div className="cta">
      <img className="img1" src={imgURL + "yuvalAharon1.jpeg"} alt="Yuval" style={{left:"-15px"}}/>
      <div className="text">
         <h2 className="header2">יובל אהרון</h2>
         <p className="content1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit accusamus temporibus voluptates exercitationem, ipsa officiis a animi esse explicabo repudiandae in, blanditiis cum quam magni? Voluptates illum earum praesentium veniam.</p>
      </div>
   </div>
</div>
</div>
      </section>
      <br /><br /><br /><br />
      <div className="video-container">
      <video
        ref={videoRef}
        className="video2"
        src={videoURL + "tadmit.mp4"}
        loop
        playsInline
        muted={muted}
        controls={false}
      />
  <button onClick={handleMute} className="muteButton">
{muted ? (<MuteIcon />) : (<UnMuteIcon />)} 
</button>
</div>
     
      <br /><br /><br />
      <hr className="hrGraduates" />
    </div>
  );
}

export default KnowUs;
