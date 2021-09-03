import React from "react";

function User(props) {
  // const { data } = props;
  return (
    <div>
      <h1>User Components</h1>
      <h4>{props.data.name}</h4>
      <h4>{props.data.age}</h4>
    </div>
  );
}

export default User;
