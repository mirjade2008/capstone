import React from 'react'
import '../styles/Contact.css';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  render() {
    return(
      <div className="App">
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }

  onNameChange(event) {
    this.setState({name: event.target.value})
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onMessageChange(event) {
    this.setState({message: event.target.value})
  }

  handleSubmit(event) {
  }
}

export default App;




// function Contact() {
//     return (
//         <div
//             style={{
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 height: '100vh'
//             }}
//         >
//            <h1>Contact Us</h1> 
//         </div>
//     );
// };

// export default Contact;


// import React, { Component } from 'react';
// export default class contact extends Component {
//   constructor (props){
//     super(props)
//     this.onChangeName = this.onChangeName.bind(this);
//     this.onChangeEmail = this.onChangeEmail.bind(this);
//     this.onChangeQuestion = this.onChangeQuestion.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//     this.state = {
//         name: " ",
//         email: " ",
//         comment: " ",
//       }
//     }

//   onChangeName(e){
//     this.setState({
//       name: e.target.value
//     })
//   }
//   onChangeEmail(e){
//     this.setState({
//       email: e.target.value
//     })
//   }
//   onChangeQuestion(e){
//     this.setState({
//       comment: e.target.value
//     })
//   }
//   onSubmit(e){
//     e.preventDefault();
//     const contact ={
//       name: this.state.name,
//       email: this.state.email,
//       comment: this.state.comment,
//     }
//     console.log(contact)
//     this.props.history.push('/');
    
//     this.setState({
//         name: '',
//         email: '',
//         comment: ''
//     })
//     window.alert('Thank you for your inquiry')
//     console.log(contact)
//   }
//   render() {
//     return (
//       <div>
//       <div className="contactContainerReturn">
//           <h3 className='text-center'>Contact Us</h3>
//           <div className="containerContact">
//             <div className="contentContact">
//             <form id='contact-form' onSubmit={this.onSubmit}>
//               <div className="form-group">
//                 <label className="contact-label">Name: </label>
//                 <input
//                   type="text"
//                   required
//                   className="form-control"
//                   value={this.state.name}
//                   onChange={this.onChangeName}
//                   >
//                   </input>
//               </div>
//               <div className="form-group">
//                   <label className="contact-label">Email:</label>
//                   <input
//                   type="email"
//                   required
//                   className="form-control"
//                   value={this.state.email}
//                   onChange={this.onChangeEmail}
//                   >
//                   </input>
//               </div>
//               <div className="form-group">
//                 <label className="contact-label">Questions and Comments:</label>
//                   <textarea
//                   type="text"
//                   className="form-control"
//                   value={this.state.comment}
//                   onChange={this.onChangeQuestion}
//                   rows='6'
//                   >
//                   </textarea>
//               </div>
//               <div className="form-group">
//                   <input
//                   type="submit"
//                   value="Send"
//                   className="btn btn-contact"
//                   />
//               </div>
//             </form>
//             </div>
//             <div className="content">
//             </div>
//           </div>
//       </div>
    
//       </div>
//     )
//   }
// };