import React from "react";

const NoRunner = () => {
  return (
    <div className="max-w-xl mt-10 px-8 py-5 bg-slate-400/40 rounded-xl shadow-xl">
      <h2 className="font-semibold mb-5 text-xl text-center">
        Oops! Seems like you are not registered.
      </h2>
      <p className="mb-2">
        We could not find the payment code. Please, make sure the code that you
        entered is correct.
      </p>
    </div>
  );
};

export default NoRunner;
