const { comparePassword } = require("../helper/bcrypt");
const { signToken  } = require("../helper/jwt");
const { User } = require("../models");



const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI('AIzaSyAXF2T4XqD9b25q9A5WWSYzOUj47tlmYRE');

const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client();

class UserController {


  static async googleAouth(req,res,next){
    try {

      const {googleToken} = req.body 

      // console.log(googleToken)

      const ticket = await client.verifyIdToken({
        idToken: googleToken,
        audience: process.env.GOOGLE_CLIENT_ID
      });
      const payload = ticket.getPayload();
      const [user, created] = await User.findOrCreate({
        where: { email: payload.email },
        defaults: {
          name: payload.name,
          email: payload.email,
          picture: payload.picture,
          provider: 'google',
          password: 'google_id'
        },
        hooks: false
      });
  
      const token = signToken({ id: user.id }, process.env.JWT_SECRET);
      res.status(created ? 201 : 200).json({ access_token: token });
    } catch (error) {
      
      
      res.status(500).json({ message: 'Internal server error' });
    }
  }

//----------- REGISTER ------------------------

  static async registerUser(req, res ,next) {
    try {
      
        const {name , email , password} =req.body
        
      let user = await User.create({
        name : name,
        email : email,
        password : password
      });
        
        res.status(201).json({name,email})      
    } catch (error) {
        next(error)
    }
  }

//----------- LOGIN ------------------------

  static async loginUser(req,res,next){
    try {
        const { email, password } = req.body;

      if (!email) {
        throw { name: "EmailIsRequired" };
      }
      if (!password) {
        throw { name: "PasswordIsRequied" };
      }

      const user = await User.findOne({
        where: {
          email: email,
        },
      });

      if (!user) {
        throw { name: "InvalidEmailOrePassword" };
        
      }

      const isPasswordValid = comparePassword(password, user.password);

      if (!isPasswordValid) {
        throw { name: "InvalidEmailOrPassword" };
        
      }

      const accessToken = signToken({ id: user.id });
      
      res.status(200).json({access_token: accessToken});
    } catch (error) {
        next(error)
        
    }
  }

  static async getUserById(req,res) {
    try {
        
        const {id} = req.params

        let data = await User.findByPk(id)

    res.send(data)        

    } catch (error) {
        console.log(error);
        
    }
  }

  static async ai(req,res){
    try {

        const{promp} = req.body
        
      console.log(promp,"<<<<<<");
      

        async function run() {

            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

            const prompt = `langsung jawab dont answer anything not about food or drinks ,and if the prompt not about food  just answer "009900" .${promp} , and the answer should be in format title: ingredients: without any decoraion make it with full detalis instrucion and steps make clear as possible
            i want the the result in like this form 
            Title: Simple Vegetable Soup 
            Ingredients: * 1 tablespoon olive oil * 1 onion, chopped * 2 carrots, chopped * 2 celery stalks, chopped 
            Instructions: 1. Heat olive oil in a large pot or Dutch oven over medium heat. Add onion, carrots, and celery and cook until softened, about 5-7 minutes. 2. Add garlic and cook for 1 minute more, until fragrant.
            but make it all in one line without enter dont forget the Ingredients add the *
            `
          
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();    
            console.log(text,"<<<<<<<ff<<<");
                  
            res.send(text);
          }
          
          run();
    } catch (error) {
        console.log(error);
        
    }
  }
}

module.exports = UserController;
