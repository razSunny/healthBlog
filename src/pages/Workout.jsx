const Workout = () => {
  return (
    <div>
      <div className="text-pretty flex items-center justify-center flex-col mt-4">
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
        <button class="mb-2 z-50 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-opacity-90 font-semibold text-white py-2 px-4 rounded">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Workout;
