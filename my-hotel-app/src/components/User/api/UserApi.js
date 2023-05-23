import axios from "axios";
import Swal from "sweetalert2";
const URL = "http://localhost:3010/api/";
const token = localStorage.getItem("token");

//Crea el usuario con método post
export const CreateUser = async (name, email, password, rol) => {
    try {
        await axios.post(
        `${URL}create-user`,
        {
            name: name,
            email: email,
            password: password,
            rol: rol,
        },
        {
            headers: { "x-token": token },
        }
        );
        return true;
    } catch ({
        response: {
        data: { message },
        },
    }) {
        if (message === "El token ha expirado") {
        Swal.fire({
            icon: "error",
            tittle: "Oops...",
            text: message,
            showConfirmButtom: true,
            confirmButtomText: "ok",
        }).then((result) => {
            if (result.isComfirmed) {
            localStorage.removeItem("token");
            window.location.href = "/registrar";
            } else {
            localStorage.removeItem("token");
            window.location.href = "/registrar";
            }
        });
        } else {
        Swal.fire({
            icon: "error",
            tittle: "Oops...",
            text: message,
            confirmButtomText: "ok",
        });
        }
    }
};
