import "semantic-ui-css/semantic.min.css";
import React, { Component } from "react";
import { Button, Form, Container } from "semantic-ui-react";
import axios from 'axios'

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    axios.post('https://sheet.best/api/sheets/da65018e-5f53-4f39-abf1-9a005170b0f5', this.state)
    .then(response => {
      console.log(response)
      alert('Your message has been recorded');
    })
  }

  render() {
    const { name, email, message } = this.state;
    return (
      <div class="contactus">
            <p className='contactus'>
              We'd love to hear from you!
              Please feel free to reach out to us if you have any questions or
              concerns about your orders.
             </p>
      <Container className="container">
        <Form className="contactform" onSubmit={this.submitHandler}>
            <Form.Field>
              <label>Name</label>
              <input
                placeholder="Enter your name"
                type="text"
                name="name"
                value={name}
                onChange={this.changeHandler}
              />
            </Form.Field>
            <Form.Field>
              <label>Email</label>
              <input
                placeholder="Email"
                type="text"
                name="email"
                value={email}
                onChange={this.changeHandler}
              />
            </Form.Field>
            <Form.Field >
              <label>Message</label>
              <textarea
                placeholder="Message"
                type="text"
                name="message"
                value={message}
                onChange={this.changeHandler}
              />
            </Form.Field>
          <Button color="black" type="submit" className='submitgoogle'>
            Submit
          </Button>
        </Form>
      </Container>
      </div>
    );
  }
}

// import { useState } from 'react'
// import axios from 'axios'

// function Contact(){

// const [gform , setGForm] = useState({
//   formName: '',
//   formEmail: '',
//   formMessage: ''

// })
// console.log(gform)

// const myRequest = (url) => {
//   let response;
//   try {
//     response = axios.post(url)
//   } catch (e) {
//     response = e;
//   }
//   console.log(response)
// }

// const handleSubmit = e => {
//     e.preventDefault()
//     const data = {
//           ...gform
//         }
//     const id = "1FAIpQLSfOgOTBVZgIsPRGRnBJXW_AEVgVyD3iaZO3tfQQ1gWqsUBVcQ" //YOUR FORM ID
//     const formUrl = "https://docs.google.com/forms/d/"+ id +"/formResponse";
//     const queryString = require('query-string')
//     const queryForm = queryString.stringify({
//           url: formUrl,
//           query: data
//         })
//     myRequest(queryForm )

//   }
// const handleChange = (e) =>{
//   setGForm({...gform, [e.target.id]: e.target.value})
// }


