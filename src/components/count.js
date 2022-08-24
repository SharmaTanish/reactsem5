import React,{Component} from "react";

class Count extends Component{
    constructor(){
        super();
        this.state={count : 0,inclabel:"click",deslabel:"click",resetlabel:"click"};
    }

    incCount=()=>{
        console.log("IN");
        this.setState({
            // ...this.state,//in previous versions this.setState change whole state to the object we pass here ans hence we have to use ... operator, nut now in current versions setStte is just upadting the keys which we nake in object of setStste ans keep the remaining state as-it-is!!
            count:this.state.count+1,
            inclabel:"Clicked",
            
        })
    }

    desCount=()=>{
        console.log("IN");
        this.setState({
            // ...this.state,//in previous versions this.setState change whole state to the object we pass here ans hence we have to use ... operator, nut now in current versions setStte is just upadting the keys which we nake in object of setStste ans keep the remaining state as-it-is!!
            count:this.state.count-1,
            deslabel:"Clicked",
    
        })
    }

    resetCount=()=>{
        console.log("IN");
        this.setState({
            // ...this.state,//in previous versions this.setState change whole state to the object we pass here ans hence we have to use ... operator, nut now in current versions setStte is just upadting the keys which we nake in object of setStste ans keep the remaining state as-it-is!!
            //here if write ...this.state the not works!! it by default only do ...this.state for us!!
            count:0,
            resetlabel:"Clicked",
  
        })
    }

    render(){
        return(
            <div>
            <p>You clicked {this.state.count} times</p>
            <button onClick={this.incCount} >{this.state.inclabel}</button>
            <button onClick={this.desCount} >{this.state.deslabel}</button>
            <button onClick={this.resetCount} >{this.state.resetlabel}</button>
            </div>
        )
    }

}


export default Count;