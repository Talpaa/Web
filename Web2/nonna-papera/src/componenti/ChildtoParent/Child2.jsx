// eslint-disable-next-line no-unused-vars
import React from "react";

function Child2 ({onUserChange}){

    const updateUser = () => {

        const newUser = {name: 'Mario', age: 30};

        onUserChange(newUser);
    };

    return (
        <div>
            <button onClick={updateUser}>Aggiorna Dati Utente</button>
        </div>
    );
};

export default Child2;