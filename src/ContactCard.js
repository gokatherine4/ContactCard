import React, { Component } from "react";

class ContactCard extends Component {
    render() {
        return ( 
        <div
        style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '30vh'}}>

            <ul>
            <h1>{this.props.name}</h1>
                <li>Phone: {this.props.phone}</li>
                <li>Email: {this.props.email}</li>
                <li>Address: {this.props.address}</li>

            </ul>
        </div>
        );
    }
}

export default ContactCard;