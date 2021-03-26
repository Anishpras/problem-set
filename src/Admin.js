import React, { useEffect, useState } from "react";
import { db } from "./firebase";

const Admin = () => {
  const [idea, setIdea] = useState([]);
  const fetchIdea = async () => {
    db.collection("problems")
      .get()
      .then((ideas) => {
        const data = ideas.docs.map((doc) => doc.data());
        setIdea(data);
      });
  };
  useEffect(() => {
    fetchIdea();
  }, []);
  return (
    <div className="admin">
      {idea &&
        idea.map((i) => {
          return (
            <div className="idea">
              <h4>{i.name}</h4>
              <h4>{i.problem}</h4>
              <h4>{i.contact}</h4>
              <h4>{i.email}</h4>
              <hr/>
            </div>
          );
        })}
    </div>
  );
};

export default Admin;
