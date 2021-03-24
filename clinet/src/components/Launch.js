import React from "react";

const LaunchItem = ({
  launch: { flight_number, launch_date_local, launch_success, mission_name },
}) => {
  return (
    <div className="card card-body mb-3">
      <div className="col-md-10">
        <h4>Mission:{mission_name}</h4>
        <p>Date: {launch_date_local}</p>
      </div>
      <div className="col-md-3">
        <button className="btn btn-secondary">Launch Details</button>
      </div>
    </div>
  );
};

export default LaunchItem;
