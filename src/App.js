import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Service from "./Page/Service";
import Feature from "./Page/Feature";
import Home from "./Page/Home";
import Product from "./Page/Product";
import Testimonial from "./Page/Testimonial";
import Faq from "./Page/Faq";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Service />
      <Feature />
      <Product />
      <Testimonial />
       <Faq  />
       <Footer />
    </div>
  );
}

export default App;
