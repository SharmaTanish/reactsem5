
import React from "react";
import Class3 from "./class3";

class Class2 extends React.Component{

    constructor(props){
        super(props);
        this.state={
            class3btn:"class3",
            class3text:"class3 para"
        }
    }

    func=()=>{
        this.setState({
            class3btn:"class2 btn clicked",
            class3text:"class2 btn clicked"
        })
    }

    render(){
        return(
            <>
                <button onClick={this.func} >{this.props.btn}</button>
                <p>{this.props.text}</p>

                <Class3 btn={this.state.class3btn}  text={this.state.class3text}/>

            </>
        )
    }
}

export default Class2;
