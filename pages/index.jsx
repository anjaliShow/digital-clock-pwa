import DigitalClock from "../components/DigitalClock";

const index = () => {
  return (
    <div className="w-screen h-screen grid grid-cols-1 place-items-center bg-black">
      <div className="text-4xl lg:text-6xl font-medium text-transparent bg-clip-text bg-gradient-to-tr from-purple-600 to-pink-600">
        <DigitalClock />
      </div>
    </div>
  );
};

export default index;
