import React from "react";

export default function RegistrationCard({ users }) {
  console.log(users);
  return (
    <div>
      {users.map(user => (
        <div>
          <h3>
            First Name: <span>{user.firstName}</span>
          </h3>
          <h3>
            Last Name: <span>{user.lastName}</span>
          </h3>
          <h3>
            Email: <span>{user.email}</span>
          </h3>
          <h3>
            Confirm Email: <span>{user.confirmEmail}</span>
          </h3>
          <h3>
            Password: <span>{user.password}</span>
          </h3>
        </div>
      ))}
    </div>
  );
}
