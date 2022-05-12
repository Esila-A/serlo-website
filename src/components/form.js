import React, { useState, useEffect, useCallback } from "react";
// import { send } from "emailjs-com";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";

const SubmitButton = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  // Create an event handler so you can call the verification on button click event or form submit
  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      return;
    }

    const token = await executeRecaptcha("yourAction");
    // Do whatever you want with the token
  }, []);

  // You can use useEffect to trigger the verification as soon as the component being loaded
  useEffect(() => {
    handleReCaptchaVerify();
  }, [handleReCaptchaVerify]);

  return (
    <button className="submit" onClick={handleReCaptchaVerify}>
      WYŚLIJ
    </button>
  );
};

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const [notice, setNotice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // send(
    //   "service_0ru1bbl",
    //   "template_ys9ci8a",
    //   form,
    //   "user_y5LyArSJd8PVIrx90Mux4"
    // )
    //   .then(() => {
    //     setNotice("success");
    //   })
    //   .catch(() => {
    //     setNotice("error");
    //   });
  };

  return (
    <GoogleReCaptchaProvider reCaptchaKey="">
      <div className="attempt" id="form">
        <div className="form">
          <h2 className="form_header">FORMULARZ KONTAKTOWY</h2>
          <form id="form" className="form_content" onSubmit={handleSubmit}>
            <label className="requests">
              <p className="text">Imię</p>
              <input
                type="text"
                name="name"
                placeholder="wpisz swoje imię"
                value={form.name}
                onChange={handleChange}
                className="input-fields input-fields--one"
                required={true}
              />
            </label>
            <label className="requests">
              <p className="text">Email</p>
              <input
                type="email"
                name="email"
                placeholder="wpisz swój email"
                value={form.email}
                onChange={handleChange}
                className="input-fields input-fields--one"
                required={true}
              />
            </label>
            <label className="requests">
              <p className="text">Wiadomość</p>
              <textarea
                name="message"
                placeholder="wpisz wiadomość"
                value={form.message}
                onChange={handleChange}
                className="input-fields input-fields--two"
                required={true}
              />
            </label>
            {!notice ? <SubmitButton /> : ""}
            {notice === "success" ? <p className="positive">WYSŁANO!</p> : ""}
            {notice === "error" ? (
              <p className="negative">
                COŚ POSZŁO NIE TAK... SPRÓBUJ JESZCZE RAZ!
              </p>
            ) : (
              ""
            )}
          </form>
        </div>
      </div>
    </GoogleReCaptchaProvider>
  );
};

export default Form;
