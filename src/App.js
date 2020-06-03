import React, {Component} from "react";
import ContactCard from "./ContactCard";
import "./App.css";

class App extends Component {
  render(){
    return (
      <>
      <ContactCard 
        name = "Ric Flair" 
        phone = "1(800)555-5555"
        email = "ricflair@wwe.com"
        address = "1300 Baxter St #100, Charlotte, NC 28204"
        />
      <ContactCard
       name="Larry Bird" 
       phone="1(593)555-5555"
       email="larrybird@nba.com"
       address="PO Box 540 Terre Haute, IN 47808"
      />

      <ContactCard />
      </>
    )
  }
}

export default App;