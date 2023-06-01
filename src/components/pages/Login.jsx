import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
// import {useState} from 'react';
// import { useNavigate } from "react-router-dom";
// import UserService from "../Services/UserService";
import logo from "../../components/img/logo/logo-black.png";
import "../styles/login.css";

// const userService = new UserService()

const schema = yup.object({
  email: yup.string().required("*Campo obrigatório!").email('*Precisa ser um email válido').test("isValidPass", "*Email inválido", (value, context) => {
    const hasDot = /[.]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasAt = /[@]/.test(value);
    let validConditions = 0;
    const numberOfMustBeValidConditions = 3;
    const conditions = [hasLowerCase, hasDot, hasAt];
    conditions.forEach((condition) =>
      condition ? validConditions++ : null
    );
    if (validConditions >= numberOfMustBeValidConditions) {
      return true;
    }
    return false
  }),
  password: yup.string().required("*Campo obrigatório!").min(6, "*Sua senha deve conter no mínimo 6 caracteres").test("isValidPass", "*Senha inválida ([A-Z] [a-z] [0-9] [!@#%&])", (value, context) => {
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSymbole = /[!@#%&]/.test(value);
    let validConditions = 0;
    const numberOfMustBeValidConditions = 3;
    const conditions = [hasLowerCase, hasUpperCase, hasNumber, hasSymbole];
    conditions.forEach((condition) =>
      condition ? validConditions++ : null
    );
    if (validConditions >= numberOfMustBeValidConditions) {
      return true;
    }
    return false
  })
})

export default function Login() {

  const handleRedirectHome = () => {};
  
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => console.log(data);

  console.log(errors)


//     const [loading, setLoading] = useState(false)
//     const [form, setForm] = useState([])
//     const navigate = useNavigate()
  
//     const handleSubmit = async (event) => {
//       event.preventDefault();
//       try {
//         setLoading(true)
//         const response = await userService.login(form)
//         console.log('response do Login', response)
//         if (response === true) {
//           alert('usuário Logado com Sucesso')
//           navigate('/')
//         }
//         setLoading(false)
//       }
//       catch (err) {
//         alert('Algo deu errado com o Login' + err)
//       }
//   }
  
//     const handleChange = (event) => {
//       setForm({...form, [event.target.name]: event.target.value})
//     }
  
//     const validadorInput = () => {
//       return validarEmail(form.email) && validarSenha(form.password)
//     }
//     if (loading === true){
//       validadorInput()
//     }
    

  return (
    <div className="login-container">
      <div className="login-container">
        <div className="py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card-login text-white login-bg">
                <div className="card-body p-5 text-center">
                  <div className="md-4">
                    <Link to="/" onClick={handleRedirectHome}>
                      <img
                        src={logo}
                        className="img-fluid p-2 mb-2 logo-cadastro"
                        alt="Voltar para a página inicial"
                      />
                    </Link>

                    <section>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                          type="text"
                          id="email"
                          // name="email"
                          className="form-control form-control-lg"
                          placeholder="Digite seu E-mail"
                          {...register("email")}
                        />
                        <p className="error">{errors.email?.message}</p>

                        <input
                          type="password"
                          id="password"
                          className="form-control form-control-lg mt-2"
                          placeholder="Digite sua Senha"
                          {...register("password")}
                        />
                        <p className="error">{errors.password?.message}</p>

                        <input
                          className="btn btn-outline-dark btn-lg px-5 mt-5 login-btn"
                          type="submit"
                          value="Login"
                          id="submit-login"
                        />
                      </form>
                    </section>

                    <p className="small pb-lg-2 mt-4">
                      <Link
                        className="links-register fs-6 text-decoration-none"
                        to="/forgot"
                      >
                        Esqueci minha senha
                      </Link>
                    </p>
                  </div>

                  <div>
                    <p className="text-black mb-4">
                      Não tem uma conta?
                      <Link
                        to="/cadastro"
                        className="links-register register fw-bold"
                      >
                        Cadastre-se
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}