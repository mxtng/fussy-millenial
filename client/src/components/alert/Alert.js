import React from "react";
import { connect } from "react-redux";

const Alert = ({ alert, msg }) => {
  return !alert ? (
    ""
  ) : (
    <div className="alert alert-danger" role="alert">
      {msg}
    </div>
  );
};

const mapStateToProps = ({ alert: { alert, msg } }) => ({ alert, msg });

export default connect(mapStateToProps)(Alert);
