import { useEffect, useState } from "react";
import "./addComments.css";
import { local } from "../../local/local";
import id from "shortid";

const userName = "Myname";

export const AddComments = ({ commets, setComments }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    const textFromlocal = local.getText();
    if (textFromlocal === null) return;
    setText(textFromlocal);
  }, []);

  const change = (e) => {
    const v = e.target.value;
    setText(v);
    local.setText(v);
  };

  const addNewComment = () => {
    const newComments = [
      ...commets,
      {
        id: id(),
        body: text,
        postId: id(),
        user: {
          id: id(),
          username: userName,
        },
      },
    ];

    setComments(newComments);
  };

  return (
    <div className="add-comments-content">
      <textarea value={text} placeholder="text" onChange={change}></textarea>
      <button onClick={addNewComment}>Send</button>
    </div>
  );
};
