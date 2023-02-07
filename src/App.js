
import './App.css';
import ImageResultList from './components/ImageResultList/ImageResultList';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import ImageProvider from './Context/ImageContext';
import { Routes, Route, NavLink } from 'react-router-dom'
import * as React from 'react'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={
          <React.Suspense>
            <LandingPage />
          </React.Suspense>
        }>
        </Route>

        <Route path='login' element={
          <React.Suspense>
            <Login />
          </React.Suspense>
        }>
        </Route>

        <Route path='register' element={
          <React.Suspense>
            <Register />
          </React.Suspense>
        }>
        </Route>
      </Routes>

    </div>
  );
}


const LandingPage = () => {
  return (
    <ImageProvider>
      <Search />
      <ImageResultList />
    </ImageProvider>)

}

export default App;
