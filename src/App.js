import Navbar from "./components/Nav";
import Hero from "./components/Hero";
import Skills from "./components/Jumbo";
import Projects from "./components/Projects";
import ContactUs from "./components/Contact";
import GlobalStyles from "./components/styledComponent/Global";

function App() {
  console.log(process.env.REACT_APP_SPACE_ID);
  return (
    <>
      <GlobalStyles />
      <header className="App-header">
        <Navbar />
        {/* we need the navbar with links to git fm and twitter */}
        <Hero />
      </header>
      <section>
        {/* this is language listing section */}

        <Skills />
      </section>
      <section>
        {/* this is project section */}
        <Projects />
      </section>
      <section>
        {/* this is contact section */}
        <ContactUs />
      </section>
      <footer>{/* footer with like navbar */}</footer>
    </>
  );
}

export default App;
