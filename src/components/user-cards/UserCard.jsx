import React from "react";
import UserCardFooter from "./UserCardFooter";
import UserCardBody from "./UserCardBody";

function UserCard(props) {
  return (
    <div 
      style={{
        boxShadow: "5px 5px 15px #e7eaed",
        borderRadius: "8px",
        minWidth: "460px",
      }}
    >
      <section>
        <UserCardBody />
        <UserCardFooter />
      </section>
    </div>
  );
}

export default UserCard;
