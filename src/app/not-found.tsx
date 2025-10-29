
// const NotFoundpage = () => {
//   return (
//     <div  className="w-full h-screen bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 flex items-center justify-center">
//   <h1 className="text-white text-6xl font-bold">404 Not Found</h1>
// </div>

//   );
// };

// export default NotFoundpage;

const NotFoundpage = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #9F82F0 0%, #A677E7 40%, #9072E2 70%, #AFA3F9 100%)"
      }}
    >
      <h1 className="text-white text-6xl font-bold drop-shadow-lg">404 Not Found</h1>
    </div>
  );
};

export default NotFoundpage;
