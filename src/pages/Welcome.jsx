import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = ({ handleLogin }) => {
    return (
        <div className='w-full h-full'>

            <div className=' absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%]'>
                <h1 className='text-[10vw] font-bold font-sans '>
                    Welcome
                </h1>

                <Link to={"/home"}>
                    <button onClick={handleLogin} className='text-2xl font-medium bg-black text-white px-8 py-2 rounded-xl absolute left-1/2 translate-x-[-50%]' >
                        Start
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default Welcome