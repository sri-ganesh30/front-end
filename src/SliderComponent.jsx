import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = ({ images, autoplay = true, speed = 2000, slidesToShow = 3 }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: speed,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: autoplay,
    };

    return (
        <Slider {...settings}>
            {images.map((img, index) => (
                <div key={index}>
                    <img src={img} alt={`Slide ${index}`} style={{ width: "100%", height: "200px" }} />
                </div>
            ))}
        </Slider>
    );
};

export default SliderComponent;
