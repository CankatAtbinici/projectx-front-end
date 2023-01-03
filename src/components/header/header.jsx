import React, { useState } from "react";
import { Form, FormGroup, Input } from "reactstrap";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function Header(props) {

    library.add(faBars);
  // states
  const [dropdownOpen, setDropdownOpen] = useState(false);

  //functions
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div>
      <aside>
        <div className="row header-row">
          <div className="col-4 header-left-side">
            <img
              src=""
              alt=""
              style={{
                height: "50px",
                width: "100px",
              }}
            />
          </div>
          <div className="col-4 header-middle-side">
            <Form>
              <FormGroup>
                <Input
                  type="search"
                  name="search"
                  id="searchBar"
                  placeholder="Arama yapın"
                />
              </FormGroup>
            </Form>
          </div>
          <div className="col-4 header-right-side">
            <div className="header-user-right-bar">
              <div className="d-flex header-user-right-bar-dropdown-field">
                <Dropdown isOpen={dropdownOpen} toggle={toggle} >
                  <DropdownToggle caret  className="header-user-right-bar-dropdown-field-dropdown-toggle"> <FontAwesomeIcon icon={faBars} /> <FontAwesomeIcon icon={faUser} /></DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem> <Link to= "/register"  style={{ textDecoration :"none " , color:"black"}} >Kayıt Ol</Link> </DropdownItem>
                    <DropdownItem> <Link to= "/login"  style={{ textDecoration :"none " , color:"black"}} > Giriş Yap </Link></DropdownItem>
                    <DropdownItem> <Link to= "/about-us"  style={{ textDecoration :"none " , color:"black"}} > Projectx Nedir? </Link></DropdownItem>
                    <DropdownItem> <Link to= "/"  style={{ textDecoration :"none " , color:"black"}} > Anasayfa </Link></DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Header;
