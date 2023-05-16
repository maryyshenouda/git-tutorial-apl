import React from 'react'
import {Link} from "react-router-dom"


export default function Land() {
    return(
        <>
            <h1 class="title">
                Waiting for your procrastination habits to end?
                <br/> Welcome to [name]
            </h1>
            <Link to="/form" class="link">
                Start by filling out this form!
            </Link>
            <br/><br/>
            <img src="https://i.ytimg.com/vi/lHfjvYzr-3g/maxresdefault.jpg" width="100%"/>               
            <h2>Here is where your procrastination habits end!</h2>        
        </>
      );
}