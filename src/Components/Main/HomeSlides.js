import Slider from "react-slick";
import Garden from "../../Assets/Images/TempImages/Services/gardening-service.jpg";
import Web from "../../Assets/Images/TempImages/Services/web-service.jpg";
import Carousel, { autoplayPlugin, Dots, slidesToScrollPlugin, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import { useEffect, useState } from "react";

const HomeSlides = ({

}) => {

  const [carouselItems, setCarouselItems] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(1);

  const slides = [
            <div className="featured-service" style={{backgroundImage: `url("${Garden}")`}}>
              <div className="slide-thumb">
                <img src={Garden} />
              </div>
              <div className="featured-info">
              <div className="service-title">
                <p><span className="keyword">WANTED</span>: Gardener for some light work!</p>
              </div>

              <div className="service-info">
                <p>Et ea ea labore ut erat accusam est ut ipsum lorem. Sed sit invidunt dolores labore at lorem accusam sanctus. Lorem amet labore amet ipsum amet nonumy invidunt duo, et kasd sit et sed dolor.</p>
                <button>See More</button>
              </div>
              </div>
            </div>,
            <div className="featured-service" style={{backgroundImage: `url("${Web}")`}}>
              <div className="slide-thumb">
                <img src={Web} />
              </div>
              <div className="featured-info">
              <div className="service-title">
                <p><span className="keyword">SERVICES</span>: Freelance Website designer!</p>
              </div>

              <div className="service-info">
                <p>Da transitorie in d'angoscia fa cosí porgiamo priegano della benignita di. Le di dio in uomini alla che, degli vita.</p>
                <button>See More</button>
              </div>
              </div>
            </div>,
            <div className="featured-service">
              <div className="slide-thumb">
                <img src={Web} />
              </div>
              <div className="featured-info">
              <div className="service-title">
                <p><span className="keyword">SERVICES</span>: Freelance Website designer!</p>
              </div>

              <div className="service-info">
                <p>Da transitorie in d'angoscia fa cosí porgiamo priegano della benignita di. Le di dio in uomini alla che, degli vita.</p>
                <button>See More</button>
              </div>
              </div>
            </div>
  ];

    return (
      <div id="home-sliders" className="carousel slide" data-bs-ride="carousel" data-bs-touch="true">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#home-sliders" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#home-sliders" data-bs-slide-to="1" aria-label="Slide 2"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="5000">
        <div className="featured-service">
              <div className="slide-thumb">
                <img src={Garden} />
              </div>
              <div className="featured-info">
              <div className="service-title">
                <p><span className="keyword">WANTED</span>: Gardener for some light work!</p>
              </div>

              <div className="service-info">
                <p>Et ea ea labore ut erat accusam est ut ipsum lorem. Sed sit invidunt dolores labore at lorem accusam sanctus. Lorem amet labore amet ipsum amet nonumy invidunt duo, et kasd sit et sed dolor.</p>
                <button>See More</button>
              </div>
              </div>
            </div>
        </div>

        <div className="carousel-item" data-bs-interval="5000">
        <div className="featured-service">
              <div className="slide-thumb">
                <img src={Web} />
              </div>
              <div className="featured-info">
              <div className="service-title">
                <p><span className="keyword">SERVICES</span>: Freelance Website designer!</p>
              </div>

              <div className="service-info">
                <p>Da transitorie in d'angoscia fa cosí porgiamo priegano della benignita di. Le di dio in uomini alla che, degli vita.</p>
                <button>See More</button>
              </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    )
}

export default HomeSlides;