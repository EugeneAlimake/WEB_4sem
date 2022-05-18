import React from "react";
import { SortTable } from "./SortTable";

function FirstPage() {
  return (
    <>
      <h1>Первая страничка</h1>
      <h2>Николаева Евгения Владимимровна</h2>
      <h2>{new Date().toLocaleDateString()}</h2>
      <SortTable />
    </>
  );
}

export default FirstPage;
