import "./MyForm.css";
import { useState } from "react";

const MyForm = ({ userName, userEmail }) => {
  // 3- gerenciamento de dados
  const [name, setName] = useState(userName); // iniciar com valor vindo de props
  const [email, setEmail] = useState(userEmail);

  //   8- textarea
  const [bio, setBio] = useState("");

  const [role, setRole] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  //   5- Envio de formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form enviado!");
    console.log("Nome:", name);
    console.log("Email:", email);
    console.log("Bio:", bio);
    console.log("Função:", role);

    // validação simples
    // envio

    // 7- limpar formulário
    setName("");
    setEmail("");
    setBio("");
    setRole("");
  };

  return (
    <div>
      {/* 1- criação de form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            onChange={handleName}
            // 6- controlled inputs
            value={name || ""} // evita erro de uncontrolled input
          />
        </div>

        {/* 2- label envolvendo input */}
        <label>
          <span>E-mail:</span>
          <input
            type="text"
            name="email"
            placeholder="Digite o seu e-mail"
            // 4- simplificação do onChange (manipulação)
            onChange={(e) => setEmail(e.target.value)}
            // 6- controlled inputs
            value={email || ""}
          />
        </label>
        {/* 8- textarea */}
        <label>
          <span>Bio:</span>
          <textarea
            name="bio"
            placeholder="Descrição"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>
        {/* 9 - select */}
        <label>
          <span>Função no sistema</span>
          <select name="role" onChange={(e) => setRole(e.target.value)}>
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
