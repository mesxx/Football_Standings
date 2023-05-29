import React, { useContext } from "react";
import { Button } from "flowbite-react";

import { GlobalContext } from "../context/GlobalContext";

export default function InputClub() {
  const { state, handleFunction } = useContext(GlobalContext);
  const { inputClub } = state;
  const { handleInputClub, handleSubmitClub } = handleFunction;

  return (
    <>
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Add Club
      </h2>
      <form onSubmit={handleSubmitClub}>
        <div className="mb-4 grid gap-4 grid-cols-1">
          <div className="w-full">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Club Name"
              required
              value={inputClub.name}
              onChange={handleInputClub}
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="city"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Club City"
              required
              value={inputClub.city}
              onChange={handleInputClub}
            />
          </div>
        </div>
        <hr />
        <Button
          type="submit"
          className="mt-4 bg-primary-600 hover:bg-primary-700"
        >
          Submit Club
        </Button>
      </form>
    </>
  );
}
