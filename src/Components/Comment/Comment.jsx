import "./comment.css";

export const Comment = ({ el, commets, setComments }) => {
  const delComment = () => {
    const filterCommenta = commets.filter((elem) => elem.id !== el.id);
    setComments(filterCommenta);
  };

  return (
    <div key={el.id} className="comment">
      <h1>{el.user.username[0].toUpperCase()}</h1>
      <h2>{el.user.username[0].toUpperCase() + el.user.username.slice(1)}</h2>
      <p>{el.body}</p>
      <button onClick={delComment}>X</button>
    </div>
  );
};
