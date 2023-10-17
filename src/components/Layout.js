import Footer from "./Footer";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div>
      <Nav/>
      <div>{children}</div>
      <Footer/>
    </div>
  );
};

export default Layout;