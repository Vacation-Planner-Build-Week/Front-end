import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../Utilities/AxiosWithAuth";
import { AMesssage } from "./AMesssage";
import { useSelector } from "react-redux";

export const MessagePage = props => {
  const [allUserMsg, setAllUserMsg] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [senderName, setSenderName] = useState("");
  const [update, setupdate] = useState(false);

  const [message, setMessage] = useState({
    message: "",
    user_id: localStorage.getItem("userid"),
    receiver_id: 0
  });

  useEffect(() => {
    axiosWithAuth()
      .get(`users/${localStorage.getItem("userid")}/messages`)
      .then(res => {
        setAllUserMsg(res.data);
      })
      .catch(err => console.log(err));
  }, [update]);

  useEffect(() => {
    axiosWithAuth()
      .get("/users")
      .then(res => {
        setAllUsers(res.data.users);
      })
      .catch(err => console.log(err));
  }, [update]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log("SENDER", senderName);

    const person = allUsers.filter(ele => ele.user_name === senderName);
    console.log("ALLPEEPS:", allUsers);

    console.log("PERSON:", person);
    setMessage({ ...message, receiver_id: person[0].user_id });
    console.log("MSG", message);

    if (person) {
      axiosWithAuth()
        .post("/messages", message)
        .then(res => {
          console.log("SENT_MESSAGE", res);
          setupdate(!update);
        })
        .catch(err => console.log(err));
    }
  };
  const handleChange = e => {
    e.preventDefault();
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter Persons name"
          type="text"
          name="receiver_name"
          onChange={e => {
            setSenderName(e.target.value);
          }}
        />
        <input
          placeholder="Type a message"
          value={message.message}
          name="message"
          onChange={handleChange}
        />
        <button type="submit">Send</button>
      </form>
      {allUserMsg.map((ele, index) => (
        <AMesssage key={index} item={ele} />
      ))}
    </div>
  );
};