import { useState } from "react"
import './App.css';
import { registerValidationSchema } from "./validations/validation"

function App() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")


  const submitForm = () => {
    const formBody  = { firstName, lastName, phoneNumber, email, password, confirmPassword  }
    const { error } = registerValidationSchema.validate(formBody)
    if(error){
      let errorPath = `${error.details[0].path[0]}Error`
      let errorMessage = error.details[0].message
      alert(error.details[0].message)
      // setFormError((prevState) => ({
      //   ...prevState,
      //   [errorPath]: errorMessage
      // }))
    }
  }

  const [formError, setFormError] = useState({
    firstNameError: "",
    lastNameError: "",
    phoneNumberError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: ""
  })

  return (
    <div className="App">
      <div className="form-container">
        <h3>Registration Form</h3>
        <form onSubmit={(event) => {event.preventDefault(); submitForm() }}>
          <div className="form-group">
            <label>First Name</label>
            <input required name="firstName" value={firstName} onChange={(event) => setFirstName(event.target.value)} className="form-input" type="text" placeholder="Enter First Name"/>
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input required value={lastName} onChange={(event) => setLastName(event.target.value)} className="form-input" type="text" placeholder="Enter Last Name"/>
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input required value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} className="form-input" type="text" placeholder="Phone Number"/>
            <small style={{ color: "red" }}>{ formError.phoneNumberError }</small>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input required value={email} onChange={(event) => setEmail(event.target.value)} className="form-input" type="email" placeholder="Enter a valid email address"/>
          </div>

          <div className="form-group">
            <label>Password</label>
            <input required value={password} onChange={(event) => setPassword(event.target.value)} className="form-input" type="password" placeholder="Enter password"/>
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input required value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} className="form-input" type="password" placeholder="Confirm password"/>
          </div>

          <div className="form-group">
            <button className="btn">Submit</button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default App;
