import React, {Component} from "react";
import ContactCard from "./ContactCard";
import "./App.css";

class App extends Component {
  render(){
    return (
      <>
      <ContactCard 
        name="John Wick" 
        phone="1800963369"
        email="JWick@continental.com"
        address="12345 Main Street, NY, NY, 11103"
        />
      <ContactCard
       name="London Tipton" 
       phone="1800354785"
       email="LondonT@TiptonHotel.com"
       address="12345 Hilton Street, San Francisco, CA, 11234"
      />

      <ContactCard />
      </>
    )
  }
}

export default App;