import React from "react";
import Class2 from "./class2";

class Class1 extends React.Component{

    constructor(props){
        super(props);
        this.state={
            class2btn:"class2",
            class2text:"class2 para"
        }
    }

    func=()=>{  //here directly func() not works!!
        this.setState({
            class2btn:"class1 btn clicked",
            class2text:"class1 btn clicked"
        })
    }

    render(){
        return(
            <>
                <button onClick={this.func} >class1</button>
                <p>class1 para</p>

                <Class2 btn={this.state.class2btn} text={this.state.class2text} />

            </>
        )
    }
}

export default Class1;
