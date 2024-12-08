import { useState,useEffect } from "react";
import ChestWorkout from "../assets/ChestWorkout.jpg";
import backWorkout from "../assets/backWorkout.jpg";
import bicepWorkout from "../assets/bicepWorkout.jpg";
import tricepWorkout from "../assets/tricepWorkout.jpg";
import shoulderWorkout from "../assets/shoulderWorkout.jpg";
import legWorkout from "../assets/legWorkout.jpg";
import { useLocation } from "react-router-dom";

const Workout = () => {
  const location = useLocation();
  const [isShow, setIsShow] = useState(false);
  const handleWorkoutImage = () => {
    setIsShow(!isShow)
  };
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", ""); // Remove the "#" symbol
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div id="workouts" className="text-pretty flex items-center justify-center flex-col mt-4">
      <h3 className="text-3xl font-bold border-b-2 border-gray-600">
        Workout
      </h3>
      <p className="text-justify font-serif p-4">
        Working out is essential for maintaining physical and mental health.
        It includes a variety of exercises like strength training, cardio,
        flexibility, and endurance. Whether you're aiming to build muscle,
        lose weight, or enhance overall fitness, finding the right workout
        routine can lead to improved well-being and confidence.
      </p>
      <p className="text-justify pr-4 pb-2 pl-4 text-md italic indent-5">Here’s a weekly workout plan targeting specific muscle groups <span className="text-blue-600">(chest, back, biceps, triceps, shoulders, legs)</span> with different exercises each day:</p>
      {!isShow && <button onClick={handleWorkoutImage} class="mb-2 z-50 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-opacity-90 font-semibold text-white py-2 px-4 rounded">
        Read More
      </button>}
      {isShow && <div className="grid md:grid-cols-2 gap-4 w-4/5 mt-4">
        <div className="max-w-sm rounded overflow-hidden shadow-lg flex justify-center">
          <img src={ChestWorkout} />
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg flex justify-center mt-5">
          <img src={backWorkout} />
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg flex justify-center mt-5">
          <img src={bicepWorkout} />
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg flex justify-center mt-5">
          <img src={tricepWorkout} />
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg flex justify-center mt-5">
          <img src={shoulderWorkout} />
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg flex justify-center mt-5">
          <img src={legWorkout} />
        </div>
      </div>}
      {!!isShow && <button onClick={handleWorkoutImage} class="mt-4 mb-2 z-50 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-opacity-90 font-semibold text-white py-2 px-4 rounded">
        Read Less
      </button>}
    </div>
  );
};

export default Workout;
