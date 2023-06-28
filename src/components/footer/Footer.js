import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <MDBFooter className="text-center text-lg-start text-muted">
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span></span>
            </div>
          </section>

          <section className="">
            <MDBContainer className="text-center text-md-start mt-5">
              <MDBRow className="mt-3">
                <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-2">
                  <h6 className="text-uppercase fw-bold mb-4">პროდუქცია</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      მეტალო-პლასტმასის კარ-ფანჯარა
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      ალუმინის კარ-ფანჯარა
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      საკეტები
                    </a>
                  </p>
                </MDBCol>

                <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">გვერდები</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      მთავარი
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      ჩვენ შესახებ
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      კონტაქტი
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      სერვისები
                    </a>
                  </p>
                </MDBCol>

                <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">კონტაქტი</h6>

                  <p>
                    <MDBIcon
                      color="success"
                      icon="phone-alt"
                      className="me-3"
                    />{" "}
                    +995 599 95 56 94
                  </p>
                  <p>
                    <MDBIcon
                      color="success"
                      icon="phone-alt"
                      className="me-3"
                    />{" "}
                    +995 558 55 58 99
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>
        </MDBFooter>
      </div>
    </>
  );
}
