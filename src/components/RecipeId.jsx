import React from "react";
import Navbar from "./Navbar";
import TrendingSlider from "./TrendingSlider";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const RecipeId = () => {
  //   console.log("Params======", useParams());

  const { idMeal } = useParams();

  const [data, setData] = useState([]);

  const [active, setActive] = useState("ingredient");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
        );
        const result = await response.json();
        setData(result.meals[0]);
        // console.log(result.meals);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [idMeal]);

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>{data.strMeal}</h1>
        <div className="container-data">
          <div className="container-img">
            <img src={data.strMealThumb} alt="" />
          </div>
          <div className="container-content">
            <button className="cta-btn" onClick={() => setActive("ingredient")}>
              Ingredients
            </button>
            <button
              className="cta-btn"
              onClick={() => setActive("instruction")}
            >
              Instructions
            </button>

            {active === "ingredient" ? (
              <div className="ingredient">
                <h2>
                  {data.strIngredient1}-{data.strMeasure1}
                  {data.strIngredient2}-{data.strMeasure2}
                  {data.strIngredient3}-{data.strMeasure3}
                  {data.strIngredient4}-{data.strMeasure4}
                  {data.strIngredient5}-{data.strMeasure5}
                  {data.strIngredient6}-{data.strMeasure6}
                </h2>
              </div>
            ) : (
              <div className="instruction">
                <p>{data.strInstructions}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <TrendingSlider />
    </>
  );
};

export default RecipeId;
