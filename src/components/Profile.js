import React from "react";
import { Redirect, useParams, Route, Link, useRouteMatch } from 'react-router-dom';

const Profile = () => {
  const { userId } = useParams();
  const url = useRouteMatch();

  if (userId === "0") return <Redirect to="/" />;

  return (
    <>
      <h1>Hello from User Profile {userId}!</h1>
      {/* Replaced `/users/${userId}` URL with `${url}` */}
      <Link to={`${url}/photos`}>Photos</Link>
      <Link to={`${url}/about-me`}>About Me</Link>

      {/* Replaced `/users/:userId` path with `${url}` */}
      <Route path={`${url}/photos`}>
        <h2>Photos for {userId}</h2>
      </Route>
      <Route path={`${url}/about-me`}>
        <h2>About Me for {userId}</h2>
      </Route>
    </>
  );
}

export default Profile;
