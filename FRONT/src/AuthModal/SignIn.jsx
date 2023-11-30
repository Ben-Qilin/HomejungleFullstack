import { useState, useContext } from "react";
import AuthContext from "./AuthContext";

const SignIn = () => {
    const [formSign, setFormSign] = useState ({
        email: "",
        password: "",
    })
    const [error, setError] = useState('')
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('handlesubmit')
        console.log(formSign)
        const response = await fetch('http://localhost:3001/auth/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: formSign
        });
        if(!response) {
            const message = `Une erreur est survenue : ${response.status}`;
            throw new Error(message)
        }
        const data = await response.json()
        console.log(data)
        localStorage.setItem('token', data.token)
        setIsLoggedIn(true)
        console.log('JWT stocké : ', localStorage.getItem('token'));
        console.log('vous venez de vous connecter ave"c succes')
        window.location.reload()

    }

    const handleChange = (event) => {
        setFormSign({
            ...formSign,
            [event.target.name]: event.target.value
        });
    };
    return (
        <form onSubmit={handleSubmit} style={{boxSizing: 'border-box', width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.45)',backdropFilter: 'blur(10px)', borderRadius: '1rem', boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',display: 'flex', flexDirection: 'column',alignItems: 'center', justifyContent:'space-evenly', height: '100%',padding: '0.5rem'}}>
            <fieldset style={{height: '2rem', width: '100%', display: 'flex', justifyContent: 'space-evenly'}}>
            <label style={{width: '30%'}}>Email:</label>
            <input name="email" value={formSign.email} onChange={handleChange} style={{width: '50%', height: '2rem', borderRadius: '0.5rem', border: '1px solid grey', boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'}}></input>
            </fieldset>
            <fieldset style={{height: '2rem', width: '100%', display: 'flex', justifyContent: 'space-evenly'}}>
                <label style={{width: '30%'}}>Mot de passe:</label>
                <input name="password" value={formSign.password} onChange={handleChange} style={{width: '50%', height: '2rem', borderRadius: '0.5rem', border: '1px solid grey', boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'}}></input>
            </fieldset>
            
            <button type="submit">Se connecter</button>
        </form>
    )
}
export default SignIn