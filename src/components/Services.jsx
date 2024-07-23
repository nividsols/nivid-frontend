import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow slick-next"
      style={{ display: "block", background: "black", borderRadius: "50%" }}
      onClick={onClick}
    >
      <FaArrowRight style={{ color: "white", padding: "10px" }} />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow slick-prev"
      style={{ display: "block", background: "black", borderRadius: "50%" }}
      onClick={onClick}
    >
      <FaArrowLeft style={{ color: "white", padding: "10px" }} />
    </div>
  );
};

const Services = () => {
  const [serviceData, setServiceData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8000/apis/services/")
      .then((response) => {
        setServiceData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching service data:", error);
      });
  }, []);

  const handleCardClick = (service) => {
    navigate(`service-detail/${service.name}`, { state: { service } });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section
      className="bg-[#F6F6F6] px-6 md:px-12 lg:px-24 xl:px-36 py-12"
      id="services"
    >
      <div className="flex flex-col lg:flex-row justify-between items-center py-20">
        <h1 className="text-5xl w-full lg:w-80 leading-relaxed font-semibold mb-8 lg:mb-0">
          Our Excellent Services
        </h1>
        <p className="text-[#C4C4C4] text-lg font-medium text-center lg:text-left">
          We provide end-to-end Conventional/Digital solutions & services for
          manufacturing facilities
        </p>
      </div>
      <Slider {...settings}>
        {serviceData.map((service) => (
          <div key={service.id} className="grid-cols-3 px-4">
            <ServiceCard
              img={service.image_url}
              title={service.name}
              onClick={() => handleCardClick(service)}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Services;
