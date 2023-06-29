import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import "./card.css";
import plastic from "./plastic.jpg";
import alumin from "./alumin.jpg";
import { Link } from "react-router-dom";
export default function Card() {
  return (
    <>
      <Link to="/aluminium">
        <MDBCard className="Cardi">
          <MDBRow>
            <MDBCol>
              <MDBCardImage className="imgi" src={alumin} alt="..." fluid />
            </MDBCol>
            <MDBCol md="10" className="CardBody">
              <MDBCardBody>
                <MDBCardTitle>ალუმინის კარ-ფანჯარა</MDBCardTitle>
                <MDBCardText>
                  ალუმინისგან დამზადებული კარ-ფანჯარა წარმოადგენს შედარებით მყარ
                  კონსტრუქციას,რომელიც ძნელად{" "}
                  <p>დეფორმირდება,იგი უზრუნველყოფს თქვენს დაცულობას.</p>
                </MDBCardText>
                <MDBCardText>
                  <p>დაკლიკეთ და იხილეთ დეტალური ინფორმაცია</p>
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </Link>
      <Link to="/metalplastic">
        <MDBCard className="Cardi">
          <MDBRow>
            <MDBCol>
              <MDBCardImage className="imgi" src={plastic} alt="..." fluid />
            </MDBCol>
            <MDBCol md="10" className="CardBody">
              <MDBCardBody>
                <MDBCardTitle>მეტალო-პლასტმასის კარ-ფანჯარა</MDBCardTitle>
                <MDBCardText>
                  მეტალო-პლასტმასის კარ-ფანჯარა ერთ-ერთი საუკეთესო საშუალებაა
                  ხმაურისა და სიცივისგან თავის
                  <p>
                    ასარიდებლად,ამავდროულად კომფორტული და მოსახერხებელია
                    გამოსაყენებლად.
                  </p>
                </MDBCardText>
                <MDBCardText>
                  <small className="text-muted">
                    <p>დაკლიკეთ და იხილეთ დეტალური ინფორმაცია</p>
                  </small>
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </Link>
    </>
  );
}
