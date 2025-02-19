// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import Child from "./Child";

function Parent() {

    const [message, setMessage] = useState('');

    const handleMessage = (childMessage) => {
        setMessage(childMessage);
    };

    return (
        <div>
            <h1>Messaggio dal Child: {message}</h1>
            {/*Passa la funzione handleMessage come prop al child*/}
            <Child onMessage={handleMessage} />
        </div>
    );
};

export default Parent;