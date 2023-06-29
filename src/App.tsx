import React from "react";
import Navigation from "./component/Navigation";
import "./App.scss";
import Introduction from "./component/Introduction";
import About from "./component/About";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import Loading from "./component/Loading";
import Footer from "./component/Footer";
import ModalDetailProject from "./component/ModalDetailProject";

const App: React.FC = () => {
  return (
    <>
      <header>
        <Navigation />
        <Introduction />
      </header>
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Loading />
      <ModalDetailProject />
    </>
  );
};

export default App;
