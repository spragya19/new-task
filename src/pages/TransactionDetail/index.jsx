import React from "react";

import { Link, useParams } from "react-router-dom";

import { data } from "../../dummydata";

const TransactionDetail = () => {
  const param = useParams();

  console.log(param, ">>>>>> param");
  return (
    <div>
      <h1>TransactionDetail</h1>
      <div>
        {JSON.stringify(data.find((trans) => trans.id === param.id ))}
      </div>
      <Link to="/">Back to dashboard</Link>


    </div>
  );
};

export default TransactionDetail;
