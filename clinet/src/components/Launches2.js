import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import LaunchItem from "./Launch";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;
const Launches = () => {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);
  if (loading) {
    return <h4>...Loading</h4>;
  }
  if (error) {
    console.log(error);
  }
  console.log(data.launches, "data");
  return (
    <React.Fragment>
      <h1 className="display-4 my-3">Launches</h1>
      <React.Fragment>
        {data.launches.map((launch) => (
          <LaunchItem key={launch.flight_number} launch={launch} />
        ))}
      </React.Fragment>
    </React.Fragment>
  );
};

export { Launches };
