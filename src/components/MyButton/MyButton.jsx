import "./mybutton.css";

function MyButton(props) {
    console.log(props)

    const styleButton = { backgroundColor: props.color};

    return <button style={styleButton} className ="btn"> {props.text} </button>
}

export default MyButton;