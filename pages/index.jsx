import Head from "next/head";
import DigitalClock from "../components/DigitalClock";

const index = () => {
  return (
    <>
      <Head>
        <title>DigitalClock App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="w-screen h-screen grid grid-cols-1 place-items-center bg-black">
        <div className="text-4xl lg:text-6xl font-medium text-transparent bg-clip-text bg-gradient-to-tr from-purple-600 to-pink-600">
          <DigitalClock />
        </div>
      </div>
    </>
  );
};

export default index;
