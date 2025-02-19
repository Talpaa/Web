// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import Child2 from "./Child2";

function Parent2 (){

    const[user, setUser] = useState({name: ', age:0'});
    const handleUserChange = (userInfo) => {
    };

    return(

        <div> 
            <h1>Nome: {user.nome}, Età: {user.age}</h1>
            <Child2 onUserChange={handleUserChange}></Child2>
        </div>
    )
}