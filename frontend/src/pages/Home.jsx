import React, { useEffect, useState } from "react";

// components
import MoodDetails from "../components/MoodDetails";

const Home = () => {
  const [moods, setMoods] = useState(null);

  useEffect(() => {
    const fetchMoods = async () => {
      const res = await fetch("http://localhost:8000/api/moods");
      const json = await res.json();

      if (res.ok) {
        setMoods(json);
        console.log(json);
      }
    };

    fetchMoods();
  }, []);

  return (
    <div className="bg-gray-300 h-screen">
      <div className="container mx-auto pt-5">
        {moods &&
          moods.map((mood) => (
            <MoodDetails key={mood._id} mood={mood}></MoodDetails>
          ))}
      </div>
    </div>
  );
};

export default Home;
