import "./App.css";
import Header from "./components/Header";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";
import HeroSection from "./components/HeroSection";
import Lists from "./components/Lists";

function App() {
  return (
    <>
      <Header
        link="https://images.unsplash.com/photo-1422565096762-bdb997a56a84?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        homeLink="https://images.unsplash.com/photo-1422565096762-bdb997a56a84?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        home="HOME"
        placeholder="Cosa vuoi cercare?"
        buttonText="invia"
      >
        <img
          src="https://images.unsplash.com/photo-1422565096762-bdb997a56a84?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="immagine nav bar"
          width="5%"
        />
      </Header>
      <HeroSection
        className="text-center fs-5  mx-5 px-5 my-5"
        title="DOG SITTING"
        paragraphHeroSection="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, quis
        laboriosam! Laboriosam libero nostrum ducimus illum amet numquam
        mollitia cupiditate ex quis qui. Dicta, consectetur velit culpa
        molestias facilis ea.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, quis
        laboriosam! Laboriosam libero nostrum ducimus illum amet numquam
        mollitia cupiditate ex quis qui. Dicta, consectetur velit culpa
        molestias facilis ea.
        
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, quis
        laboriosam! Laboriosam libero nostrum ducimus illum amet numquam
        mollitia cupiditate ex quis qui. Dicta, consectetur velit culpa
        molestias facilis ea.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, quis
        laboriosam! Laboriosam libero nostrum ducimus illum amet numquam
        mollitia cupiditate ex quis qui. Dicta, consectetur velit culpa
        molestias facilis ea."
        buttonStyle={{
          borderRadius: "8px",
          border: "none",
          width: "200px",
          height: "100px",
          fontSize: "20px",
          fontWeight: "bold",
          backgroundColor: "aqua",
          color: "darkblue"
        }}
        buttonText="CANDIDATI QUI!!!"
      />

      <ImageComponent>
        <img
          src="https://images.unsplash.com/photo-1730215194393-10c4b1c8f959?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="A dog sitting in front of a white wall"
          width="100%"
        />
      </ImageComponent>

      <Lists
        nome="Sole"
        breed="Golden Retriver"
        age="5 anni"
        style={{
          textAlign: "center",
          marginLeft: "850px",
          marginTop: "50px"
        }}
      />
      <Lists
        nome="Watson"
        breed="West Highland white terrier"
        age="3 anni"
        style={{ textAlign: "center", marginLeft: "800px" }}
      />
      <Lists
        nome="Mapo"
        breed="Meticcio"
        age="12 anni"
        style={{ textAlign: "center", marginLeft: "850px" }}
      />
      <Lists
        nome="Virgola"
        breed="Bassotto"
        age="1 anni"
        style={{ textAlign: "center", marginLeft: "850px" }}
      />

      <ButtonComponent
        title="SCEGLI!"
        paragrafo={{
          color: "darkgreen",
          fontSize: "50px"
        }}
        style={{
          borderRadius: "10px",
          backgroundColor: "lightgreen",
          width: "500px",
          border: "none",
          marginLeft: "750px",
          marginTop: "30px"
        }}
      />
    </>
  );
}

export default App;
