import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <>
      <Header logo={logo} />

      <ImageComponent>
        <img
          src="https://images.unsplash.com/photo-1730215194393-10c4b1c8f959?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="A dog sitting in front of a white wall"
          width="100%"
        />
      </ImageComponent>
      <ButtonComponent title="Press" style={{ backgroundColor: "green" }} />
    </>
  );
}

export default App;
