const HeroSection = (props) => {
  return (
    <div className={`${props.className}`} style={props.style}>
      <h1>{props.title}</h1>
      <p>{props.paragraphHeroSection}</p>
      <button style={props.buttonStyle}>{props.buttonText}</button>
    </div>
  );
};

export default HeroSection;
