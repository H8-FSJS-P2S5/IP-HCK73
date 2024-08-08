import React, { useState } from 'react'
import RequestRecipe from '../../helper/RequestRecipe'
import { useNavigate, useParams } from 'react-router-dom'

export default function AddRecipe() {

    const {id} = useParams()

    const [title , setTitle] = useState("")
    const [ingredients , setIngredients] = useState("")

    const navigate = useNavigate()


    const HandelAddRecipe = async (e) => {
        e.preventDefault()

        try {
            let {data} = await RequestRecipe({
                url : "/recipes",
                method : "POST",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                },
                data : {
                    title ,
                    ingredients
                }
            })

            navigate("/profile")
                            
        } catch (error) {
            console.log(error);
            
        }
    }

    const HandelEdit = async (e) =>{
        e.preventDefault()
        try {
            
            let {data} = await RequestRecipe({
                url : `/recipes/${id}`,
                method : "PUT",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                },
                data : {
                    title ,
                    ingredients
                }
            })
                    
            navigate("/profile")
            
        } catch (error) {
            console.log(error);
            
        }
    }


  return (
    <>
   <section className="bg-white pt-14">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-black">
      {id? <>Edit Recipe</> : <>Add New Recipe</>}
    </h2>
    <p className="mb-8 font-light text-center text-black">
      try to make the recipe detailed as possible
    </p>
    <form onSubmit={id? HandelEdit : HandelAddRecipe}>
      <div>
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Title
        </label>
        <input
     
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="title"
          required=""
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
   
      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          ingredients
        </label>
        <textarea
          id="message"
          rows={6}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="the ingeredients ..."
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-300 px-5 text-sm font-medium text-center text-black rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Save
      </button>
    </form>
  </div>
</section>

    </>
  )
}



