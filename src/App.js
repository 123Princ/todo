import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/Login';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import SignupPage from './pages/Siginup';
import store, { persistor } from './Redux/Store';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Todo from './pages/Todo/Todo';
import PrivateRoute from './route/PrivateRoute';
import PublicRoute from './route/PublicRoute';
import TodoList from './pages/TodoList';
function App() {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ToastContainer/>
    <Router>
      <div className="App">
     
        <Routes>
          <Route path="/" element={<PublicRoute><LoginPage /></PublicRoute>} />
          <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />

          <Route path="/signup" element={<PublicRoute><SignupPage /></PublicRoute>} />
  <Route path="/todo" element={<PrivateRoute><Todo /></PrivateRoute>} />
  <Route path="/todolist" element={<PrivateRoute><TodoList /></PrivateRoute>} />

          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
    </PersistGate>
    </Provider>
  );
}

export default App;
