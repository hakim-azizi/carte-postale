function Paiement() {
  return (
    <>
      <p>Entrez vos informations de livraison</p>
      <form action="e-curency" className="paiement">
        <p>Nom :</p>
        <p>
          <input type="text"></input>
        </p>
        <p>Prénom :</p>
        <p>
          <input type="text"></input>
        </p>
        <p>Adresse :</p>
        <p>
          <input type="text"></input>
        </p>
        <p>Code postal :</p>
        <p>
          <input type="text"></input>
        </p>
        <p>Ville :</p>
        <p>
          <input type="text"></input>
        </p>
        <p>Pays :</p>
        <p>
          <input type="text"></input>
        </p>
        <p className="button-visualisation">
          <button type="submit">Validez les informations de livraison</button>
        </p>
      </form>
    </>
  );
}

export default Paiement;
