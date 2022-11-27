import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function App(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <MDBCard className="m-5">
      <MDBCardBody>
        <MDBCardTitle>{props.title}</MDBCardTitle>
        <MDBCardText>{props.content}</MDBCardText>
        <MDBBtn onClick={handleClick} color="danger" floating tag="a">
          <MDBIcon fas icon="trash" />
        </MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}
