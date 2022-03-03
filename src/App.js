import "./App.css";

// Browser Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Animate css
import "animate.css";

// Import Loader
import Loader from "./pages/loader/loader";

// Import Header & Footer
import Header from "./pages/header/header";
import Footer from "./pages/footer/footer";

// Import Other Pages
import Home from "./pages/home/home";
import Gallery from "./pages/gallery/gallery";
import About from "./pages/about/about";
import Weeklyads from "./pages/weeklyads/weeklyads";
import Contact from "./pages/contact/contact";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import AdminHeader from "./pages/admin/header/header";
import AdminFooter from "./pages/admin/footer/footer";
import AdminDashboard from "./pages/admin/dashboard/dashboard";
import AdminProduct from "./pages/admin/product/product";
import AdminMenu from "./pages/admin/menu/menu";
import SignupVerified from "./pages/signup-verified/signup-verified";

function App() {
  return (
    <Router>
      <Loader />
       <Header />
      <Switch>
        <Route path="/gallery">
          <div className="gallerypage sticky_header">
            <Gallery />
          </div>
        </Route>
        <Route path="/about">
          <div className="aboutpage sticky_header">
            <About />
          </div>
        </Route>
        <Route path="/weeklyads">
          <div className="weeklypage sticky_header">
            <Weeklyads />
          </div>
        </Route>
        <Route path="/contact">
          <div className="contactpage sticky_header">
            <Contact />
          </div>
        </Route>
        <Route path="/login">
          <div className="loginpage sticky_header">
            <Login />
          </div>
        </Route>
        <Route path="/register">
          <div className="loginpage sticky_header">
            <Signup />
          </div>
        </Route>
        <Route path="/emailisverified">
          <div id="homepage" className="homepage sticky_header">
            <SignupVerified />
          </div>
        </Route>
        <Route path="/">
          <div id="homepage" className="homepage sticky_header">
            <Home />
          </div>
        </Route>
      </Switch>
      <Footer />
      {/* <AdminHeader />
      <Switch>
        <Route path="/product">
          <AdminProduct />
        </Route>
        <Route path="/menu">
          <AdminMenu />
        </Route>
        <Route path="/">
          <AdminDashboard />
        </Route>
      </Switch>
      <AdminFooter /> */}
    </Router>
  );
}

export default App;
