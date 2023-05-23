import { useState } from "react";
import { useForm } from "react-hook-form";
import { formOptions, sendData } from "../User/helper/FormUserHelper";
import PropTypes from "prop-types";

export const FormCuenta = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        rol: "USER",
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm(formOptions);
    console.log(user);
    /*useEffect(() => {
            setUser({...user, password: ""})
        }, [user])
        */
    const crud = async () => {
        await sendData(user, 1);
    };

    return (
        <form onSubmit={handleSubmit(crud)}>
        <div className="mb-3">
            <label className="text-black form-label">Usuario</label>
            <input
            {...register("name")}
            type="text"
            className="form-control"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            {errors.name && (
            <span className="text-danger">{errors.name.message}</span>
            )}
        </div>
        <div className="form-group">
            <label className="text-black" id="correo">
            Correo
            </label>
            <input
            {...register("email")}
            type="text"
            className="form-control"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            {errors.email && (
            <span className="text-danger">{errors.email.message}</span>
            )}
        </div>
        <div className="form-group">
            <label className="text-black">Contraseña</label>
            <input
            {...register("password")}
            type="password"
            className="form-control"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            {errors.password && (
            <span className="text-danger">{errors.password.message}</span>
            )}
        </div>
        <button type="buttom" className="btn btn-succsess">
            Crear Cuenta
        </button>
        </form>
    );
};

FormCuenta.propTypes = {
    userProp: PropTypes.object,
    tittleButton: PropTypes.string,
    option: PropTypes.number,
};


export default FormCuenta