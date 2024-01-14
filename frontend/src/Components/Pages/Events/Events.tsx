import "./Events.css";
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Keyboard, Grid, Pagination, Navigation } from 'swiper/modules';

function Events(): JSX.Element {

  const imgURL = "http://3.70.229.210/images/Events/";
  // const imgURL = "http://localhost:5000/images/Events/";

    return (
      <>
        <div className="Events">
          <div className="glitch-wrapper5">
        <div className="glitch5" data-glitch="אירועים">
          אירועים
        </div>
      </div>
      <section className="swiperZ">
      <Swiper
        slidesPerView={1}
        grid={{
          rows: 1,
        }}
        spaceBetween={20}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Grid, Pagination, Navigation]}
        className="mySwiper"
        
        
      >
        <SwiperSlide className="overflow-auto"><img src={imgURL + "comp260124.jpg"} alt="תחרות ג'ודו ראשונה לעונה זו" className="event1" /></SwiperSlide>
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide> */}
      </Swiper>
      </section>
      <br /><br /><br />
      <hr className="hrGraduates" />
        </div>
        </>
    );
}

export default Events;
