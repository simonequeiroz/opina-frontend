import { useState } from "react";

function CadastrarFeedback() {
  const [mensagem, setMensagem] = useState("");
  const [arquivo, setArquivo] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(); // usado para enviar arquivos
    formData.append("mensagem", mensagem);
    formData.append("arquivo", arquivo); // nome do campo no backend

    const response = await fetch("http://localhost:3000/api/feedback", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      alert("Feedback enviado com sucesso!");
    } else {
      alert("Erro ao enviar feedback");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Escreva sua reclamação ou sugestão"
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
        required
      />

      <input
        type="file"
        onChange={(e) => setArquivo(e.target.files[0])}
        accept=".png,.jpg,.jpeg,.pdf"
      />

      <button type="submit">Enviar</button>
    </form>
  );
}

export default CadastrarFeedback;
