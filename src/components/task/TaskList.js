import React, { Component } from 'react';
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_TASKS = gql`
  {
    tasks {
      name
      description
      priority
    }
  }
`;

function Tasks() {
  const { loading, error, data } = useQuery(GET_TASKS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <ul>
      {data.tasks.map(item =>
        <li value={item.name}>
          <h3>
            {item.name}
          </h3>
          <p>
            {item.description} - {item.priority}
          </p>
        </li>
      )}
    </ul>
  );
}

class TaskList extends Component {
    render() {
      return (
        <div>
          <h3>Liste des tâches</h3>
          <Tasks />
        </div>
      );
    }
}

export default TaskList;