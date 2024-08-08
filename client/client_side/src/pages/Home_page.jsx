import React from 'react'
import Card from '../components/Card'
import imgSrc from '../assets/3428189_60286.jpg'
import { Link } from 'react-router-dom'

export default function Home_page() {
  return (
    <>

    <div className='flex w-screen'>

        <div className='flex-col w-1/4 '>
    <div className='min-h-lvh ' style={{backgroundColor : "#FF4500"}}> 
        <img src="https://images.squarespace-cdn.com/content/v1/58c934949de4bb225df66b63/1520564643664-OM3AFIU61ZDQHA8OBHYY/IMG_9895.jpg?format=750w"  className='w-full min-h-lvh object-cover'/>
    </div>
    <div className='min-h-lvh' style={{backgroundColor : "#98FF98"}}> </div>

        </div>


{/* left_side */}

      <div className='flex-col font-abc'>

        <div className='h-lvh w-full flex flex-col bg-cover ' style={{backgroundColor : "#F5F5DC", backgroundImage: `url(${imgSrc})`}} >
        <div className='h-3/4 ' > 
        <div className='flex justify-center mt-36'>
        <h1 className='text-6xl  '>Descover New Recipes</h1>

        </div>
{/* button  */}
        <div className='flex w-full justify-center gap-5 mt-28 text-white'>
          <Link to={"/add-edit"}>
            <button className='w-32 h-10 bg-zinc-950 rounded-full' >Add Recipe</button>
          </Link>

            <button className='w-32 h-10 bg-zinc-950 rounded-full'>See more</button>
        </div>

        </div>
        <div className='h-1/4 flex' >
        
            <div className='bg-orange-200 w-1/2 h-full flex justify-center items-center bg-opacity-45'>
                <h2><span className='text-4xl'>+1000 </span>Rcipes form all the world</h2>
            </div>
            <div className='bg-orange-200 w-1/2 h-full flex justify-center items-center bg-opacity-45'>
                <h2>Try to make new recipes using Ai</h2>
            </div>

        </div>

        </div>

      <div className='flex flex-col space-y-4 min-h-lvh justify-center' style={{backgroundColor : "#FFFDD0"}}>
      <Card/>
        <Card/>
      </div>


      </div>
    </div>
    
    
    </>

  )
}
