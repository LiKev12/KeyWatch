import React from "react";
import { useAuth0 } from "../react-auth0-wrapper";
import moment from "moment";


const DashboardInfo = () => {
  const { loading, user } = useAuth0();
  const displayName = user.given_name ? user.given_name : user.nickname.charAt(0).toUpperCase() + user.nickname.slice(1);

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  

  return (
    <div>
        <h1> Hello, {displayName}.</h1>
        <h4>
            <b>Today is {moment().format("LL")}.</b>
        </h4>
    </div>
  );
};

export default DashboardInfo;

// <div>
// <img src={user.picture} alt="Profile" />

// <h2>{user.name}</h2>
// <p>{user.email}</p>
// <code>{JSON.stringify(user, null, 2)}</code>
// </div>
