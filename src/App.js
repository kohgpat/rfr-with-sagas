import React from "react";
import { connect } from "react-redux";
import Routes from './Routes';

function App({ page }) {
  return <Routes page={page} />;
}

const mapStateToProps = ({ page }) => ({
  page
});

export default connect(mapStateToProps)(App);
