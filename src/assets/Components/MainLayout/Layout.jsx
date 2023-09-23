import { Outlet, useNavigation } from "react-router-dom";
import Nav from "../Navbar/Nav";

import Footer from "../Footer/Footer";

const Layout = () => {
  const navigate = useNavigation();
  return (
    <>
      <section>
        <Nav></Nav>
      </section>
      {navigate.state === "loading" ? (
        <div className="mx-auto text-center py-16"><span class="loading loading-dots loading-lg"></span></div>
      ) : (
        <div className="min-h-screen my-10">
          <Outlet></Outlet>
        </div>
      )}
      <Footer></Footer>
    </>
  );
};
export default Layout;
