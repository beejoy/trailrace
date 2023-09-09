import React from "react";

const Runner = ({ runner }) => {
  return (
    <div className="max-w-xl mt-10 px-8 py-5 bg-slate-400/40 rounded-xl shadow-xl">
      {runner.map((data) => (
        <div key={data.Code}>
          <h2 className="font-semibold mb-5 text-xl text-center">
            Congratulations {data.Fullname}! You are registered.
          </h2>
          <p className="mb-2">Your details are:-</p>

          <p>Payment Code: {data["Code"]}</p>
          <p>
            Age/Gender: {data["Age"]}/{data["Gender"]}
          </p>
          <p>
            <span>Address</span>: {data["Address"]}
          </p>
          <p>
            <span>Mobile No.</span>: {data["Mobile"]}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Runner;
