import { useState } from 'react'

const Contact = () => {


    const initialState = {
        memberSelection: "",
        subject:"",
        message:""
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
    setFormState({...formState, [event.target.id]: event.target.value})
}



  return (
    <div className="ContactMain">
      <div className="ContactHead">
        <h2>We would love to hear from you!</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="TeamMember">Team Member</label>
        <select id="memberSelection" onChange={handleChange} value={formState.memberSelection}>
          <option value="contctRa">Ra</option>
          <option value="contactShei">Sheikh</option>
          <option value="contactEthan">Ethan</option>
          <option value="contactChris">Chris</option>
        </select>
        <label htmlFor="subject">Subject:</label>
        <input type="text" id="subject"  onChange={handleChange} value={formState.subject} />
        <label htmlFor="message">Message</label>
        <textarea id="message" cols="30" rows="10"  onChange={handleChange} value={formState.message}></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}
export default Contact
