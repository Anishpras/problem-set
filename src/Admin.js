import React, { useEffect, useState } from "react";
import "./Admin.css";
import { db } from "./firebase";
import { Modal, Button, Input } from "@mantine/core";
import Kalp_virksh from "./Kalp_virksh.png";
const Admin = () => {
  const [idea, setIdea] = useState([]);
  const [opened, setOpened] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [secretCode, setSecretCode] = useState("");
  useEffect(() => {
    db.collection("problems")
      .orderBy("time", "desc")
      .onSnapshot((problem) => {
        setIdea(problem.docs.map((doc) => doc.data()));
      });
  }, []);

  const checkAdminPrivilege = () => {
    if (secretCode === process.env.REACT_APP_SECRET_KEY) {
      setIsAuthenticated(true);
      setOpened(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div>
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          title="Please enter your secret code.">
          <Input
            type="password"
            onChange={(e) => setSecretCode(e.target.value)}
          />
          <Button onClick={checkAdminPrivilege}>Submit</Button>
        </Modal>
      </div>
    );
  }

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
