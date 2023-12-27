import "./HomePage.css";
import { useRef } from "react";

function HomePage(): JSX.Element {
  const imgURL = "http://35.159.16.221:5000/images/";
  const videoURL = "http://35.159.16.221:5000/video/";

  const contentDivRef = useRef<HTMLElement | null>(null);

  const scrollToContent = () => {
    if (contentDivRef.current) {
      contentDivRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="HomePage">
      <section className="videoDiv">
        <video
          className="video1"
          src={videoURL + "judoTrainingCamp.mp4"}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* <div className="elementor-shape elementor-shape-bottom">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            {" "}
            <path
              className="elementor-shape-fill"
              d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
 c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
 c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
            ></path>{" "}
          </svg>
        </div> */}
        <div className="scroll-down-arrow1" onClick={scrollToContent}>
          <span>
            <svg
              width="46"
              height="46"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m5.25 8.625 6.75 6.75 6.75-6.75"></path>
            </svg>
          </span>
        </div>
      </section>
      <section className="contentDiv " ref={contentDivRef}>
       
        <div className="card1 ">
          <div className="row g-0 justify-content-end ms-0 me-0">
            <div className="col-lg-6">
              <img
                src={imgURL + "avivGan.jpg"}
                className="img-fluid image1"
                alt="Kindergarten Judo"
                // style={{ height: "100%", width: "100%"}}
              />
            </div>
            <div className="col-lg-6">
              <div className="card-body mt-5">
                <h5 className="card-titleZ1">
                  {" "}
                  גילאי הגן
                  <br /> ג'ודו כיפי ומאתגר
                </h5>
                <br />
                <p className="card-miniTitleZ1">
                  השילוב המושלם בין חינוך לפעילות גופנית <br />
                  אימון ייחודי ומהנה לגילאי 3.5 ומעלה
                </p>
                <br />
                <br />
                <p className="card-textZ1">
                  אימוני הג'ודו שלנו מותאמים במיוחד לילדי גן וכוללים משחקי ג'ודו
                  כיפיים ומגוונים
                  <br />
                  .הלוקחים את הילדים לעולם של אתגר והנאה תוך פיתוח יכולות
                  גופניות, קוגניטיביות וחברתיות
                  <br /> בשיעורים נלמד טכניקות יסוד של ג'ודו, נתרגל שיווי משקל
                  וקואורדינציה, נחזק שרירים ונפתח כלים
                  <br /> <br /> .שיסייעו להצלחה של הילדים בגן ובבית ספר בהמשך כמו
                  משמעת, אחריות, ריכוז ובטחון עצמי
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card2 mb-0  ">
          <div className="row g-0 ms-0 me-0">
            <div className="col-lg-6">
              <div className="card-body mt-5">
                <h5 className="card-titleY2">
                  גילאי היסודי <br /> ג'ודו ככלי לפיתוח אישי
                </h5>
                <br />
                <p className="card-miniTitleY2">
                  {" "}
                  למתחילים ומתקדמים, יחס אישי, קבוצות נפרדות לפי גיל ורמה <br />
                  תחרויות ומחנות אימונים בארץ ובחו"ל וימי גיבוש כמדי שנה
                </p>
                <br />
                <br />
                <p className="card-textY2">
                  {" "}
                  .בואו ללמוד ג'ודו בסביבה תומכת ומהנה שתקנה משמעת וערכים להצלחה
                  <br />
                  הג'ודו - אומנות לחימה וספורט אולימפי המפתח את מלוא הפוטנציאל
                  של ילדיכם
                  <br />
                  .במיומנויות גופניות, כוח רצון והתמדה באווירה חמה ומשפחתית
                  <br />
                  .הג'ודו יעניק לילדים כלים חשובים שישרתו אותם כל החיים
                  <br /> <br />
                  .אצלנו, לא רק מלמדים ג'ודו, אלא יוצרים משפחה, חברים חדשים,
                  ומקום של למידה, הנאה והעצמה 
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src={imgURL + "judoschoolEdit.jpeg"}
                className="img-fluid image2"
                alt="Elementary School Judo"
                // style={{ height: "100%", width: "100%" }}
              />
            </div>
          </div>

          {/* MOBILE LAYOUT */}

          <div className="mobile-layout">
          <div className="row g-0 ms-0 me-0">
          <div className="col-lg-6">
              <img
                src={imgURL + "judoschoolEdit.jpeg"}
                className="img-fluid image2"
                alt="Elementary School Judo"
                // style={{ height: "100%", width: "100%" }}
              />
            </div>
            <div className="col-lg-6">
              <div className="card-body mt-5">
                <h5 className="card-titleY2">
                  גילאי היסודי <br /> ג'ודו ככלי לפיתוח אישי
                </h5>
                <br />
                <p className="card-miniTitleY2">
                  {" "}
                  למתחילים ומתקדמים, יחס אישי, קבוצות נפרדות לפי גיל ורמה <br />
                  תחרויות ומחנות אימונים בארץ ובחו"ל וימי גיבוש כמדי שנה
                </p>
                <br />
                <br />
                <p className="card-textY2">
                  {" "}
                  .בואו ללמוד ג'ודו בסביבה תומכת ומהנה שתקנה משמעת וערכים להצלחה
                  <br />
                  הג'ודו - אומנות לחימה וספורט אולימפי המפתח את מלוא הפוטנציאל
                  של ילדיכם
                  <br />
                  .במיומנויות גופניות, כוח רצון והתמדה באווירה חמה ומשפחתית
                  <br />
                  .הג'ודו יעניק לילדים כלים חשובים שישרתו אותם כל החיים
                  <br /> <br />
                  .אצלנו, לא רק מלמדים ג'ודו, אלא יוצרים משפחה, חברים חדשים,
                  ומקום של למידה, הנאה והעצמה 
                </p>
              </div>
            </div>
           
          </div>
          </div>
        </div>
        <div className="card3 mb-0  ">
          <div className="row g-0 justify-content-end ms-0 me-0">
            <div className="col-lg-7">
              <img
                src={imgURL + "adultsEdit.jpeg"}
                className="img-fluid mt-0 image3"
                alt="Youth and adults Judo"
                // style={{ height: "100%", width: "100%", paddingBottom: "16px" }}
              />
            </div>
            <div className="col-lg-5">
              <div className="card-body mt-5 me-4">
                <h5 className="card-titleZ3">
                  נוער ומבוגרים
                  <br /> ג'ודו תחרותי והגנה עצמית
                </h5>
                <br />
                <p className="card-miniTitleZ3">
                  ג'ודו תחרותי אולימפי בקצב גבוהה למתחילים ומתקדמים
                  <br />
                  מעניק תחושת מסוגלות ויכולת התמודדות בכל מצב
                </p>
                <br />
                <br />
                <p className="card-textZ3">
                  .אנו מזמינים אתכם לפתח את תחום הג'ודו המקצועי ובנוסף, יכולות
                   להגנה עצמית
                 
                  ההתאמה המושלמת בין הפיזי לנפשי, מאפשרת לכל מתאמן לפתח את
                  יכולותיו בצורה ייחודית ואישית
                  <br />
                  אנו שמים דגש באימונים אלו על כושר גופני גבוה, לימוד טכניקות
                  ג'ודו ברמה תחרותית בשילוב טכניקות הגנה עצמית
               
                  .מסיטואציות שיכולות להתפתח במציאות היומיומית
                  <br />
                  למועדון ספורטאים ברמה הגבוהה ביותר בארץ, אלופי ישראל בג'ודו
                  בכל הגילאים כולל נוער ובוגרים
                  .בעלי תארים באירופה ובעולם
                </p>
              
             
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
