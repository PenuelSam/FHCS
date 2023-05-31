import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Form from "./components/form/Form"
import Header from "./components/header/Header"
import Navbar from "./components/navbar/Navbar"
import Services from "./components/services/Services"
import Testimonies from "./components/testimonies/Testimonies"


const App = () => {
  return (
    <div className="app">
    <Navbar />
    <Form />
    <Header />
    <About />
    <Testimonies />
    <Services />
    <Contact />
    <Footer />
    </div>
  )
}

export default App