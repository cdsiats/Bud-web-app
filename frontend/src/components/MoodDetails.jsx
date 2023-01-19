import React from "react";

const MoodDetails = ({ mood }) => {
  return (
    <div className="bg-white my-5 p-3 rounded-lg shadow-md max-w-2xl">
      <h4 className="pb-3 text-lg">{mood.title}</h4>
      <p>
        <strong className="text-gray-700">Description : </strong>
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
