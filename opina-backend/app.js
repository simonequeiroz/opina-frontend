import express from "express";
import multer from "multer";

const app = express();
const port = 5000;

// Configuração do multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/"); // Caminho onde o arquivo será salvo
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Usar o nome original do arquivo
  },
});

const upload = multer({ storage: storage });

// Rota para fazer o upload
app.post("/upload", upload.single("arquivo"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ erro: "Nenhum arquivo foi enviado." });
  }
  res.status(200).json({ mensagem: "Arquivo enviado com sucesso!" });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
