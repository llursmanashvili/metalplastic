import React from "react";
import "./contact.css";
import "react-native";
import call from "react-native-phone-call/index";
import { MDBIcon } from "mdb-react-ui-kit";

export default function Contact() {
  const triggercall = () => {
    const args = {
      number: " +995 599 95 56 94 ", // String value with the number to call
      prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call
      skipCanOpen: true, // Skip the canOpenURL check
    };

    call(args).catch(console.error);
  };
  const triggercalli = () => {
    const args = {
      number: " +995 558 55 58 99 ", // String value with the number to call
      prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call
      skipCanOpen: true, // Skip the canOpenURL check
    };

    call(args).catch(console.error);
  };

  return (
    <div className="contact">
      <div className="contact1">
        <div className="call">
          <p className="Colori">დაგვიკავშირდით მარტივად</p>
          <button className="box text-warning mb-3" onClick={triggercall}>
            <MDBIcon className="icon" fas icon="phone-alt" />
            ბატონი ზურა
          </button>
          <button className="box text-warning mb-3" onClick={triggercalli}>
            <MDBIcon className="icon" fas icon="phone-alt" />
            ბატონი გიზო
          </button>
        </div>
      </div>

      <p className="schedule">
        <MDBIcon className="Colori " far icon="calendar-alt" />
        <p className="Colori pt-4">სამუშაო დღეები</p>
        <p className="text-warning"> ორშაბათი: 9:00 AM – 8:00 PM </p>
        <p className="text-warning"> სამშაბათი: 9:00 AM – 8:00 PM</p>
        <p className="text-warning"> ოთხშაბათი: 9:00 AM – 8:00 PM</p>
        <p className="text-warning"> ხუთშაბათი: 9:00 AM – 8:00 PM</p>
        <p className="text-warning"> პარასკევი: 9:00 AM – 8:00 PM</p>
        <p className="text-warning"> შაბათი: 9:00 AM – 8:00 PM</p>
        <p className="text-warning"> კვირა: 9:00 AM – 8:00 PM</p>
      </p>
    </div>
  );
}
