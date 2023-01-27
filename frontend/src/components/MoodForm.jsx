import React, { useState } from "react";
import { useMoodsContext } from "../hooks/useMoodsContext";

const MoodForm = () => {
  const { dispatch } = useMoodsContext();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mood, setMood] = useState("Happy");
  const [moodIntensity, setMoodIntensity] = useState(1);
  const [error, setError] = useState("");
  const [emptyFields, setEmptyFields] = useState([]);
  const [isErrorVisible, setIsErrorVisible] = useState(false);

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
      setEmptyFields(json.emptyFields);
      setIsErrorVisible(true);

      setTimeout(() => {
        setIsErrorVisible(false);
      }, 3000);
    }
    if (res.ok) {
      setTitle("");
      setDescription("");
      setMood("Happy");
      setMoodIntensity(1);
      setError(null);
      setEmptyFields([]);
      console.log("New Log Added");
      dispatch({ type: "CREATE_MOOD", payload: json });
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col flex-wrap bg-lightshade p-5 rounded-lg text-darkshade shadow-lg"
      >
        <h3 className="font-bold text-xl text-main mb-3">Log a New Mood</h3>
        <label>Log Title</label>
        <input
          placeholder="Mood Log"
          className={`rounded h-8 mb-3 p-2 ${
            emptyFields.includes("title") ? "border border-red-400" : ""
          }`}
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <label>Notes</label>
        <input
          placeholder="Tell me what happened"
          className={`rounded h-8 mb-3 p-2 border-teal-600 ${
            emptyFields.includes("description") ? "border border-red-400" : ""
          }`}
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />

        <label>How did you feel?</label>

        <select
          className="rounded h-8 mb-3 px-2"
          onChange={(e) => setMood(e.target.value)}
        >
          <option value="Happy">Happy</option>
          <option value="Sad">Sad</option>
          <option value="Angry">Angry</option>
          <option value="Bored">Bored</option>
          <option value="Anxious">Anxious</option>
          <option value="Stressed">Stressed</option>
        </select>

        <label>How intense was the emotion? </label>
        <input
          className="accent-main"
          type="range"
          min="1"
          max="5"
          onChange={(e) => setMoodIntensity(e.target.value)}
          value={moodIntensity}
        />
        <p className="mb-3">{moodIntensity}</p>
        <button className="mb-3 bg-main rounded py-2 px-4 text-white hover:scale-110 transition ease-out duration-300">
          Submit Log
        </button>
        {isErrorVisible && (
          <div className="bg-red-300 p-3 rounded-md border border-red-400 text-sm text-center">
            Please make sure to fill all required fields
          </div>
        )}
      </form>
    </div>
  );
};

export default MoodForm;
