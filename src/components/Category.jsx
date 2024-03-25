import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import TrendingSlider from "./TrendingSlider";
import { Link } from "react-router-dom";

const Category = () => {
  const { name } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`
        );
        const result = await response.json();
        setData(result.meals);
        // console.log(result.meals);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [name]);
  return (
    <>
      <Navbar />
      <div className="row">
        {data.map((food) => {
          return (
            <Link
              to={`/${food.idMeal}`}
              style={{ textDecoration: "none", color: "whitesmoke" }}
            >
              <div className="row-img">
                <img src={food.strMealThumb} alt={food.strMeal} />
                <h2>{food.strMeal}</h2>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Category;
