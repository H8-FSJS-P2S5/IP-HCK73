const { OpenAI } = require('openai')
require('dotenv').config()

module.exports =  async function openAI() {
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY
    })
    const completion = await openai.chat.completions.create({
        messages: [
            { 
                role: "system",
                content: "Aktivitas apa saja yang bisa saya lakukan di GBK?. The response must be a JSON"
            }
        ],
        model: "gpt-4o-mini",
      });
    
    //   console.log(completion.choices[0].message.content);
    return completion.choices[0].message.content 
}