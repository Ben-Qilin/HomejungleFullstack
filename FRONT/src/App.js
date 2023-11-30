import React, { useState, useEffect } from 'react';
import './reset.css';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import MainHome from './MainHome/MainHome';
import AuthModal from './AuthModal/AuthModal';
import AuthContext from "./AuthModal/AuthContext";

function App() {
  const [showModal, setShowModal] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const autoconnect =  async ()  => {
        const token = localStorage.getItem('token')
        console.log(`ca passe ${token}`)
        if(!token) {
            return
        }
        try {
            const response = await fetch('http://localhost:3001/auth/profile', {
                method: 'GET',
                headers: {
                    Authorization: "Bearer " + (token)
                }
            })
            if(!response) {
                const message = `Une erreur est survenue : ${response.status}`;
                throw new Error(message)
            }
            const user = await response.json()
            setIsLoggedIn(true)
        } catch {
            localStorage.removeItem('token')
        }
    }
    useEffect(() => {

        autoconnect()

    }, [])
  const openModal = () => {
    setShowModal(prev => !prev);
    console.log(openModal)
  };
  return (
      <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
    <div style={{position: 'relative', overflow: 'hidden'}} className="App">
      <Header openModal={openModal}/>
      <MainHome/>
      <Footer/>
      <AuthModal showModal={showModal} setShowModal={setShowModal}/>
    </div>
      </AuthContext.Provider>
  );
}

export default App;
