import React from "react";

class Classcompo extends React.Component{
    //methods jo render se phele declare/define are done in constructor
    constructor(){// we can get props as arg in constructor
        super();//this used to connect all the variable of this class, due to this onlt the variables we define in constructor is accisible through out the class!!
        this.state={city : "Jagadhri"};
        this.name = "Tanish...";// IMP --> here it is automatically both defining and declaring name variable and this name variable is accesible through out the class using this.name!!!!!!!!!!!!!!!! 

        //in constructor we can't use this.props, to use props in constructor we have to take props as argument!!
        //also here we can't use this.state etc , as here we define this.state as here initially undefined!!
    }

    render(){
        return(
            <h1>{this.props.name} {this.name} {this.state.city}</h1> //here access by this.props not direstly props like in fucntional compo
        )
    }

}

export default Classcompo;


/*
--> if we define a method inside render() then we can use this method directly without 'this' keyword, but it is not accesible outside render()
--> if we declare outside render() then we can access it anywhere  in class but must use 'this' keywprd!!

*/