import React, {useState} from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRectangleXmark} from '@fortawesome/free-solid-svg-icons'

const AuthModal = ({showModal, setShowModal}) => {
    return(
    <>
        {showModal? (
       <div style={{transition: 'opacity 5s ease-in-out', opacity: showModal ? 1 : 0, visibility: showModal ? 'visible' : 'hidden', zIndex: '20',position: 'absolute',top: '0', left: '0', backgroundColor: 'rgba(255, 255, 255, 0.25)',backdropFilter: 'blur(15px)', height: "100vh", width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}> 
        <section className="modal" style={{boxSizing: 'border-box', gap: '1rem', backgroundColor: 'rgba(85, 168, 33, 0.8)',padding: '1rem', border: '1px solid gray', width: '80%', height: '50vh', borderRadius: '1rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'}}>
            <div style={{width: '100%', height: '1rem', display: 'flex', justifyContent: 'end'}}>
            <button style={{boxSizing: 'border-box', border: 'none', height: '1.5rem', backgroundColor: 'rgba(85, 168, 33, 0.0)'}} onClick={() => setShowModal(prev => !prev)}><FontAwesomeIcon style={{height: '1.5rem', width: '1.5rem', color: 'white'}} icon={faRectangleXmark} /></button>
            </div>
            <div style={{width: '45%', height: '80%'}}>
                <SignUp/>
            </div>
            <div style={{width: '45%', height: '80%'}}>
                <SignIn/>
                
            </div>
        </section>
        </div>  
    ) : null}
    </>
    )
}
export default AuthModal;