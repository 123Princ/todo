import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Layout from '../../componets/Layout';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../Redux/TodoSlice';

const TodoForm = () => {


    const dispatch=useDispatch()
  const initialValues = {
    username: '',
    email: '',
    taskDescription: ''
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    taskDescription: Yup.string().required('Task description is required')
  });

  const handleSubmit = (values, { resetForm }) => {
    // Handle form submission
   const  datalist ={
        id:Math.random(),
        ...values
     }
    dispatch(addTodo(datalist));
    resetForm();
  };
  

  return (
    <Layout>

   
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center mb-4">Todo List</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting ,errors,touched}) => (
              <Form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <Field type="text" className={`form-control ${errors.username && touched.username ? 'is-invalid' : ''}`} id="username" name="username" />
                  <ErrorMessage name="username" component="div" className="text-danger" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <Field type="email" className={`form-control ${errors.email && touched.email ? 'is-invalid' : ''}`} id="email" name="email" />
                  <ErrorMessage name="email" component="div" className="text-danger" />
                </div>
                <div className="mb-3">
                  <label htmlFor="taskDescription" className="form-label">Task Description</label>
                  <Field as="textarea"className={`form-control ${errors.taskDescription && touched.taskDescription ? 'is-invalid' : ''}`} id="taskDescription" name="taskDescription" rows="3" />
                  <ErrorMessage name="taskDescription" component="div" className="text-danger" />
                </div>
                <button type="submit" className="btn btn-primary w-100" >Add Task</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default TodoForm;
