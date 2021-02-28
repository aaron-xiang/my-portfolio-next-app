import styled from "styled-components";
import NavLink from "./NavLink";

const links = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Projects",
    link: "/projects",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

const Container = styled.nav`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.2rem;
  background: rgb(41, 41, 41) !important;
  padding: 20px;
  height: 60px !important;
`;

function Navbar() {
  return (
    <Container className="navbar fixed-top navbar-expand-md navbar-dark bg-dark">
      <div className="collapse navbar-collapse justify-content-center">
        <ul className="navbar-nav">
          {links.map((link) => (
            <NavLink key={link.title} link={link.link} title={link.title} />
          ))}
        </ul>
      </div>
    </Container>
  );
  // return (
  //   <nav
  //     className={`{styles.title} navbar fixed-top navbar-expand-md navbar-dark bg-dark`}
  //   >
  //     <div
  //       className="collapse navbar-collapse justify-content-center"
  //       id="navbarNav"
  //     >
  //       <ul className="navbar-nav">
  //         <li className="nav-item">
  //           <a className="nav-link" href="#">
  //             Home
  //           </a>
  //         </li>
  //         <li className="nav-item">
  //           <a className="nav-link" href="#">
  //             About
  //           </a>
  //         </li>
  //         <li className="nav-item">
  //           <a className="nav-link" href="#">
  //             Projects
  //           </a>
  //         </li>
  //         <li className="nav-item">
  //           <a className="nav-link" href="#">
  //             Contact
  //           </a>
  //         </li>
  //       </ul>
  //     </div>
  //   </nav>
  // );
}

export default Navbar;
