function Activities({ title, describe }) {
    return (
      <div className="activities w-72 m-4 p-10 text-center bg-customGray flex flex-col items-center justify-center p-6 rounded-lg  hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
        <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
        <p className="text-gray-200 text-center">{describe}</p>
      </div>
    );
  }
  
  export default Activities;