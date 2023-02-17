import React from "react";
import { useForm } from "react-hook-form";
import { History } from "../history";

type FormData = {
  income: string;
  type: string;
  amount: BigInteger;
};

export function Transaction() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div className="form max-w-sm max-auto w-96 py-10">
      <h1 className="font-bold pb-4 text-xl">Transaction</h1>
      <form id="form" onSubmit={onSubmit}>
        <div className="grid gap-4">
          <div className="input-group">
            <input
              type="text"
              placeholder="salary,project, etc .."
              {...register("income")}
              className="mt-1 block w-full py-2 px-3 border border-gray-200 bg-white text-black rounded-md focus:ouline-none focus:ring-indigo-5 sm:text-sm"
            />
          </div>
          <select
            {...register("type")}
            className="mt-1 text-black block w-full py-2 px-3 border border-gray-200 bg-white rounded-md focus:ouline-none focus:ring-indigo-5 sm:text-sm"
          >
            <option value="invesment" defaultValue="invesment">
              invesment
            </option>
            <option value="expense">expense</option>
            <option value="saving">saving</option>
          </select>
          <div className="input-group">
            <input
              type="text"
              {...register("amount")}
              placeholder="Amount"
              className="mt-1 block w-full py-2 px-3 border border-gray-200 bg-white text-black rounded-md focus:ouline-none focus:ring-indigo-5 sm:text-sm"
            />
          </div>
          <div className="submit-btn">
            <button className="border py-2 text-white bg-indigo-500 w-full">
              Make Transaction
            </button>
          </div>
        </div>
      </form>
      <History></History>
    </div>
  );
}
