import React from 'react'
import './App.css';
import allContacts from "./contacts.json"
import picture from "./contacts.json"
import { useState } from "react"


const firstFive = allContacts.slice(0,6)

function App() {

const [contacts, setContacts] = useState(firstFive)

const addNewRandom = () => {
  let filtered = allContacts.filter(
    (elem) => !contacts.find(({ id }) => elem.id === id)
  )
  
  let getRandom = Math.floor(Math.random()* filtered.length)
  setContacts([...contacts, filtered [getRandom]])
}

const sortByName = () =>{
  setContacts([...contacts.sort((a, b) => a.name > b.name ? 1:-1)])
}

const sortByPopularity = () => {
  setContacts([...contacts.sort((a, b)=> a.popularity < b.popularity ? 1:-1 )])
}


const deleteCelebrity = celebrityId => {
  const filteredCelebrity = contacts.filter(celebrity => {
    return contacts.id !== celebrityId;
  });

  setContacts(deleteCelebrity);
};



  return (

    <div>

    
    <table className='titles'>
    <caption><h1>IRTON CONTACTS</h1></caption>
    <div>
    <button type="button"  onClick={addNewRandom} >Add Random</button>
    <button type="button" onClick={sortByName}>Sort by Name</button>
    <button type="button" onClick={sortByPopularity}>Sort by Popularity</button>
   
    </div>
    
    <tr>
    <th>Picture</th>
    <th>Name</th>
    <th>Popularity</th>
    <th>Won Oscar</th>
    <th>Won Emmy</th>
</tr>
    </table>
    
    
    <div  className="App" >
      {contacts.map(elem => {
  return (

<table key={elem.id} >


<tr white-space="pre-line;" >
<td ><img alt="celebrity-photo" src={elem.pictureUrl} width="100px"/></td>
<td width="20px;" height="40px;"><p>{elem.name}</p></td>
<td width="20px;" height="40px;"><p>{elem.popularity}</p></td>
<button type="button" onClick={deleteCelebrity}>delete</button>


<td width="20px;" height="40px;"><p>{elem.wonOscar ? '🏆': ""}</p></td>
<td width="20px;" height="40px;"><p>{elem.wonEmmy ? '🏆': ""}</p></td>
</tr>

<tr>
   
</tr>  
  
   </table>
   
 )
      })}
      </div>

  

    </div>
    

  );
}

export default App;


      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}