import languages from "/languages.js";
import Button from "./Button";

import { useState } from "react";

export default function Card() {

    const [active, setActive] = useState(null)

    // Funzione di rendering
    function renderCard() {
        // Ciclo 
        return languages.map(language => {
            return <Button

                // Passo le props
                key={language.id}
                titolo={language.title}
                descrizione={language.description}
                // Setto lo stato in base all'id
                isOpen={active === language.id}
                onToggle={() => setActive(language.id)}

            />

        });
    }

    return (

        <div id="content">
            {/* Chiamo la funzione di rendering */}
            {renderCard()}
        </div>

    )

}
