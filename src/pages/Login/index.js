import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch ,useSelector} from 'react-redux';
import { login } from '../../Redux/authSlice';
import { toast } from 'react-toastify';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
const {signupData} = useSelector((state)=>state.signup)
console.log(signupData,"ooo")
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  });
  const loginUser = (email, password) => {
    // Check if there is a user with the provided email and password
    const matchedUser = signupData?.find(user => user.email === email && user.password === password);
    
    // If a user is found, return true (valid credentials), otherwise return false (invalid credentials)
    return !!matchedUser;
  };
  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="card p-4 shadow">
        <h1 className="text-center mb-4">Login</h1>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { restform }) => {
            // Handle form submission here (e.g., dispatch login action)
            console.log(values,loginUser(values?.email, values?.password));
            if (loginUser(values?.email, values?.password)) {
                dispatch(login(values))
                restform()
                console.log('Login successful');
              } else {
                toast.error('Invalid credentials');
              }
             
            // navigate('/'); // Navigate to the home page after successful login
          }}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <Field type="email" className={`form-control ${errors.email && touched.email ? 'is-invalid' : ''}`} id="email" name="email" />
                <ErrorMessage name="email" component="div" className="text-danger" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <Field type="password" className={`form-control ${errors.password && touched.password ? 'is-invalid' : ''}`} id="password" name="password" />
                <ErrorMessage name="password" component="div" className="text-danger" />
              </div>
              <button type="submit" className="btn btn-primary w-100" >Login</button>
            </Form>
          )}
        </Formik>
        {/* Add Link to Signup page */}
        <div className="mt-3 text-center">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
