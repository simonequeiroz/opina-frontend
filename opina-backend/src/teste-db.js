// test-db.js
import mongoose from "mongoose";
import dotenv from "dotenv";

// Carrega variáveis do .env
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Conectado ao MongoDB com sucesso!");
    mongoose.connection.close(); // Fecha a conexão depois de testar
  } catch (error) {
    console.error("❌ Erro ao conectar com o MongoDB:", error.message);
  }
};

connectDB();
