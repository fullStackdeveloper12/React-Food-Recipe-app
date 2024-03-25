import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const PopularSlider4 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?a=british"
        );
        const result = await response.json();
        setData(result.meals);
        console.log(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <>
      <Slider {...settings}>
        {data.map((food) => {
          return (
            <Link to={`/${food.idMeal}`}>
              <div className="slider">
                <img src={food.strMealThumb} alt="" />
              </div>
            </Link>
          );
        })}
      </Slider>
    </>
  );
};

export default PopularSlider4;
