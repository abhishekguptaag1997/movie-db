import React, { useState } from 'react'
import Display from './Display'
import NavBar from './NavBar'

const Main = () => {
    const [title, setTitle] = useState()
    return (
        <div>
            <NavBar setTitle={setTitle} />
            {title &&   <Display title={title}/>}
          
        </div>
    )
}

export default Main
