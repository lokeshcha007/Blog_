/* eslint-disable react/no-unescaped-entities */
import { Button, Label, TextInput } from "flowbite-react"
import { Link } from "react-router-dom"


export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* {left side} */}
        <div className="flex-1">
        <Link to="/"  className="  font-bold dark:text-white text-4xl " >
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg "  >Lokesh's</span>
            Blosg
        </Link>
       
        <p className="text-sm mt-5"  >
          This is a blog project...You can sign up with your email and password or with google
        </p>
        </div>
         {/* {right side} */}
        <div className="flex-1">
          <form className='flex flex-col gap-4' >
            <div>
              < Label value="Your username"/>
              <TextInput 
                 type="text"
                 placeholder="Username"
                 id="username"
              />
            </div>
            <div>
              < Label value="Your email"/>
              <TextInput 
                 type="email"
                 placeholder="Email"
                 id="email"
              />
            </div>
            <div>
              < Label value="Your password"/>
              <TextInput 
                 type="password"
                 placeholder="Password"
                 id="password"
              />
            </div>
            <Button 
              gradientDuoTone='purpleToPink'
              type='submit'>
                Sign Up
                </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>
              Have an Account?
            </span>
            <Link to='/sign-in'className='text-blue-500' >sign In</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
