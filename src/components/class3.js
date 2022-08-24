import React from "react";

class Class3 extends React.Component{

    constructor(props){
        super(props);
    }

    func=()=>{
        window.location.reload();
    }

    render(){
        return(
            <>
                <button onClick={this.func} >{this.props.btn}</button>
                <p>{this.props.text}</p>
            </>
        )
    }
}

export default Class3;
