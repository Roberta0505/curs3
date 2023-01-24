import React from 'react';

//aici trb sa definim valoarea

interface Props {
    text: string,
    children?: JSX.Element,  //? pentru ca e optional, nu trb neaparat sa existe

}


function Myp(props: Props) {
    return (<p>{props.text} {props.children}</p>)
}

export default Myp;