import "../styles/visualisation.css";
import Footer from "../components/Footer";

function ECurency() {
  return (
    <>
      <h1>
        ICI NOUS AVONS QUITTER LE SITE ET NOUS SOMME SUR UN E-CURENCY DE
        PAIEMENT
      </h1>
      <p>
        Vous avez commandé 1 carte nature et évasion 3 € frais de port 0,30€
        pour un total de 3,30€
      </p>
      <form action="confirmation" className="paiement">
        <p>Nom du porteur de la carte</p>
        <p>
          <input type="text"></input>
        </p>
        <p>Numéro de carte banquaire</p>
        <p>
          <input type="text"></input>
        </p>
        <p>Date de validation</p>
        <p>
          <input type="text"></input>
        </p>
        <p>Numéro CSV</p>
        <p>
          <input type="text"></input>
        </p>
        <p className="button-visualisation">
          <button type="submit">valider le paiement</button>
        </p>
      </form>
      <Footer />
    </>
  );
}
export default ECurency;
