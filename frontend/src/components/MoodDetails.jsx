import React from "react";
import { useMoodsContext } from "../hooks/useMoodsContext";
import { useAuthContext } from "../hooks/useAuthContext";

// date formatter
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const MoodDetails = ({ mood }) => {
  const { dispatch } = useMoodsContext();
  const { user } = useAuthContext();

  const handleClick = async () => {
    if (!user) {
      return;
    }

    const res = await fetch("http://localhost:8000/api/moods/" + mood._id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await res.json();

    if (res.ok) {
      dispatch({ type: "DELETE_MOOD", payload: json });
    }
  };

  return (
    <div className="flex flex-col justify-between bg-lightshade p-3 rounded-lg shadow-lg m-2 h-60 w-56 text-darkshade">
      <div className="flex justify-between">
        <h4 className="mb-3 text-lg text-main font-extrabold ">{mood.title}</h4>
        <span className="cursor-pointer material-icons " onClick={handleClick}>
          delete
        </span>
      </div>

      <div className="break-all">
        <p>
          <strong>Mood : </strong>
          {mood.mood}
        </p>
        <p>
          <strong>Mood Intensity : </strong>
          {mood.moodIntensity}
        </p>
        <p>
          <strong>Notes : </strong>
          {mood.description}
        </p>
      </div>

      <p className="mt-2">
        <small>
          {formatDistanceToNow(new Date(mood.createdAt), { addSuffix: true })}
        </small>
      </p>
    </div>
  );
};

export default MoodDetails;
