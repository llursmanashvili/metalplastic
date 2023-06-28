import React from "react";
import photo1 from "./door.jpg";
import { MDBBtn } from "mdb-react-ui-kit";
import "react-native";
import call from "react-native-phone-call/index";
function Body() {
  const triggercall = () => {
    const args = {
      number: " +995 599 95 56 94 ", // String value with the number to call
      prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call
      skipCanOpen: true, // Skip the canOpenURL check
    };

    call(args).catch(console.error);
  };
  return (
    <div
      className="p-5 text-center bg-image"
      style={{
        backgroundImage: `url(${photo1})`,
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
            <MDBBtn onClick={triggercall} href="" tag="a" outline size="lg">
              დარეკვა
            </MDBBtn>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Body;
