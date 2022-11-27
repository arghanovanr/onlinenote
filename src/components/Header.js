import React from "react";
import { MDBContainer, MDBNavbar, MDBNavbarBrand } from "mdb-react-ui-kit";

export default function App() {
  return (
    <>
      <MDBNavbar dark bgColor="primary">
        <MDBContainer fluid>
          <MDBNavbarBrand className="mx-auto">OnlineNotes</MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
