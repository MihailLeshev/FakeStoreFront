import axios from "axios";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Contact from "./components/contact/Contact";
import EmailForm from "./components/emailform/Emailform";
import Lower from "./components/lower/Lower";
import Loginmenu from "./components/loginmenu/Loginmenu"
import Registerform from "./components/registerform/Registerform";
import Latestitems from "./components/latestitems/Latestitems";
class App extends React.Component {
  state = { details: [] };

  componentDidMount() {
    let data;
    axios
      .get("http://127.0.0.1:8000/")
      .then((res) => {
        data = res.data;
        this.setState({
          details: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/loginmenu" element={<Loginmenu />} />
            <Route path="/page3" element={<Contact />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/emailform" element={<EmailForm />} />
            <Route path="/" element={<Home />} />
            <Route path="/registerform" element={<Registerform />} />
            <Route path="/latestitems" element={<Latestitems />} />
          </Routes>
          <Lower />
        </div>
      </Router>
    );
  }
}

const LatestItem = () => {
  return <div>Latest Item Page</div>;
};

export default App;
