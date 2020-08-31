import React from "react";
import { connect } from "react-redux";

const Alert = ({ alert }) => {
  return !alert ? (
    ""
  ) : (
    <div className="alert alert-danger" role="alert">
      Ingredients missing
    </div>
  );
};

const mapStateToProps = ({ alert: { alert } }) => ({ alert });

export default connect(mapStateToProps)(Alert);
