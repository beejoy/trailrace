import { useState } from "react";

const CodeForm = ({ onSubmit }) => {
  const [txncode, setTxncode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(txncode);
    setTxncode("");
    console.log("Form submitted");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 text-lg items-center"
    >
      <label htmlFor="txn-code">Enter Your Payment Txn/Ref. Code:</label>
      <input
        id="txn-code"
        value={txncode}
        placeholder="transaction/reference code"
        onChange={(e) => setTxncode(e.target.value.toUpperCase())}
        className="text-green-700 border-green-700 text-center px-5 py-2 rounded-full w-full outline-none"
      />
      <button
        type="submit"
        className="bg-green-800/40 py-2 rounded-md w-1/2  hover:outline-1 hover:outline-green-800/40 hover:bg-green-700/40 hover:shadow-md"
      >
        Check
      </button>
    </form>
  );
};

export default CodeForm;
