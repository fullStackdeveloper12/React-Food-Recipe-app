import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const TrendingSlider = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian"
        );
        const result = await response.json();
        setData(result.meals);
        // console.log(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  var settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 100,
    pauseOnHover: true,
  };

  return (
    <>
      <div className="slider2">
        <Slider {...settings}>
          {data.map((food) => {
            return (
              <div className="slider2">
                <Link to={`${food.idMeal}`} key={food.idMeal}>
                  <img src={food.strMealThumb} alt="" />
                </Link>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default TrendingSlider;
