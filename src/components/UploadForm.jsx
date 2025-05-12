import { useState } from "react";

function UploadForm() {
  const [file, setFile] = useState(null);
  const [mensagem, setMensagem] = useState("");

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    setMensagem("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setMensagem("Por favor, selecione um arquivo.");
      return;
    }

    const formData = new FormData();
    formData.append("arquivo", file);

    try {
      const resposta = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      if (resposta.ok) {
        setMensagem("Arquivo enviado com sucesso!");
      } else {
        setMensagem("Erro ao enviar arquivo.");
      }
    } catch (erro) {
      setMensagem("Erro de conexão com o servidor.");
    }
  };

  return (
    <div className="upload-container">
      <h2>Envio de Arquivo</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleChange} />
        <button type="submit">Enviar</button>
      </form>
      {file && <p>Arquivo selecionado: {file.name}</p>}
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}

export default UploadForm;
