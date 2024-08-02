import axios from "axios";

export const fetchQuestions = async (
  amount = 10,
  category = "",
  difficulty = "",
  type = ""
) => {
  const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`;
  const response = await axios.get(url);
  return response.data.results;
};
