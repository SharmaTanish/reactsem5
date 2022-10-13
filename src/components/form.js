import React from "react";

const Form = () =>{
    return(
        <form>
            <h1>Registration form</h1>
            
            <label>Name</label> 
            <input/>
            <br/>
            <label>Roll No</label>
            <input/>
            <br/>
            <label>Phone No</label>
            <input/>
            <br/>
            <button type="button" onClick={()=>alert("Submitted!")} >Submit</button>
        </form>
    )
}

export default Form;
