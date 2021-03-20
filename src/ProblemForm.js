import React, { useState } from "react";
import { db } from "./firebase";
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
    <form className="form" onSubmit={handleSubmit}>
      <h1>Problem</h1>

      <label>Name</label>
      <input
        required
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        required
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Contact Number</label>
      <input
        placeholder="Phone Number"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />
      <label>Problem</label>
      <textarea
        required
        placeholder="Message"
        value={problem}
        onChange={(e) => setProblem(e.target.value)}></textarea>

      <button type="submit" style={{ background: loader ? "" : "" }}>
        Submit
      </button>
    </form>
  );
};

export default ProblemForm;
