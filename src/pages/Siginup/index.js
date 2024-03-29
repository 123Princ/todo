import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { signupSuccess } from '../../Redux/SigupSlice';
const SignupPage = () => {

const dispatch=useDispatch()
const navigate =useNavigate()

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Confirm Password is required'),
      });

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="card p-4 shadow">
        <h1 className="text-center mb-4">Sign Up</h1>
        <Formik
          initialValues={{
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            // Handle form submission here
            console.log(values);
            dispatch(signupSuccess(values));
            resetForm(); 
            navigate("/login")
            // Reset the form after successful submission
          }}
          
        >
          {({ isSubmitting ,errors,touched}) => (
            <Form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <Field type="email" className={`form-control ${errors.email && touched.email ? 'is-invalid' : ''}`}  id="email" name="email" />
                <ErrorMessage name="email" component="div" className="text-danger" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <Field type="password" className={`form-control ${errors.password && touched.password ? 'is-invalid' : ''}`}  id="password" name="password" />
                <ErrorMessage name="password" component="div" className="text-danger" />
              </div>
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <Field type="password" className={`form-control ${errors.confirmPassword && touched.confirmPassword ? 'is-invalid' : ''}`}  id="confirmPassword" name="confirmPassword"  />
                <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
              </div>
              <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>Sign Up</button>
            </Form>
          )}
        </Formik>
        {/* Add Link to Login page */}
        <div className="mt-3 text-center">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
