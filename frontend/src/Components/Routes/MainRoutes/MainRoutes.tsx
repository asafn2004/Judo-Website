import "./MainRoutes.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../Pages/HomePage/HomePage";
import Page404 from "../../Pages/Page404/Page404";
import Graduates from "../../Pages/Graduates/Graduates";
import KnowUs from "../../Pages/KnowUs/KnowUs";
import Events from "../../Pages/Events/Events";
import Gefen from "../../Pages/Gefen/Gefen";
import Centers from "../../Pages/Centers/Centers";

function MainRoutes(): JSX.Element {
  return (
    <div className="MainRoutes">
      <Routes>
        {/* דף בית בעצם הוא הראשון */}
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        {/* הבוגרים שלנו */}
        <Route path="/graduates" element={<Graduates />} />
        {/* הכירו אותנו */}
        <Route path="/knowUs" element={<KnowUs />} />
        {/* סניפים */}
        <Route path="/centers" element={<Centers />} />
        {/* אירועים */}
        <Route path="/events" element={<Events />} />
        {/* תכנית גפן */}
        <Route path="/gefen" element={<Gefen />} />
        {/* =============================================== */}
        {/* תמיד צריך שיהיה במקרה שמקלידים משהו לא נכון ב path  */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default MainRoutes;
