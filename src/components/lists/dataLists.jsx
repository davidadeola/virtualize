import React from "react";
import "./dataLists.css";

const DataLists = ({ lists, dataAmount }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Country</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody style={{ "--dataAmount": dataAmount }}>
          {lists?.map((list, index) => (
            <tr key={index} className="row">
              <td className="index">{index + 1}</td>
              <td>{list?.fields.country}</td>
              <td>{list?.fields.acq_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DataLists;
