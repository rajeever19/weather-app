import React from "react";

function List(props) {
  const { q, s } = props;
  return (
    <div>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {q}
        <span className="badge bg-primary rounded-pill">{s}</span>
      </li>
    </div>
  );
}

export default List;
