import Part from "./Part";

const Content = (props) => {
    return (
    <div>
        <Part {...props}/>
        <Part {...props}/>
        <Part {...props}/>
    </div>
        // <p>{props.part} {props.exercise}</p>
    )
}

export default Content