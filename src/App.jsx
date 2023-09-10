import React, { useState } from "react";
import myData from "./txncode.json";
import CodeForm from "./components/CodeForm";
import Runner from "./components/Runner";
import NoRunner from "./components/NoRunner";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [runner, setRunner] = useState([]);
  const [firstrun, setFirstrun] = useState(true);

  const searchTxncode = (txncode) => {
    setRunner(myData.filter((data) => data.Code === txncode));
    txncode === "" ? setFirstrun(true) : setFirstrun(false);
  };
  return (
    <div className="w-full h-screen text-slate-200 pt-10 px-10 flex flex-col items-center">
      <Header />
      <CodeForm onSubmit={searchTxncode} />
      {!firstrun ? (
        runner.length > 0 ? (
          <Runner runner={runner} />
        ) : (
          <NoRunner />
        )
      ) : (
        ""
      )}
      <Footer />
    </div>
  );
};

export default App;
