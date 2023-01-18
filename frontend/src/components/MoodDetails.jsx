import React from "react";

const MoodDetails = ({ mood }) => {
  return (
    <div className="bg-white mb-5 p-3 rounded-lg">
      {mood.mood === "Happy" ? <div>Hello</div> : null}
      <h4>
        <strong>Log Title : </strong>
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
      <p>{mood.createdAt}</p>
    </div>
  );
};

export default MoodDetails;
