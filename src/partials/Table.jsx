import React, { useContext } from "react";
import { Table } from "flowbite-react";

import { GlobalContext } from "../context/GlobalContext";

export default function TableClub() {
  const { state } = useContext(GlobalContext);
  const { data } = state;

  return (
    <>
      <section className="my-10">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>No</Table.HeadCell>
            <Table.HeadCell>Club</Table.HeadCell>
            <Table.HeadCell>Ma</Table.HeadCell>
            <Table.HeadCell>Me</Table.HeadCell>
            <Table.HeadCell>S</Table.HeadCell>
            <Table.HeadCell>K</Table.HeadCell>
            <Table.HeadCell>GM</Table.HeadCell>
            <Table.HeadCell>GK</Table.HeadCell>
            <Table.HeadCell>Point</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {data
              .sort((a, b) => (a.point > b.point ? -1 : 1))
              .map((el, i) => {
                return (
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {i + 1}
                    </Table.Cell>
                    <Table.Cell>{el.name}</Table.Cell>
                    <Table.Cell>{el.ma}</Table.Cell>
                    <Table.Cell>{el.me}</Table.Cell>
                    <Table.Cell>{el.s}</Table.Cell>
                    <Table.Cell>{el.k}</Table.Cell>
                    <Table.Cell>{el.gm}</Table.Cell>
                    <Table.Cell>{el.gk}</Table.Cell>
                    <Table.Cell>{el.point}</Table.Cell>
                  </Table.Row>
                );
              })}
          </Table.Body>
        </Table>
      </section>
    </>
  );
}
