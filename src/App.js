import "./App.css";
import Menu from "./components/Menu/Menu.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div id="page">
      <header style={{ paddingLeft: "30px" }}>Header</header>
      <nav>
        <Menu></Menu>
      </nav>
      <main>
        <Main> </Main>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
