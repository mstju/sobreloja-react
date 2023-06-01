import React from "react";
import { Link } from "react-router-dom";
import logo from "../../components/img/logo/logo-black.png";
import "../styles/cadastro.css";

export default function Cadastro() {
  const handleRedirectHome = () => {};

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  

  return (
    <div className="page-container">
      <div className="cadastro-container">
        <div className="background-img"></div>
        <div className="h-100 d-flex justify-content-center align-items-center">
          <div className="card-cadastro">
            <Link to="/" onClick={handleRedirectHome}>
              <img
                src={logo}
                className="img-fluid p-2 mb-2 logo-cadastro"
                alt="Voltar para a página inicial"
              />
            </Link>
            <form id="formCadastro" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <div className="input-group">
                  <input
                    type="text"
                    id="nome"
                    className="form-control input-field nome-input"
                    placeholder="Nome"
                    required
                  />
                  <input
                    type="text"
                    id="sobrenome"
                    className="form-control input-field sobrenome-input"
                    placeholder="Sobrenome"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control input-field email-input"
                  placeholder="Digite seu e-mail"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="cel"
                  name="celular"
                  placeholder="Digite seu Número de celular"
                  className="form-control input-field celular-input"
                  required
                  maxLength="15"
                  minLength="15"
                />
              </div>
              <div className="form-group">
                <div className="input-group">
                  <input
                    type="text"
                    id="data"
                    name="data"
                    pattern="\d{2}/\d{2}/\d{4}"
                    maxLength="10"
                    title="O formato da data deve ser DD/MM/AAAA"
                    placeholder="Data de Nascimento"
                    className="form-control input-field data-input"
                    required
                  />
                  <input
                    type="text"
                    id="cpfOuCnpj"
                    name="cpfOuCnpj"
                    className="form-control input-field cpfcnpj-input"
                    placeholder="CPF ou CNPJ"
                    pattern=".{14,}"
                    minLength="14"
                    maxLength="18"
                    title="O formato do CPF ou CNPJ é inválido"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="password"
                  name="senha"
                  className="form-control input-field senha-input"
                  placeholder="Digite a sua senha"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="passwordConfirm"
                  name="passwordConfirm"
                  className="form-control input-field senha-confirm-input"
                  placeholder="Repita a sua senha"
                  required
                />
              </div>
              <div className="form-group">
                <div className="input-group">
                  <input
                    type="text"
                    onBlur="pesquisacep(this.value);"
                    id="cep"
                    name="cep"
                    className="form-control input-field cep-input"
                    placeholder="CEP"
                    required
                  />
                  <input
                    type="text"
                    id="uf"
                    name="uf"
                    className="form-control input-field uf-input"
                    placeholder="UF"
                    required
                  />
                  <input
                    type="text"
                    id="numero"
                    name="numero"
                    className="form-control input-field numero-input"
                    placeholder="Número"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <input
                    type="text"
                    id="bairro"
                    name="bairro"
                    className="form-control input-field bairro-input"
                    placeholder="Bairro"
                    required
                  />
                  <input
                    type="text"
                    id="cidade"
                    name="cidade"
                    className="form-control input-field cidade-input"
                    placeholder="Cidade"
                    required
                  />
                  <input
                    type="text"
                    id="rua"
                    name="rua"
                    className="form-control input-field rua-input"
                    placeholder="Rua"
                    required
                  />
                </div>
              </div>
              <button
                className="btn btn-outline-dark btn-lg px-5 mt-3 cadastrar-btn"
                type="submit"
                onClick="validarCadastro()"
                id="submit-login"
              >
                Cadastrar
              </button>
            </form>
            <div className="text-form">
              <p className="text-links">
                <Link
                  to="/forgot"
                  className="links-register fs-6 text-decoration-none fw-bold"
                >
                  Esqueci minha senha
                </Link>
              </p>
              <p className="text-links">
                Já possui uma conta?{" "}
                <Link
                  className="links-register fs-6 text-decoration-none fw-bold"
                  to="/login"
                >
                  Entre
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
