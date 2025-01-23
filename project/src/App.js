import "./App.css";
import Approutes from "./Approutes";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";

function App() {
  return (
    <section className="flex flex-col justify-center items-center pt-[130px] bg-mainbackcolor">
      <Header/>
      <Approutes />
      <Footer/>
    </section>
  );
}

export default App;
