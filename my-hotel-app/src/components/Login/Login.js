import React, { useState } from "react";
import Swal from "sweetalert2";
import { login } from "./api/ApiLogin";
import './Login.css'

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); //La función utiliza dos hooks de estado de React: useState(). El primer hook, useState(""), define una variable de estado llamada email e inicializa su valor en una cadena vacía. El segundo hook, useState(""), define otra variable de estado llamada password e inicializa su valor en una cadena vacía.

    const iniciarSesion = async (e) => {
        e.preventDefault();
        const result = await login(email, password);//La variable result es asignada con el valor resuelto de la promesa que devuelve la función login. En otras palabras, el código está esperando que la función login se complete y devuelva un resultado antes de continuar la ejecución del código.
        if(result){
            Swal.fire({
                icon: "Congratulations!",
                title: "Excelente:D",
                text: "Se inicio Sesion!",
                confirmButtonText: "OK",                
            }).then(r => {
                if(r.isConfirmed){
                    window.location.href = "/";
                } else {
                    window.location.href = "/";
                }
            });
        }
    };


return (
    <>
        
        <form className="login">
            <div className="mb-3">
                <label  className='form-label text-black'>Correo Electronico</label>
                <input value={email} onChange={({target: {value}}) => setEmail(value)} type="email" className='form-control' id='email' required/>
                <div>
                    <div className='mb-3'>
                        <label className='form-label text-black'>Contraseña</label>
                        <input value={password} onChange={({target: {value}}) => setPassword(value)} type="password" className='form-control' id='password' required/>
                    </div>
                    <button type='submit' onClick={(e) => iniciarSesion(e)} className='btn btn-primary'>Iniciar Sesión</button>
                </div>
            </div>
        </form>
    </>
    )
};

export default Login
