import React from "react";

const MoodDetails = ({ mood }) => {
  return (
    <div className="bg-white mb-3 p-3 rounded-lg shadow-md max-w-none">
      <h4 className="mb-3 text-lg text-teal-600 font-extrabold">
        {mood.title}
      </h4>
      <p>
        <strong>Description : </strong>
        {mood.description}
      </p>
      <p>
        <strong>Mood : </strong>
        {mood.mood}
      </p>
      <p>
        <strong>Mood Intensity : </strong>
        {mood.moodIntensity}
      </p>
      <p className="mt-2">
        <small>{mood.createdAt}</small>
      </p>
    </div>
  );
};

export default MoodDetails;
