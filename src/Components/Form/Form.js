import React, { useState } from "react";
import "./Form.css";
const Form = ({ setisOpen, isOpen, data }) => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [mail, setMail] = useState("");
  const [ismessageOpen, setismessageOpen] = useState(false)
  const [localstorageData, setlocalstorageData] = useState()
  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("userData", JSON.stringify({ name, contact, mail }));
    const userDetails = JSON.parse(localStorage.getItem("userData"));
    console.log(userDetails.name, userDetails.contact); // Outputs "John Doe"
    setismessageOpen(true)
    setlocalstorageData(userDetails)
  };
  
  return (
    <div className="Form__Container">
      <button onClick={() => setisOpen(false)} className="cancelButton">Cancel</button>
      <div className="show__Details">
        <table className="my-table">
          <thead>
            <tr>
              <th>Show</th>
              <th>Name</th>
              <th>Timing</th>
              <th>Day</th>
              <th>Runtime</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="my-table-cell">
                <img src={data?.image.medium} alt={data?.name} />
              </td>
              <td className="my-table-cell">{data?.name}</td>
              <td className="my-table-cell">{data?.schedule?.days}</td>
              <td className="my-table-cell">{data?.schedule?.time}</td>
              <td className="my-table-cell">{data?.runtime} mins</td>
            </tr>
          </tbody>
        </table>
      </div>
    {!ismessageOpen && <form onSubmit={handleSubmit} className="Form">
        <input
        type="text"
          placeholder="Your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Contact number"
          value={contact}
          onChange={(event) => setContact(event.target.value)}
          required
          maxlength="10"
        />
        <input
          type="email"
          placeholder="Email Id"
          value={mail}
          onChange={(event) => setMail(event.target.value)}
          required
        />
        <button type="submit" className="submitButton">
          Submit
        </button>
      </form>}
      {
        ismessageOpen && 
        <h1 className="successMessage"> "You're all set, {localstorageData.name}! Your ticket for {data?.name} has been reserved."</h1>
      }
    </div>
  );
};

export default Form;
