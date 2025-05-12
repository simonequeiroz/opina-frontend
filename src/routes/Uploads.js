import express from "express";
import multer from "multer";
import File from "../models/File.js"; // modelo do MongoDB

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Rota POST para upload de arquivo
router.post("/", upload.single("arquivo"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).send("Nenhum arquivo enviado.");

    const novoArquivo = new File({
      nome: req.file.originalname,
      tipo: req.file.mimetype,
      dados: req.file.buffer,
    });

    await novoArquivo.save();

    res.status(200).json({ mensagem: "Arquivo salvo com sucesso!" });
  } catch (error) {
    console.error("Erro ao salvar o arquivo:", error);
    res.status(500).send("Erro interno ao salvar o arquivo.");
  }
});

export default router;
