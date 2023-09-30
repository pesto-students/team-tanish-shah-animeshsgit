import React, { useState } from 'react'

function Contact() {
  const [inputMessage, setInputMessage] = useState({
    name: '', email:'', message:''
  })

  const [isMessageReady, setIsMessageReady] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputMessage);
    if (inputMessage.name === "" || inputMessage.email === "" || inputMessage.message === "")
      alert("Please fill all the fields");
    else {
      setIsMessageReady(!isMessageReady);
    }
    setInputMessage({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputMessage((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  return (
    <div>
        <h1>You can contact me via:</h1>
        <ul>
            <li>Mail @ animeshraj@gmail.com</li>
            <li>Mobile @ 7903094624</li>
        </ul>
        <h1>You can also fill the form here directly</h1>

        <form onSubmit={handleSubmit}>
          <div>
          <label htmlFor="name">Name</label>
          <input type="text" name='name' value={inputMessage.name} placeholder='Enter your Name' onChange={handleChange}/>
          </div>
          <div>
          <label htmlFor="email">Email Id</label>
          <input type="text" name='email' value={inputMessage.email} placeholder='Enter your Email ID' onChange={handleChange}/>
          </div>
          <div>
          <label htmlFor="message">Message</label>
          <input type="text" name='message' value={inputMessage.message} placeholder='Enter your Message' onChange={handleChange}/>
          </div>
          <button>Submit</button>
        </form>
    </div>
  )
}

export default Contact