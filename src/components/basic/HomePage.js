import React, { Component } from 'react';
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_GRAPHQL_INFO = gql`
  {
    userSchemaAssert
  }
`;

function CheckConfig() {
  const { loading, error, data, networkStatus } = useQuery(GET_GRAPHQL_INFO);

  if (loading) return <span className="status-warning">LOADING</span>;
  if (error) return <span className="status-error">ERROR</span>;
  return <span className="status-ok">OK</span>;
}

class HomePage extends Component {
    render() {
      return (
        <div>
          <h2>Home page</h2>

          GraphQL status: <CheckConfig />
        </div>
      );
    }
}

export default HomePage;