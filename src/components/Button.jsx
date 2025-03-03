import { useState } from 'react';

// Props importate da Card
export default function Button(props) {

    // uso dello stato 
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="content-box">
            {/* Al click il valore false cambia */}
            <button className="btn" onClick={() => setIsOpen((current) => !current)}>
                {props.titolo}
            </button>

            {/* Condizione */}
            {/* Se lo stato ritorna true... */}
            {isOpen &&
                // allora...
                <div className="card" key={props.id}>
                    <h1>{props.titolo}</h1>
                    <p>{props.descrizione}</p>
                </div>}
        </div>


    );
}