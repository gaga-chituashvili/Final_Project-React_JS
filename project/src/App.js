import "./App.css";
import Approutes from "./Approutes";
import Header from "./component/navbar/Header";

function App() {
  return (
    <section className="flex flex-col justify-center items-center gap-y-[70px]">
     <Header/>
      <Approutes />
    </section>
  );
}

export default App;
