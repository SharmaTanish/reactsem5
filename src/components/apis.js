import React from "react";
//if render ke aandar function then need to use const etc but not outside render() as outside render() it is class member!

class Apis extends React.Component{
    constructor(){
        super();
        this.state={
            
            data:[
            {   
                name:"Tanish",
                userid:1742,
                title:"SDE I"
            },
            {
                name:"sharma",
                userid:1741,
                title:"SDE II"
            }
            ]
            ,
            flag:-1,
            showAll:false,
            btnTitle:"Show All",
        };
    }

    func = () =>{
        if(this.state.showAll==false)
            this.setState({showAll:true,btnTitle:"Collapse All"});
        else{
            this.setState({showAll:false,btnTitle:"Show All",flag:-1}); 
        }  
    }

    render(){
        return(
            <React.Fragment>
                <h1>Title</h1>
                <button onClick={this.func} >{this.state.btnTitle}</button>
                
                {this.state.data.map((val,ind)=>{
                    return( //return is important
                        <p onClick={()=>{this.setState({flag:ind})}} >{ /*since here state change, component get rerender and the below text will show! JSX mai ham onclick etc function element ke saath laga sakte hai! */}
                        {val.title}
                        <br/>
                        {this.state.flag===ind || this.state.showAll ? val.name : null}
                        </p>
                    )
                })}

            </React.Fragment>
        )
    }
}

export default Apis;