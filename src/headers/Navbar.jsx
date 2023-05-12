import React from 'react'
import {FcHome, FcContacts, FcLink} from "react-icons/fc"
import {FaPrayingHands, FaHandshake} from "react-icons/fa"
import { useLocation, useNavigate } from 'react-router-dom'
import { AiFillCaretRight } from "react-icons/ai";
export default function Navbar() {
    const location = useLocation()
    const Navigate = useNavigate()
    function Location(router) {
 if(router === location.pathname){
    return true;
 }
    }
  return (
    <>
    <div
    className=' 
    flex justify-center flex-col text-2xl items-center'>
        <p 
        onClick={() => Navigate("/")}
       className={`flex justify-center items-center text-gray-800 mt-3 cursor-pointer
       ${Location("/") && "text-blue-800"}`}>
           {Location("/") && <AiFillCaretRight
         className='text-blue-500 text-3xl'/>
         }
        <FcHome
        className='text-3xl '
        /> 
        <span
        className='m-2 uppercase font-bold'
        >Home</span>
        </p>

        <p
         onClick={() => Navigate("/about")}
       className={`flex justify-center items-center text-gray-800 mt-3 cursor-pointer
       ${Location("/about") && "text-blue-800"}`}>
           {Location("/about") && <AiFillCaretRight
         className='text-blue-500 text-3xl'/>}
        <FcContacts
        className='text-3xl '
        />
        <span
         className='m-2 uppercase font-bold'
        >About</span>
        </p>

        <p
         onClick={() => Navigate("/projects")}
        className={`flex justify-center items-center text-gray-800 mt-3 cursor-pointer
        ${Location("/projects") && "text-blue-800"}`}>
               {Location("/projects") && <AiFillCaretRight
         className='text-blue-500 text-3xl'/>}
        <FaPrayingHands
        className='text-3xl '
        />
        <span
         className='m-2 uppercase font-bold'
        >Projects</span>
        </p>

        <p
         onClick={() => Navigate("/media")}
        className={`flex justify-center items-center text-gray-800 mt-3 cursor-pointer
        ${Location("/media") && "text-blue-800"}`}>
             {Location("/media") && <AiFillCaretRight
         className='text-blue-500 text-3xl'/>}
        <FcLink
        className='text-3xl'
        />
        <span
         className='m-2 uppercase font-bold'
        >Media</span>
        </p>

        <p
         onClick={() => Navigate("/contact")}
       className={`flex justify-center items-center text-gray-800 mt-3 cursor-pointer ml-7
       ${Location("/contact") && "text-blue-800"}`}>
         {Location("/contact") && <AiFillCaretRight
         className='text-blue-500 text-3xl absolute left-0'/>}
        <FaHandshake
        className='text-3xl '
        />
        <span
         className='m-2 uppercase font-bold'
        >Contacts
        </span>
        </p>
    </div>
    </> 
  )
}
