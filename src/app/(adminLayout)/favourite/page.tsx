import { formatCurrency } from "@/utils";
import React from "react";

function Favourite() {
  return <div>{formatCurrency(1323)}</div>;
}

export default Favourite;
