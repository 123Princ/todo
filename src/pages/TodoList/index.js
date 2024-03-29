import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Importing edit and delete icons
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../componets/Layout';
import { removeTodo } from '../../Redux/TodoSlice';

const TodoList = () => {
const {
todoList
 } =useSelector((state)=>state.todo)
const dispatch =useDispatch()
console.log(todoList)
  return (
  <Layout>


    <div className="container mt-4">
      <h2>Todo List</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {todoList?.map(todo => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.username}</td>
              <td>{todo.taskDescription}</td>
              <td>
                {/* Edit icon */}
                <button className="btn btn-primary me-2" onClick={() => console.log(todo)}>
                  <FaEdit />
                </button>
                {/* Delete icon */}
                <button className="btn btn-danger" onClick={() => dispatch(removeTodo(todo))}>
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </Layout>
  );
};

export default TodoList;
