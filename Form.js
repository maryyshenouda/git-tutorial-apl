import React from "react";

export default function Form() {
    return (
    <form id="myDiv" class="form">
        <div>
            <b><label>What type of goals are you striving to achieve?</label></b> 
            <br/>
                <input type="radio" name="goaltype" required /> Academic
                <input type="radio" name="goaltype" /> Personal
                <input type="radio" name="goaltype" /> Health
            <br/>
            <br/>
        </div>
        <div>
        <b><label>What deadline do you need to achive this?</label></b>
        <br/>
            <input type="datetime-local"/>
            <br/>
            <br/>
        </div>
        <div>
            <b><label>How much work is required to complete this task?</label></b>
            <br/>
                <input type="radio" name="frequency" required /> About an hour
                <input type="radio" name="frequency" /> Several hours
                <input type="radio" name="frequency" /> A day
                <br/>
                <input type="radio" name="frequency" /> Several days
                <input type="radio" name="frequency" /> More than several days
            <br/>
            <br/>
        </div>
        <button>Submit</button>
    </form>
    )
}