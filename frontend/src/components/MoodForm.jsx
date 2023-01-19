import React, { useState } from "react";

const MoodForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mood, setMood] = useState("");
  const [moodIntensity, setMoodIntensity] = useState(1);
  const [error, setError] = useState("");
  const [isErrorVisible, setIsErrorVisble] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submittedMood = { title, description, mood, moodIntensity };

    const res = await fetch("http://localhost:8000/api/moods", {
      method: "POST",
      body: JSON.stringify(submittedMood),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await res.json();

    if (!res.ok) {
      setError(json.error);
      setIsErrorVisble(true);

      setTimeout(() => {
        setIsErrorVisble(false);
      }, 3000);
    }
    if (res.ok) {
      setTitle("");
      setDescription("");
      setMood("");
      setMoodIntensity(1);
      setError(null);
      console.log("New Log Added");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col flex-wrap">
        <h3 className="font-bold text-xl text-teal-600 mb-3">Log a New Mood</h3>
        <label>Log Title</label>
        <input
          placeholder="Mood Log"
          className="rounded h-8 mb-3 p-2"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <label>Description</label>
        <input
          placeholder="Tell me what happened"
          className="rounded h-8 mb-3 p-2 border-teal-600"
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />

        <label>How did you feel?</label>
        <input
          placeholder="Happy? Anxious? Angry?"
          className="rounded h-8 mb-3 p-2"
          type="text"
          onChange={(e) => setMood(e.target.value)}
          value={mood}
        />

        <label>How intense was the emotion? </label>
        <input
          className="accent-teal-600"
          type="range"
          min="1"
          max="5"
          onChange={(e) => setMoodIntensity(e.target.value)}
          value={moodIntensity}
        />
        <p className="mb-3">{moodIntensity}</p>
        <button className="mb-3 bg-teal-600 rounded p-2 text-white hover:bg-teal-700">
          Submit Log
        </button>
        {isErrorVisible && (
          <div className="bg-red-300 p-3 rounded-md border border-red-800">
            Please make sure to fill all required fields
          </div>
        )}
      </form>
    </div>
  );
};

export default MoodForm;
