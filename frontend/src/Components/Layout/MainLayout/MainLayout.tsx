import MainRoutes from "../../Routes/MainRoutes/MainRoutes";
import Footer from "../Footer/Footer";
import Navbarz from "../Navbarz/Navbarz";
import "./MainLayout.css";

function MainLayout(): JSX.Element {
  
  const imgURL = "http://35.159.16.221/images/";
  // const videoURL = "http://localhost:5000/video/";

  return (
    <div className="MainLayout">
      <div className="whatsappSticky">
        <a
          href="https://wa.link/38zvf9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={imgURL + "whatsapp.png"} alt="whatsapp icon" />
        </a>
      </div>
      <header>
        <Navbarz />
      </header>
      <main>
        <MainRoutes />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MainLayout;
