import { useEffect, useState } from "react";

const DigitalClock = () => {
  const [apptime, setApptime] = useState("12:59:59");
  const [appdate, setAppdate] = useState("31/12/2000");

  useEffect(() => {
    setInterval(() => {
      const timedata = new Date();

      setApptime(
        () =>
          (apptime = timedata.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }))
      );

      setAppdate(() => (appdate = timedata.toLocaleDateString("en-GB")));
    }, 1000);
  });

  // useEffect(() => {
  //   const timedata = new Date();

  //   setApptime(
  //     () =>
  //       (apptime = timedata.toLocaleTimeString("en-US", {
  //         hour: "2-digit",
  //         minute: "2-digit",
  //         second: "2-digit",
  //       }))
  //   );

  //   setAppdate(() => (appdate = timedata.toLocaleDateString("en-GB")));

  //   console.log(timedata.toLocaleTimeString());
  //   console.log(timedata.toLocaleDateString());
  // });

  return (
    <div className="grid grid-rows-1 place-items-center gap-4 lg:gap-8">
      <div className="">DigitalClock</div>
      <div className="font-mono">{apptime}</div>
      <div className="font-mono">{appdate}</div>
    </div>
  );
};

export default DigitalClock;
