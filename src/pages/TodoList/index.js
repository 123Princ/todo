import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Importing edit and delete icons
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../componets/Layout';
import { editTodo, removeTodo } from '../../Redux/TodoSlice';
import EditTodoModal from '../../componets/EditModel';

const TodoList = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const { todoList } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleEditClick = (todo) => {
    setSelectedTodo(todo);
    setShowEditModal(true);
  };

  const handleEditModalClose = () => {
    setShowEditModal(false);
    setSelectedTodo(null);
  };
const edithandle =(data)=>{
  console.log(data)
   const editdata ={
    id:selectedTodo?.id,
    ...data
   }
   dispatch(editTodo(editdata))
}
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
            {todoList?.length > 0 ? (
              todoList?.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo?.id}</td>
                  <td>{todo?.username}</td>
                  <td>{todo?.taskDescription}</td>
                  <td>
                    {/* Edit icon */}
                    <button className="btn btn-primary me-2" onClick={() => handleEditClick(todo)}>
                      <FaEdit />
                    </button>
                    {/* Delete icon */}
                    <button className="btn btn-danger" onClick={() => dispatch(removeTodo(todo))}>
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr style={{ textAlign: 'center' }}>
                <td colSpan="4">No todos found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* Edit modal */}
      <EditTodoModal
        show={showEditModal}
        onHide={handleEditModalClose}
        todo={selectedTodo}
        onSave={edithandle}
      />
    </Layout>
  );
};

export default TodoList;
