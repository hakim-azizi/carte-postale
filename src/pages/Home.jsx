import "../styles/home.css";
import "../styles/footer.css";
import "../styles/header.css"

function Home() {
  return (
    <>
      <header>
        <h1>Cartes Postales Nature et Déconnexion</h1>
      </header>
      <main>
        <section>
          <h2>Comment ça marche ?</h2>
          <p>
            Choisissez votre <em>photo</em> préférée parmi notre collection
            inspirée par la <strong>nature</strong> et la{" "}
            <strong>tranquillité</strong>. Ensuite, remplissez le texte de votre
            message personnalisé pour ajouter une touche personnelle à chaque
            carte postale.
          </p>
        </section>
        <section>
          <h2>Pourquoi choisir nos cartes postales ?</h2>
          <p>
            Nos cartes postales sont conçues pour vous aider à{" "}
            <strong>reconnecter</strong> avec vos proches tout en célébrant la{" "}
            <em>beauté</em> de la nature. Envoyer une carte postale est un moyen{" "}
            <strong>simple</strong> et <em>authentique</em> de montrer que vous
            pensez à eux.
          </p>
          <p>
            Fabriquées avec des matériaux de haute qualité, nos cartes sont à la
            fois <strong>durables</strong> et <em>écologiques</em>. Chaque
            design est soigneusement sélectionné pour capturer la{" "}
            <strong>sérénité</strong> et l'<em>évasion</em> que seul un contact
            avec la nature peut offrir.
          </p>
        </section>
        <section>
          <h2>Personnalisation et Livraison</h2>
          <p>
            Avec notre interface conviviale, il est facile de personnaliser
            chaque carte avec votre propre message. Nous offrons également une{" "}
            <strong>livraison rapide</strong> pour garantir que vos cartes
            arrivent à temps pour toute occasion spéciale.
          </p>
          <p>
            Que ce soit pour un anniversaire, une fête ou simplement pour dire
            bonjour, nos cartes postales sont le choix parfait pour{" "}
            <em>partager</em> un moment de <strong>paix</strong> et de{" "}
            <em>réflexion</em> avec ceux que vous aimez.
          </p>
        </section>
      </main>
    </>
  );
}

export default Home;
