import React, { useEffect, useState } from "react";
import { useMoodsContext } from "../hooks/useMoodsContext";
import { useAuthContext } from "../hooks/useAuthContext";

// components
import MoodDetails from "../components/MoodDetails";
import MoodForm from "../components/MoodForm";

const Home = () => {
  const { moods, dispatch } = useMoodsContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchMoods = async () => {
      const res = await fetch("http://localhost:8000/api/moods", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await res.json();

      if (res.ok) {
        dispatch({ type: "SET_MOODS", payload: json });
      }
    };
    if (user) {
      fetchMoods();
    }
  }, [dispatch, user]);

  return (
    <div className="bg-darkshade min-h-screen">
      <div className="container mx-auto flex justify-between pt-10">
        <div className="mt-5 flex flex-wrap">
          {moods ? (
            moods.map((mood) => (
              <MoodDetails key={mood._id} mood={mood}></MoodDetails>
            ))
          ) : (
            <div>You have no mood logs</div>
          )}
        </div>
        <div className="pt-5">
          <MoodForm></MoodForm>
        </div>
      </div>
    </div>
  );
};

export default Home;
