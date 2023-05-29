import React from "react";
import InputClub from "../partials/InputClub";
import InputMultiple from "../partials/InputMultiple";
import Table from "../partials/Table";

export default function Home() {
  return (
    <>
      <div class="grid grid-cols-2 gap-10">
        <div>
          <InputClub />
        </div>
        <div>
          <InputMultiple />
        </div>
      </div>
      <Table />
    </>
  );
}
