import Feedback from "../models/Feedback.js";

export const getFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ data: -1 });
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar feedbacks" });
  }
};

export const createFeedback = async (req, res) => {
  try {
    const novo = new Feedback(req.body);
    await novo.save();
    res.status(201).json(novo);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar feedback" });
  }
};

export const deleteFeedback = async (req, res) => {
  try {
    await Feedback.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar feedback" });
  }
};
