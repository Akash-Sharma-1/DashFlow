import "./App.css";

//libs
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Layout from "./components/Layout";
import ShowcaseLayout from "./components/Layout";

//compos

function App() {
  return (
    <div className="App">
      <div
        className="row"
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          padding: "1em",
        }}
      >
        <Header></Header>

        <div className="col-12 grid-container" style={{ maxWidth: "1100px" }}>
          <ShowcaseLayout></ShowcaseLayout>
        </div>
      </div>
    </div>
  );
}

export default App;
