import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props) => {
  const {onClick } = props;
  return (
    <div
      className="absolute right-4 top-28 md:top-40 bg-[#fffffff9] rounded-full shadow-xl cursor-pointer z-10"
      onClick={onClick}
      
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8 text-[#0775B4]"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
       className="absolute left-4  top-28 md:top-40 bg-[#fffffff9] rounded-full shadow-xl cursor-pointer z-10"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8 text-[#0775B4]"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </div>
  );
};

const CaseStudyDetails = () => {
  const location = useLocation();
  const { id } = useParams();
  const [segments, setSegments] = useState([]);
  const [loading, setLoading] = useState(true);
  const { name } = location.state;

  useEffect(() => {
    const fetchCaseStudyDetails = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/apis/case-studies/segments/${id}`);
        setSegments(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching case study details:", error);
        setLoading(false);
      }
    };

    fetchCaseStudyDetails();
  }, [id]);

  if (loading) {
    return <div>Loading....</div>;
  }

  if (!segments.length) {
    return <div>Error loading case study details.</div>;
  }

  window.scrollTo(0, 0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="bg-white px-6 md:px-12 lg:px-24 2xl:px-[20%] py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold mb-6 text-gray-800">{name}</h1>
        <Slider {...settings} className="mb-12 mt-2">
          {segments.map((segment) => (
            <div key={segment.id}>
              <img src={segment.image_url} alt={segment.title} className="w-full h-[15rem] md:h-[22rem] rounded-lg" />
            </div>
          ))}
        </Slider>
        <div className="text-gray-600">
          {segments.map((segment) => (
            <div key={segment.id} className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                {segment.title}
                </h2>
              <p className="text-lg mb-4 text-justify">
                {segment.content}
                </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyDetails;
