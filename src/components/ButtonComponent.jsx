const ButtonComponent = (props) => {
  return (
    <div>
      <button style={props.style}>
        <p style={props.paragrafo}>{props.title}</p>
      </button>
    </div>
  );
};
export default ButtonComponent;
