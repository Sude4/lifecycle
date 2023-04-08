import Counter from "./components/Counter";
import {useState} from "react";
function App() {
const [isVisible, setIsVısıble] = useState(true);
  return (
    <div className="App">
 {isVisible && <Counter/>}

  <button onClick={() => setIsVısıble(!isVisible)}>Toggle</button>
    </div>
  );
}

export default App;
