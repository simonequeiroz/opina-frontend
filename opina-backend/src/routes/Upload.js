import express from "express";
import multer from "multer";

const router = express.Router();

// Configuração do multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// Rota para fazer upload de arquivos
router.post("/upload", upload.single("file"), (req, res) => {
  res.send("Arquivo enviado com sucesso!");
});

export default router;
