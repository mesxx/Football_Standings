import React, { useContext } from "react";
import { Button } from "flowbite-react";

import { GlobalContext } from "../context/GlobalContext";

export default function InputMultiple() {
  const { state, handleFunction } = useContext(GlobalContext);
  const { data, inputScore } = state;
  const { handleInputScore, handleSubmitScore, handleDelete, handleClick } =
    handleFunction;

  return (
    <>
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Add Score
      </h2>
      <Button
        type="button"
        className="mt-3 bg-primary-600 hover:bg-primary-700"
        onClick={handleClick}
      >
        Add Score Multiple
      </Button>
      <form onSubmit={handleSubmitScore}>
        {inputScore.map((el, i) => (
          <>
            <div className="my-4 grid gap-4 grid-cols-2">
              <div>
                <label
                  htmlFor="homeClub"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Home Club
                </label>
                <select
                  name="homeClub"
                  id="homeClub"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={el.homeClub}
                  onChange={(e) => handleInputScore(e, i)}
                >
                  <option selected>Select Club Home</option>
                  {data?.map((el) => {
                    return <option value={el.name}>{el.name}</option>;
                  })}
                </select>
              </div>
              <div>
                <label
                  htmlFor="awayClub"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Away Club
                </label>
                <select
                  name="awayClub"
                  id="awayClub"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={el.awayClub}
                  onChange={(e) => handleInputScore(e, i)}
                >
                  <option selected>Select Club Away</option>
                  {data?.map((el) => {
                    return <option value={el.name}>{el.name}</option>;
                  })}
                </select>
              </div>
              <div className="w-full">
                <label
                  htmlFor="homeScore"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Home Score
                </label>
                <input
                  type="number"
                  name="homeScore"
                  id="homeScore"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Home Score"
                  required
                  value={el.homeScore}
                  onChange={(e) => handleInputScore(e, i)}
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="awayScore"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Away Score
                </label>
                <input
                  type="number"
                  name="awayScore"
                  id="awayScore"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Away Score"
                  required
                  value={el.awayScore}
                  onChange={(e) => handleInputScore(e, i)}
                />
              </div>
            </div>
            <div
              className="cursor-pointer mb-4 font-medium text-red-600"
              onClick={() => handleDelete(i)}
            >
              Delete
            </div>
            <hr />
          </>
        ))}
        <Button
          type="submit"
          className="mt-4 bg-primary-600 hover:bg-primary-700"
        >
          Submit Score
        </Button>
      </form>
    </>
  );
}
