import React, { useEffect, useState } from "react";
import { useMoodsContext } from "../hooks/useMoodsContext";

// components
import MoodDetails from "../components/MoodDetails";
import MoodForm from "../components/MoodForm";

const Home = () => {
  const { moods, dispatch } = useMoodsContext();

  useEffect(() => {
    const fetchMoods = async () => {
      const res = await fetch("http://localhost:8000/api/moods");
      const json = await res.json();

      if (res.ok) {
        dispatch({ type: "SET_MOODS", payload: json });
      }
    };

    fetchMoods();
  }, [dispatch]);

  return (
    <div className="bg-gray-300 w-screen">
      <div className="container mx-auto flex justify-between pt-10">
        <div className="mt-5 mr-60 flex">
          {moods
            ? moods.map((mood) => (
                <MoodDetails key={mood._id} mood={mood}></MoodDetails>
              ))
            : "You have no mood logs"}
        </div>
        <div className="pt-5">
          <MoodForm></MoodForm>
        </div>
      </div>
    </div>
  );
};

export default Home;
