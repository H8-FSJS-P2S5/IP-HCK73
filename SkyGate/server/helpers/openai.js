const { OpenAI } = require('openai')
require('dotenv').config()

module.exports =  async function openAI(prompt) {
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY
    })
    const completion = await openai.chat.completions.create({
        messages: [
            { 
                role: "system",
                content: prompt
            }
        ],
        model: "gpt-4o-mini",
      }, {
        headers: {
            'Content-Type': 'application/json',
            'response_type': 'json_object'
        }
    });    
    return completion.choices[0].message.content 
}