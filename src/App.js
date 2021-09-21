// src/App.js
import "./App.css";
import contactList from "./contacts.json";
import { useState } from "react";

function App() {
  const initContacts = contactList.splice(0, 5);
  const [contacts, setList] = useState(initContacts);
  const [outRemaining, setOutRemaining] = useState(contactList);
   
  function addRandom() {
    if (outRemaining && outRemaining.length > 0) {
      let index = Math.floor(Math.random() * (outRemaining.length - 0) + 0);
      setList([...contacts, outRemaining[index]]);
      let filtered = outRemaining.filter((contact, i) => {
        return i !== index;
      });
      setOutRemaining(filtered);
    }
  }

  function byPopularity() {
    contacts.sort((a, b) => b.popularity - a.popularity)
    setList([...contacts]);
  }

  function byName() {
    contacts.sort((a, b) => a.name.localeCompare(b.name))
    setList([...contacts]);
  }

  const deleteContact = contactId => {
    const filteredContacts = contacts.filter(contact => {
      return contact.id !== contactId
    });
    setList(filteredContacts);
  }

  return (
    <div className="App">
    <div>
      <h2>IronContacts</h2>
    </div>
    <div>
      <button className="header-btn" onClick={addRandom}>Add Random Contact</button>
      <button className="header-btn" onClick={byPopularity}>Sort by popularity</button>
      <button className="header-btn" onClick={byName}>Sort by name</button>
    </div>
      <table>
        <thead>
          <tr>
            <th> Picture </th>
            <th> Name </th>
            <th>Popularity</th>
            <th> Won Oscar</th>
            <th> Won Emmy</th>
            <th> Actions </th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr>
                <td>
                  {" "}
                  <img
                    src={contact.pictureUrl}
                    width="80px"
                    height="100px"
                    alt="contactphoto"
                  />{" "}
                </td>
                <td> {contact.name} </td>
                <td> {contact.popularity}</td>
                <td>{contact.wonOscar ? "🏆" : "X"}</td>
                <td>{contact.wonEmmy ? "🏆" : "X"}</td>
                <td><button className="delete-btn" onClick={() => deleteContact(contact.id)}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
