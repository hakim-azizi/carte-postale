import { useContext } from "react";
import { images } from "../data";
import { TextContext } from "../context/Context";

import Picture from "../components/Picture";
import Text from "../components/Text";

import "../styles/face-avant.css";

function FaceAvant() {
  const { handleClic } = useContext(TextContext);
  return (
    <>
      <h1 className="title-face-avant">Photographie :</h1>
      <h2>Choisissez la photo qui vous convient :</h2>
      <section className="affich-card">
        <article className="image">
          <Picture />
        </article>
        <article className="text">
          <Text
            messageEnter={
              "Dans la prochaine étape vous pourrez rédiger votre message ..."
            }
          />
        </article>
      </section>
      <section className="button-picture">
        <form action="face-arriere">
          <button type="submit">validez le choix de votre photo</button>
        </form>
      </section>

      <section>
        <article className="affich-picture">
          {images.map((value) => (
            <figure key={value.id}>
              <img
                src={value.src}
                onClick={() => {
                  handleClic(value.src);
                }}
              />
            </figure>
          ))}
        </article>
      </section>
    </>
  );
}

export default FaceAvant;
