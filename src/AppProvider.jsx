import { useState } from "react";
import { TextContext } from "./context/Context";
import { images } from "./data";

const AppProvider = ({ children }) => {

  const min = Math.ceil(0);
  const max = Math.floor(images.length);

  const i = Math.floor(Math.random() * (max - min)) + min;
  const [img, setImg] = useState(images[i].src);





  const [formData, setFormData] = useState({
    text: "",
    identity: "",
    address: "",
    dest: "",
    Image: img,
  });

  function handleForm(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleClic(pict) {

    setFormData((prev) => ({
      ...prev,
      Image:pict,
    }));
    
  }

  return (
    <TextContext.Provider value={{ formData, handleForm, handleClic }}>
      {children}
    </TextContext.Provider>
  );
};

export default AppProvider;
