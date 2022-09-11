import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import React from 'react';


function App() {
  return (
    <AuthProvider>
      <div style={{ margin: '2em' }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
            <PrivateRoute >
              <Home/>
            </PrivateRoute>} />
            <Route path="/signup" element={
              <PublicRoute >
                <SignUp/>
              </PublicRoute>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;