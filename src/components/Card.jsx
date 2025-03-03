import languages from "/languages.js";
import Button from "./Button";

export default function Card() {

    // Funzione di rendering
    function renderCard() {
        // Ciclo 
        return languages.map(language => {
            return <Button
                // Passo le props
                key={language.id}
                titolo={language.title}
                descrizione={language.description}
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
