// src/App.js
import "./App.css";
import actorsList from "./contacts.json";
import { useState } from "react";

function App() {
  const initContacts = actorsList.splice(0, 5);
  const [actors, setList] = useState(initContacts);
  const [outRemaining, setOutRemaining] = useState(actorsList);
   
  function addRandom() {
    if (outRemaining && outRemaining.length > 0) {
      let index = Math.floor(Math.random() * (outRemaining.length - 0) + 0);
      setList([...actors, outRemaining[index]]);
      let filtered = outRemaining.filter((contact, i) => {
        return i !== index;
      });
      setOutRemaining(filtered);
    }
  }

  function byPopularity() {
    actors.sort((a, b) => b.popularity - a.popularity)
    setList([...actors]);
  }

  function byName() {
    actors.sort((a, b) => a.name.localeCompare(b.name))
    setList([...actors]);
  }

  const deleteContact = contactId => {
    const filteredContacts = actors.filter(actor => {
      return actor.id !== contactId
    });
    setList(filteredContacts);
  }

  return (
    <div className="App">
    <div>
      <h2>IronContacts</h2>
    </div>
    <div>
      <button onClick={addRandom}>Add Random Contact</button>
      <button onClick={byPopularity}>Sort by popularity</button>
      <button onClick={byName}>Sort by name</button>
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
          {actors.map((actor) => {
            return (
              <tr>
                <td>
                  {" "}
                  <img
                    src={actor.pictureUrl}
                    width="80px"
                    height="100px"
                    alt="actorphoto"
                  />{" "}
                </td>
                <td> {actor.name} </td>
                <td> {actor.popularity}</td>
                <td>{actor.wonOscar ? "🏆" : "X"}</td>
                <td>{actor.wonEmmy ? "🏆" : "X"}</td>
                <td><button onClick={() => deleteContact(actor.id)}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
