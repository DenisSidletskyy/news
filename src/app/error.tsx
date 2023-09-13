"use client";

import {useEffect} from "react";

type Props = {
  error: Error;
  reset: () => void;
};

export default function Error({error, reset}: Props) {
  useEffect(() => {
    console.log("error", error);
  }, [error]);

  const resetClickHandler = () => {
    reset();
  };

  return (
    <div>
      <h2>Something went wrong!</h2>
      <h3>{error.message}</h3>
      <button className="bg-slate-700 p-2 text-white" onClick={resetClickHandler}>
        Try again
      </button>
    </div>
  );
}
