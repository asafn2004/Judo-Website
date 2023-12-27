import "./Centers.css";

// import karkur from "./images/karkur1.jpg";
// import yokneamElite from "./images/yokneamElite.jpeg";
// import ramatYishai from "./images/ramatYishai.jpeg";
// import shaked from "./images/shaked.jpeg";
// import nivheret from "./images/nivheret.jpg";
// import amota from "./images/amota2.jpeg";

function Centers(): JSX.Element {

  const imgURL = "http://35.159.16.221:5000/images/";
  // const videoURL = "http://localhost:5000/video/";

  return (
    <div className="Centers">
      <div className="glitch-wrapper2">
        <div className="glitch2" data-glitch="סניפים והרשמה">
          סניפים והרשמה
        </div>
      </div>

      <div className="wrap ">
        <div className="box ">
          <div className="box-top">
            <img
              className="box-image"
              src={imgURL + "karkur1.jpg"}
              alt="Karkur Dojo"
            />
            <div className="title-flex">
              <h3 className="box-title ">ממלכתי כרכור</h3>
              <p className="user-follow-info card-content1">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.25c-3.727 0-6.75 2.878-6.75 6.422 0 4.078 4.5 10.54 6.152 12.773a.739.739 0 0 0 1.196 0c1.652-2.231 6.152-8.692 6.152-12.773 0-3.544-3.023-6.422-6.75-6.422Z"></path>
                  <path d="M12 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"></path>
                </svg>
                 מרכז הג'ודו ברח' המייסדים 73, ביה"ס ממלכתי כרכור   
              </p>
            </div>
            <p className="description">
              Whipped steamed roast cream beans macchiato skinny grinder café.
              Iced grinder go mocha steamed grounds cultivar panna aroma.
            </p>
          </div>
          <a target="_blank" rel="noopener noreferrer" href="https://tickchak.co.il/50976" className="button aButton">
            לאימון ניסיון | הרשמה
          </a>
        </div>
        <div className="box">
          <div className="box-top">
            <img
              className="box-image1"
              src={imgURL + "yokneamElite.jpeg"}
              alt="Yokneam Elite Dojo"
            />
            <div className="title-flex">
              <h3 className="box-title ">מתנ"ס יקנעם עלית</h3>
              <p className="user-follow-info card-content1">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.25c-3.727 0-6.75 2.878-6.75 6.422 0 4.078 4.5 10.54 6.152 12.773a.739.739 0 0 0 1.196 0c1.652-2.231 6.152-8.692 6.152-12.773 0-3.544-3.023-6.422-6.75-6.422Z"></path>
                  <path d="M12 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"></path>
                </svg>
            מרכז הג'ודו באולם דהרי, רח' אלונים 9, יקנעם עלית
              </p>
            </div>
            {/* <br /> */}
            <p className="description">
              Whipped steamed roast cream beans macchiato skinny grinder café.
              Iced grinder go mocha steamed grounds cultivar panna aroma.
            </p>
          </div>
          <a target="_blank" rel="noopener noreferrer" href="https://greenbook.co.il/bs2/8710/26470/" className="button aButton">
          לאימון ניסיון | הרשמה
          </a>
        </div>
        <div className="box">
          <div className="box-top">
            <img
              className="box-image5"
              src={imgURL + "amota2.jpeg"}
              alt="Amota"
              // style={{width: '400px', height: '360px'}} 
            />
            <div className="title-flex">
              <h3 className="box-title ">הצטרפות לעמותה</h3>
              <p className="user-follow-info card-content1">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.25c-3.727 0-6.75 2.878-6.75 6.422 0 4.078 4.5 10.54 6.152 12.773a.739.739 0 0 0 1.196 0c1.652-2.231 6.152-8.692 6.152-12.773 0-3.544-3.023-6.422-6.75-6.422Z"></path>
                  <path d="M12 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"></path>
                </svg>
                הפועל העמותה לקידום איקיגיצו <br />
                המרכזים לג'ודו והגנה עצמית
              </p>
            </div>
            {/* <br /> */}
            <p className="description">
              Whipped steamed roast cream beans macchiato skinny grinder café.
              Iced grinder go mocha steamed grounds cultivar panna aroma.
            </p>
          </div>
          <a target="_blank" rel="noopener noreferrer" href="https://tickchak.co.il/50992" className="button aButton">
          להצטרפות והרשמה
          </a>
        </div>
        <div className="box">
          <div className="box-top">
            <img
              className="box-image3"
              src={imgURL + "nivheret.jpg"}
              alt="Nivheret"
            />
            <div className="title-flex">
              <h3 className="box-title ">נבחרת בימי שישי</h3>
              <p className="user-follow-info card-content1">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.25c-3.727 0-6.75 2.878-6.75 6.422 0 4.078 4.5 10.54 6.152 12.773a.739.739 0 0 0 1.196 0c1.652-2.231 6.152-8.692 6.152-12.773 0-3.544-3.023-6.422-6.75-6.422Z"></path>
                  <path d="M12 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"></path>
                </svg>
                אולם דהרי, יקנעם עלית | <br />  ביה"ס ממלכתי כרכור
              </p>
            </div>
            <p className="description">
              Whipped steamed roast cream beans macchiato skinny grinder café.
              Iced grinder go mocha steamed grounds cultivar panna aroma.
            </p>
          </div>
          <a target="_blank" rel="noopener noreferrer" href="https://tickchak.co.il/50983" className="button aButton">
          לאימון ניסיון | הרשמה
          </a>
        </div>
        <div className="box">
          <div className="box-top">
            <img
              className="box-image2"
              src={imgURL + "ramatYishai.jpeg"}
              alt="Ramat-Yishay Dojo"
            />
            <div className="title-flex">
              <h3 className="box-title ">מתנ"ס רמת ישי</h3>
              <p className="user-follow-info card-content1">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.25c-3.727 0-6.75 2.878-6.75 6.422 0 4.078 4.5 10.54 6.152 12.773a.739.739 0 0 0 1.196 0c1.652-2.231 6.152-8.692 6.152-12.773 0-3.544-3.023-6.422-6.75-6.422Z"></path>
                  <path d="M12 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"></path>
                </svg>
              מרכז הג'ודו באולם הספורט <br /> ברחוב הארז, 
          רמת ישי
              </p>
            </div>
            {/* <br /> */}
            <p className="description">
              Whipped steamed roast cream beans macchiato skinny grinder café.
              Iced grinder go mocha steamed grounds cultivar panna aroma.
            </p>
          </div>
          <a target="_blank" rel="noopener noreferrer" href="https://www.matnasry.co.il/activities/?group=&branch=&category=&ageGroup=&free_text=%D7%92%27%D7%95%D7%93%D7%95&pageId=83" className="button aButton">
          לאימון ניסיון | הרשמה
          </a>
        </div>
        <div className="box">
          <div className="box-top">
            <img
              className="box-image4"
              src={imgURL + "shaked.jpeg"}
              alt="Shaked"
            />
            <div className="title-flex">
              <h3 className="box-title ">יישוב שקד</h3>
              <p className="user-follow-info card-content1">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.25c-3.727 0-6.75 2.878-6.75 6.422 0 4.078 4.5 10.54 6.152 12.773a.739.739 0 0 0 1.196 0c1.652-2.231 6.152-8.692 6.152-12.773 0-3.544-3.023-6.422-6.75-6.422Z"></path>
                  <path d="M12 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"></path>
                </svg>
                מרכז הג'ודו במועדון <br /> שביישוב שקד
              </p>
            </div>
            {/* <br /> */}
            <p className="description">
              Whipped steamed roast cream beans macchiato skinny grinder café.
              Iced grinder go mocha steamed grounds cultivar panna aroma.
            </p>
          </div>
          <a target="_blank" rel="noopener noreferrer" href="https://tickchak.co.il/50994" className="button aButton">
          לאימון ניסיון | הרשמה
          </a>
        </div>
      </div>
      <br />
      <hr className="hrGraduates" />
    </div>
  );
}

export default Centers;


