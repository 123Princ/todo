import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const EditTodoModal = ({ show, onHide, todo, onSave }) => {
  // Define initial values using the todo object
  const initialValues = {
    username: todo?.username,
    email: todo?.email,
    taskDescription: todo?.taskDescription
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    taskDescription: Yup.string().required('Task description is required')
  });

  const handleSubmit = (values, { setSubmitting }) => {
    onSave(values);
    setSubmitting(false);
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={initialValues} // Set initial values here
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <Field type="text" className="form-control" id="username" name="username" />
                <ErrorMessage name="username" component="div" className="text-danger" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <Field type="email" className="form-control" id="email" name="email" />
                <ErrorMessage name="email" component="div" className="text-danger" />
              </div>
              <div className="mb-3">
                <label htmlFor="taskDescription" className="form-label">Task Description</label>
                <Field as="textarea" className="form-control" id="taskDescription" name="taskDescription" rows="3" />
                <ErrorMessage name="taskDescription" component="div" className="text-danger" />
              </div>
              <Button variant="secondary" className="mr-3" onClick={onHide}>
                Close
              </Button>
              <Button variant="primary" type="submit" disabled={isSubmitting}>
                Edit Task
              </Button>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

export default EditTodoModal;
