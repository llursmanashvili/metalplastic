import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardGroup,
} from "mdb-react-ui-kit";
import "./aboutus.css";
import service from "./makeof.jpg";
import service1 from "./transport.jpg";
import service2 from "./final.jpg";
import { MDBBtn } from "mdb-react-ui-kit";
import photo2 from "./ml13.jpg";
import call from "react-native-phone-call/index";
import { useEffect } from "react";

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const triggercall = () => {
    const args = {
      number: " +995 599 95 56 94 ", // String value with the number to call
      prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call
      skipCanOpen: true, // Skip the canOpenURL check
    };

    call(args).catch(console.error);
  };
  return (
    <div>
      <h3 className="texti">
        ჩვენი კომპანია გთავაზობთ მეტალო-პლასტმასის და ალუმინის კარ-ფანჯრების
        ფართო არჩევანს.მრავალწლიანი გამოცდილება არის ჩვენი პროდუქტის ხარისხის
        გარანტია,რომელსაც გთავაზობთ ჩვენ.ასევე ჩვენს სერვისებში შედის ქვემოთ
        მითითებული საქმიანობები,რომლეთა ღირებულებაც სრულადაა დამოკიდებული
        დამკვეთის მოთხოვნებზე,ამიტომ დაგვიკავშირდით და მიიღეთ სრული ინფორმაცია
        ჩვენი მომსახურებისა და თქვენთვის სასურველი პროდუქტის შესახებ.
      </h3>
      <MDBCardGroup>
        <MDBCard>
          <MDBCardImage
            className="Service"
            src={service}
            alt="..."
            position="top"
          />
          <MDBCardBody>
            <MDBCardTitle>დამზადება</MDBCardTitle>
            <MDBCardText>
              კარ-ფანჯრების დამზადებას ესაჭიროება მინიმუმ ორი სამუშაო
              დღე,დამზადების ვადა და ღირებულება დამოკიდებულია შეკვეთის
              მასიურობაზე.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>

        <MDBCard>
          <MDBCardImage
            className="Service"
            src={service1}
            alt="..."
            position="top"
          />
          <MDBCardBody>
            <MDBCardTitle>ადგილზე მიტანა</MDBCardTitle>
            <MDBCardText>
              ჩვენ გთავაზობთ დამზადებული პროდუქციის უსაფრთხო ტრანსპორტირების
              სერვისს თბილისსა და მის შემოგარენში.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>

        <MDBCard>
          <MDBCardImage
            className="Service"
            src={service2}
            alt="..."
            position="top"
          />
          <MDBCardBody>
            <MDBCardTitle>დამონტაჟება</MDBCardTitle>
            <MDBCardText>
              დამზადებული პროდუქციის ექსპლუატაციაში მოსაყვანად საჭიროა მისი
              სწორად და დაუზიანებლად დამონტაჟება,ამ ყველაფერს კი ჩვენი გუნდის
              წევრები გაუმკლავდებიან.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage: `url(${photo2})`,
          margin: "20px",
          marginTop: "60px",
          borderRadius: "20px",
          height: "400px",
        }}
      >
        <div
          className="mask"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", height: "500px" }}
        >
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">დაგვირეკეთ ახლავე</h1>
              <h4 className="mb-2">ნუ დაკარგავთ დროს</h4>

              <MDBBtn onClick={triggercall} href="" tag="a" outline size="lg">
                დარეკვა
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
