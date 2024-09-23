const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const gemini = async (genre, games) => {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_AI_API_KEY);

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    generationConfig: { responseMimeType: "application/json" },
  });

  const prompt = `please give me game top 5 recommendations based on genre ${genre} and metacritic rating, based on property genre of data from ${games}. The recommendations can't be get from internet or other sources, only get the recommendations based on the data provided. Response must be a format JSON like this:
  [
    {
      "id": ...,
      "Title":...,
      "genre": el.genre,
      "imgUrl": el.imgUrl,
      "metacriticRating": el.metacriticRating,
    }, ...
]. create without \`\`\`json and \`\`\``;
  
  const result = await model.generateContent(prompt);
  const response = await result.response;
  let text = response.text();
  text = JSON.parse(text.trim());

  return text;
};

module.exports = gemini;
