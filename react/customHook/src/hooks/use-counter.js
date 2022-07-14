import {useEffect, useState} from "react";

const useCounter = (forwards = true, from = "forward") => {
  console.log("--------------- useCounter from ------------------", from);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        setCounter((prevCounter) => prevCounter + 1);
      }else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);
    return () => clearTimeout(interval);
  }, []);
  //return type은 원하는 것으로 만들어서 반환해도 상관없다.
  return counter;
}

export default useCounter;
