import React from "react";
import "./App.css";
import arrayOfFriends from "./utils/friends";

/* 
in express 
res.render(pagName, {users: []})

in handlebars
{{#each users}}
{{this.name}}

{{/each}}

*/

function App() {
  const [friendsArr, setFriendsArr] = React.useState(arrayOfFriends);
  // const stateAndFunction = React.useState(arrayOfFriends);
  // const [sortingVersion, setSortingVersion] = React.useState("asc");

  function sortAsc() {
    // const newArr = [...stateAndFunction[0]].sort((a, b) => {
    const newArr = [...friendsArr].sort((a, b) => {
      return a.firstName.localeCompare(b.firstName);
    });

    setFriendsArr(newArr);
    // stateAndFunction[1](newArr);
    // setSortingVersion("asc");
  }

  function sortDesc() {
    // // const newArr = [...stateAndFunction[0]].sort((a, b) => {
    const newArr = [...friendsArr].sort((a, b) => {
      return b.firstName.localeCompare(a.firstName);
    });

    setFriendsArr(newArr);
    // // stateAndFunction[1](newArr);
    // setSortingVersion("desc");
  }

  // const newArr = [...friendsArr].sort((a, b) => {
  //   if (sortingVersion === "asc") {
  //     return a.firstName.localeCompare(b.firstName);
  //   }

  //   return b.firstName.localeCompare(a.firstName);
  // });

  const [name, setName] = React.useState("Luca Janssens");

  function handleInputChange(event) {
    console.log(
      "event:",
      event.target.value
      // typeof event.target.value,
      // event. /target.valueAsNumber
    );
    console.log("DONT GO CHANGING");
    setName(event.target.value);
  }

  // input.onchange = event => {
  //   console.log("DONT GO CHANGING")
  // }
  // dedupping
  // debounce -> debounce (time, function)

  return (
    <div className="App">
      <h1>List of friends</h1>
      <input name="name" placeholder="Write da name" />
      {/* 👆 this is an uncontrolled input */}
      <br />
      <input
        name="name"
        placeholder="Write da name"
        value={name}
        onChange={handleInputChange}
      />

      <input type="number" onChange={handleInputChange} />
      {/* 👆 this is NOT an uncontrolled input */}
      <br />
      <button onClick={sortAsc}>SORT ASC</button>
      <div />
      <button onClick={sortDesc}>SORT DESC</button>
      <div />
      {/* <button >GET JUST THREE NAMES</button> */}
      {/* {stateAndFunction[0].map((friend) => { */}
      {friendsArr.map((friend) => {
        return (
          <Person
            key={friend.id}
            // key={index}
            // firstName={friend.firstName}
            // lastName={friend.lastName}
            // username={friend.username}
            {...friend}
          />
        );
      })}
    </div>
  );
}

function Person(props) {
  return (
    <div>
      <p>
        Name: {props.firstName} {props.lastName}
      </p>
      <p style={{ fontSize: ".75rem" }}>@{props.username}</p>
    </div>
  );
}

export default App;

// fontSize: ".75rem"
