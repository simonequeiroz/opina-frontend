const express = require("express");
const router = express.Router();
const multer = require("multer");

// Configuração de armazenamento (pode mudar para salvar em pasta ou no banco)
const storage = multer.memoryStorage(); // ou use diskStorage para salvar em disco
const upload = multer({ storage });

router.post("/feedback", upload.single("arquivo"), (req, res) => {
  const { mensagem } = req.body;
  const arquivo = req.file;

  console.log("Mensagem:", mensagem);
  console.log("Arquivo:", arquivo.originalname);

  // Aqui você pode salvar o arquivo no banco, em disco ou em uma nuvem
  res.status(200).send("Feedback recebido com sucesso!");
});

module.exports = router;
