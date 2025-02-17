import { useState } from "react";
import TextCard from "../components/TextCard";
import PreviewCard from "../components/PreviewCard";

function FaceArriere() {
    const [name, setName] = useState("");
    const [adress, setAdress] = useState("");
    const [dest, setDest] = useState("");

    return (
        <>
            <h2 className="h2-face-arriere"> Etape 2 : Déconnectez et écrivez votre carte postale </h2>
            <PreviewCard
                name={name}
                adress={adress}
                dest={dest}
            />
            <TextCard
                setName={setName}
                setAdress={setAdress}
                setDest={setDest}
            />
        </>
    );
}

export default FaceArriere;
