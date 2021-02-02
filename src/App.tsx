import Article from "./components/Article";
import User from "./components/User";
// style='display:grid; grid-template-columns:2fr 1fr'
const App:React.FC = ()=> {
  return (
    <div className="App">
      <div className="container" style={{display:'grid', gridTemplateColumns:'2fr 1fr'}}>
        <Article/>
        <User/>
      </div>
    </div>
  );
}

export default App