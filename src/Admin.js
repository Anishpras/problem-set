import React, { useEffect, useState } from "react";
import "./Admin.css";
import { db } from "./firebase";
import Kalp_virksh from "./Kalp_virksh.png";
const Admin = () => {
  const [idea, setIdea] = useState([]);

  useEffect(() => {
    db.collection("problems")
      .orderBy("time", "desc")
      .onSnapshot((problem) => {
        setIdea(problem.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <div className="admin">
      <div className="admin__main">
        <img className="logo" src={Kalp_virksh} alt="logo" />
      </div>
      <h1 className="admin__text"> Kalp Vriksh Admin Panel</h1>

      <div className="main">
        {idea &&
          idea.map((i) => {
            return (
              <div className="idea">
                <div className="idea__card">
                  <h4>{i.name}</h4>
                  <h4>{i.problem}</h4>
                  <h4>{i.contact}</h4>
                  <h4>{i.email}</h4>
                  <h4>{i.time.toDate().toString()}</h4>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Admin;
