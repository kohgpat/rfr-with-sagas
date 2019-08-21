import React from "react";
import { connect } from "react-redux";
import Nav from "../../components/Nav";

const User = ({ userId }) => (
  <div>
    <Nav />
    <h3>User ${userId}</h3>
  </div>
);

const mapStateToProps = ({ location }) => ({
  userId: location.payload.id
});

export default connect(mapStateToProps)(User);
