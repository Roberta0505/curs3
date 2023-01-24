interface Props {
    text: string,
    button_cbk: Function
}


function MyButton(props: Props) {

    let on_click = () => {
        props.button_cbk(props.text);
    }
    return (<button onClick={on_click}>{props.text}</button>)

}

export default MyButton;