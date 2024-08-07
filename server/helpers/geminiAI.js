const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const gemini = async (genre, data) => {
  // Access your API key as an environment variable (see "Set up your API key" above)
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_AI_API_KEY);

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `please give me game recommendations based on genre ${genre} referring to data ${data}. Response must be in JSON format.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);

    return text
};

module.exports = gemini;
