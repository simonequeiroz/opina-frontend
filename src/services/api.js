const API_BASE_URL = "https://seu-backend-api.com";

export const enviarFeedback = async (mensagem) => {
  const resposta = await fetch(`${API_BASE_URL}/feedbacks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ mensagem }),
  });
  return resposta.json();
};
