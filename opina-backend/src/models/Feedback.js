import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true },
  mensagem: { type: String, required: true },
  data: { type: Date, default: Date.now },
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

// ❌ errado para ESModules
// module.exports = Feedback;

// ✅ correto para ESModules
export default Feedback;
