import "./App.css";
import Approutes from "./Approutes";
import Navbar from "./component/Navbar";

function App() {
  
  return (
    <section className="flex flex-col justify-center items-center gap-y-[70px]">
      <Navbar/>
     <Approutes/>
    </section>
  );
}

export default App;
