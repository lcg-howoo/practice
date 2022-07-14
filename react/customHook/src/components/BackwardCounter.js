import { useState, useEffect } from 'react';

import Card from './Card';
import useCounter from "../hooks/use-counter";

const BackwardCounter = () => {
  const counter = useCounter(false, "backward");
  return <Card>{counter}</Card>;
};

export default BackwardCounter;
