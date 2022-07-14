import { useState, useEffect } from 'react';

import Card from './Card';
import useCounter from "../hooks/use-counter";

const ForwardCounter = () => {
  // custom hook인 useCounter를 호출하면 컴포넌트로 엮이고 각각의 컴포넌트가 useCounter를 공유하는 것이 아닌
  // 독자적인 새로 생성된 훅을 호출하는 것이다. 로직을 공유하는 것이지 state를 공유하는 것이 아니다.
  const counter = useCounter();
  return <Card>{counter}</Card>;
};

export default ForwardCounter;
