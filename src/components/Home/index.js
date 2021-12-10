import React from 'react'
import { Link } from 'react-router-dom'
import SingUp from '../SingUp'


function Home() {
    return (
        <div>
<Link to={<SingUp/>}/>
            Hi from home
        </div>
    )
}

export default Home
