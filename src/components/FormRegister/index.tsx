import { Schema } from "../../validators/RegisterUser";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Button from "../Button";

interface IFormRegister {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
    bio: string;
}


const FormRegister = () => {

    const { register, formState: {errors} } = useForm<IFormRegister>({
        resolver: yupResolver(Schema)
    });
    
    return(
        <form>    
            <label htmlFor="name">Nome: </label>
            <input placeholder="Digite aqui o seu nome" type="text" {...register("name")}/>
            <span className="error"> {errors.name?.message} </span>

            <label htmlFor="email">Email: </label>
            <input placeholder="Digite aqui o seu email" type="email" {...register("email")}/>
            <span className="error"> {errors.email?.message} </span>

            <label htmlFor="password">Senha: </label>
            <input placeholder="Digite aqui a sua senha" type="password" {...register("password")}/>
            <span className="error"> {errors.password?.message} </span>

            <label htmlFor="passwordConfirm">Confirmar Senha: </label>  
            <input placeholder="Confirme sua senha" type="password" {...register("passwordConfirm")}/>
            <span className="error"> {errors.passwordConfirm?.message} </span>
                
            <label htmlFor="bio">Bio: </label>
            <input placeholder="Fale sobre você" type="text" {...register("bio")}/>
            <span className="error"> {errors.bio?.message} </span>
                
            <label htmlFor="techs">Techs: </label>

            <Button>Cadastrar</Button>
        </form>
    )
}

export default FormRegister;