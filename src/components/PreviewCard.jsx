import { useContext } from "react";
import { TextContext } from "../context/Context";
import { useLocation } from "react-router-dom";
import Picture from "./Picture";

import "../styles/preview-card.css";

function PreviewCard() {
  const { formData } = useContext(TextContext);

  const location = useLocation();

  return (
    <section className="section-preview">
      <Picture />
      <article className="carte-preview carte-preview-r">
        <div className="preview-msg preview-msg-l">
          <p className="p-msg">{formData.text}</p>
          <p className="p-name">{formData.dest}</p>
        </div>
        <div className="preview-msg preview-msg-r">
          <p className="p-addres">{formData.identity}</p>
          <p className="p-addres">{formData.address}</p>
        </div>
      </article>
    </section>
  );
}

export default PreviewCard;
// {message}
