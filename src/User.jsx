import React from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";

// const User = ({ match }) => {
//   return <h1> Hi {match.params.fname} Users..!</h1>;
// };

const User = () => {
  const { fname, lname } = useParams();
  const location = useLocation();
  const history = useHistory();
  console.log(history);

  return (
    <>
      <h1>
        Hi {fname} {lname} Users..!
      </h1>
      <p> My current location is {location.pathname} </p>
      {location.pathname === `/User/Deepak/Bodkhe` ? (
        <button onClick={() => history.push("/")}> Home Page </button>
      ) : null}
    </>
  );
};

export default User;
/* <button onClick={() => history.goBack()}> Clicked Me </button> */
