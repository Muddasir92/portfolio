import { useState } from "react";
import "./portfolio.scss";
import Navbar from "./Navbar/Navbar"; 
import Foliobody from "./components/folioBody/folioBody";


function Portfolio() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <section className="navv">
        {" "}
        
        <Navbar theme={theme} setTheme={setTheme} />
        {/* <section id="home"> Home</section> */}
       
      </section>
      <section> <Foliobody/></section>

      {/* <section id="skill">Skills</section>
      <section id="project">Projects</section>
      <section id="education">Education</section>
      <section id="contact">Contact</section> */}
    </>
  );
}

export default Portfolio;
