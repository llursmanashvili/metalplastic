import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { useState } from "react";
import item from "./f.png";
import { Link } from "react-router-dom";
import "./Navbars.css";

export default function Navbar() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <>
      <MDBNavbar
        className="Navbar"
        expand="lg"
        style={{ marginBottom: "50px" }}
      >
        <MDBContainer fluid>
          <Link to="/">
            <MDBNavbarBrand>
              <img src={item} alt="logo" />
            </MDBNavbarBrand>
          </Link>

          <MDBNavbarToggler
            className="Toggler"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0 ">
              <Link to="/abs">
                <MDBNavbarItem style={{ color: "black" }}>
                  <MDBNavbarLink>ჩვენ შესახებ</MDBNavbarLink>
                </MDBNavbarItem>
              </Link>
              <Link to="/contact">
                <MDBNavbarItem style={{ color: "black" }}>
                  <MDBNavbarLink>კონტაქტი</MDBNavbarLink>
                </MDBNavbarItem>
              </Link>

              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag="a" className="nav-link" role="button">
                    პროდუქცია
                  </MDBDropdownToggle>

                  <MDBDropdownMenu>
                    <Link to="/tech">
                      <MDBDropdownItem link>
                        მეტალო-პლასტმასის კარფ-ანჯარა
                      </MDBDropdownItem>
                    </Link>
                    <Link to="/tech">
                      <MDBDropdownItem link>
                        ალუმინის კარ-ფანჯარა
                      </MDBDropdownItem>
                    </Link>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
