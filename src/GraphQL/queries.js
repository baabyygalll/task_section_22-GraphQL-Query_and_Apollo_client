import { gql } from "@apollo/client";

export const GET_TODOLIST = gql`
query MyQuery {
  todoList {
    id
    is_done
    title
  }
};
`