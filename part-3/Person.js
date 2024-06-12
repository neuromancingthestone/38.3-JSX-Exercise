const Person = (props) => {
    let nameFormat = "";
    if(props.name.length > 8) {
        nameFormat = props.name.slice(0,6)
    } else {
        nameFormat = props.name
    }
    return (  
        <div>
            <p>Learn some information about this person.</p>                         
            <div>
                <h2>Name: {nameFormat}</h2>
                <h2>Age: {props.age}</h2>
                <h3>{props.age >= 18 ? "please go vote" : "you must be 18"}</h3>
            </div>    
            <ul>{props.hobbies.map(h => 
                (
                    <li>
                        <b>{h}</b>
                    </li>
                )
            )}</ul>            
        </div> 
    )
}