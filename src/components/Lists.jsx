const Lists = (props) => {
  return (
    <div style={props.style}>
      <ul className="list-group list-group-horizontal ">
        <li className="list-group-item">{props.nome}</li>
        <li className="list-group-item">{props.breed}</li>
        <li className="list-group-item">{props.age}</li>
      </ul>
    </div>
  );
};
export default Lists;
