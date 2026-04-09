import "./App.css";
import FunFactCard from "./FunFactCard";
function App() {
  return (
    <>
      <h1>Facts App</h1>
      <div className="container">
        <div className="fact">
          <h2>Leo's Facts</h2>
          <FunFactCard fact="I am Filipino." />
          <FunFactCard fact="I like to play Tekken 8." />
          <FunFactCard fact="I like spaghetti." />
        </div>
        <div className="fact">
          <h2>Darien's Facts</h2>
          <FunFactCard fact="I like spicy food." />
          <FunFactCard fact="I have visited California." />
          <FunFactCard fact="I like to play Minecraft." />
        </div>
      </div>
    </>
  );
}

export default App;
