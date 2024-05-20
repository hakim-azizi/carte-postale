import { useContext } from "react";
import { TextContext } from "../context/Context";

import "../styles/picture.css";
function Picture() {
  const { formData } = useContext(TextContext);
  return (
    <>
      <figure className="picture1">
        <img src={formData.Image} />
      </figure>
    </>
  );
}

export default Picture;
