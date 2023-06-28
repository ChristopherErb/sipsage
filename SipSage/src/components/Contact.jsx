import { useState } from 'react'

const Contact = () => {
  const initialState = {
    memberSelection: "",
    subject: "",
    message: ""
  }

  const [formState, setFormState] = useState(initialState)

  const handleEmail = () => {
    const { memberSelection, subject, message } = formState

    let memberEmail
    switch (memberSelection) {
      case "contactRa":
        memberEmail = "ra@Ga.com"
        break
      case "contactShei":
        memberEmail = "Shei@Ga.com"
        break
      case "contactEthan":
        memberEmail = "Ethan@Ga.com"
        break
      case "contactChris":
        memberEmail = "Chris@Ga.com"
        break
      default:
        memberEmail = "default@Ga.com"
    }
    const mailTo = `mailto:${memberEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`

    window.location.href = mailTo;
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleEmail()
    setFormState(initialState)
  }

  const handleChange = event => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    
    borderRadius: '10px',
  }

  const headingStyle = {
    fontSize: '24px',
    marginBottom: '20px',
    color: 'white',
    backdropFilter: 'blur(5px)',  
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  
    borderRadius:'10px'
  }

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '400px',
  }

  const labelStyle = {
    fontSize: '16px',
    marginBottom: '8px',
    color: 'white',
    backdropFilter: 'blur(5px)',  
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  
  }

  const inputStyle = {
    padding: '8px',
    marginBottom: '16px',
    width: '100%',
    borderRadius: '4px',
    border: '1px solid white',
    backdropFilter: 'blur(5px)',  
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  
  }

  const textareaStyle = {
    padding: '8px',
    marginBottom: '16px',
    width: '100%',
    borderRadius: '4px',
    border: '1px solid white',
    backdropFilter: 'blur(5px)',  
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  
  }

  const buttonStyle = {
    padding: '8px 16px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    backdropFilter: 'blur(5px)',  
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  
  }

  return (
    <div style={containerStyle}>
      <div style={headingStyle}>
        <h2>We would love to hear from you!</h2>
      </div>

      <form style={formStyle} onSubmit={handleSubmit}>
        <label htmlFor="memberSelection" style={labelStyle}>Team Member</label>
        <select id="memberSelection" onChange={handleChange} value={formState.memberSelection} style={inputStyle}>
          <option value="contctRa">Ra</option>
          <option value="contactShei">Sheikh</option>
          <option value="contactEthan">Ethan</option>
          <option value="contactChris">Chris</option>
        </select>

        <label htmlFor="subject" style={labelStyle}>Subject:</label>
        <input type="text" id="subject" onChange={handleChange} value={formState.subject} style={inputStyle} />

        <label htmlFor="message" style={labelStyle}>Message</label>
        <textarea id="message" cols="30" rows="10" onChange={handleChange} value={formState.message} style={textareaStyle}></textarea>

        <button type="submit" style={buttonStyle}>Send</button>
      </form>
    </div>
  )
}

export default Contact;
