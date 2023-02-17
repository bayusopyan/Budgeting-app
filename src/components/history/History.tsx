import React from "react";
import { Heading } from "./Heading";
import { TransactionHistory } from "./TransactionHistory";

const obj = [
  {
    name: "Saving",
    color: "regal-blue",
  },
  {
    name: "Invesment",
    // color: "regal-blue",
  },
  {
    name: "Expense",
    color: "cyan-500",
  },
];

export function History() {
  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className="py-4 font-bold text-xl">History</h1>
      {/* <Heading>History</Heading> untuk contoh */}
      {obj.map((v, i) => (
        <TransactionHistory
          key={i}
          color={v.color}
          //   name={v.name}
        >
          {v.name}
        </TransactionHistory>
      ))}
    </div>
  );
}
