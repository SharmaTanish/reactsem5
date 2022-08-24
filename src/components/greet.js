const Greet = (props) =>{ //these are reusable components as we can reuse this componnet various times by just passing different props!
    
    return <p>Good Morning {props.name}!</p>;
}

export default Greet;