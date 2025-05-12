import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
  nome: String,
  tipo: String,
  dados: Buffer, // salva o conteúdo binário
});

export default mongoose.model("File", fileSchema);
