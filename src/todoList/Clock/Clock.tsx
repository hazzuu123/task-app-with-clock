import { useState } from "react";

const Clock: React.FC = () => {
  setInterval(() => {
    setTime(new Date());
  }, 1000);

  const [time, setTime] = useState(new Date());
  return <div>현재 시간: {time.toLocaleTimeString()}</div>;
};

export default Clock;
