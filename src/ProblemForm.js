import React, { useState } from "react";
import { db } from "./firebase";
import "./ProblemForm.css";
import test from "./test.svg";
import Kalp_virksh from './Kalp_virksh.png'

const ProblemForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [problem, setProblem] = useState("");
  const [contact, setContact] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("problems")
      .add({
        name: name,
        email: email,
        contact: contact,
        problem: problem,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setProblem("");
    setContact("");
  };
  return (
    <div className="problemform">
      <div className="header__div">
        <img className="logo__svg" src={Kalp_virksh} alt="logo" />
        <h1 className="form__header">Kalp Vriksh</h1>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__main">
          <label className="label__name">Name</label>
          <input
            required
            className="input__name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className="label__email">Email</label>
          <input
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="lable__contact">Contact Number</label>
          <input
            placeholder="Phone Number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          <label className="label__problem">Problem</label>
          <textarea
            required
            className="form__textarea"
            placeholder="Message"
            value={problem}
            onChange={(e) => setProblem(e.target.value)}></textarea>
          <div className="button__div">
            <button
              className="form__button"
              type="submit"
              style={{ background: loader ? "" : "" }}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProblemForm;
