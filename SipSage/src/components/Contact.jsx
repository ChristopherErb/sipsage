
const Contact = () => {




const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formState)
    setFormState(initialState)
}



  return (
    <div className="ContactMain">
      <div className="ContactHead">
        <h2>We would love to hear from you!</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="TeamMember">Team Member</label>
        <select id="memberSelection">
          <option value="contctRa">Ra</option>
          <option value="contactShei">Sheikh</option>
          <option value="contactEthan">Ethan</option>
          <option value="contactChris">Chris</option>
        </select>
        <label htmlFor="subject">Subject:</label>
        <input type="text" id="subject" />
        <label htmlFor="message">Message</label>
        <textarea id="message" cols="30" rows="10"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
export default Contact;
