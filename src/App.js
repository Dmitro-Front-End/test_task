import { chat } from "./api/api";
import { useEffect, useMemo, useState } from "react";
import "./App.css";
import { AddComments } from "./Components/AddComments/AddComments";
import { Comment } from "./Components/Comment/Comment";

function App() {
  const [commets, setComments] = useState([]);

  useEffect(() => {
    chat.getComments().then((resp) => {
      setComments(resp.data.comments);
    });
  }, []);

  const printComments = useMemo(() => {
    return commets.map((el) => (
      <Comment
        key={el.id}
        el={el}
        setComments={setComments}
        commets={commets}
      />
    ));
  }, [commets]);

  return (
    <div className="App">
      <div className="comments-content">{printComments}</div>
      <AddComments commets={commets} setComments={setComments} />
    </div>
  );
}

export default App;
