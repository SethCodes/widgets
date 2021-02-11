import React, {useState}from "react";
import Search from "./components/Search";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "what is react?",
    content: "React is a front end javascript framework",
  },
  {
    title: "why use react?",
    content: "React is a favorite js library among engineers",
  },
  {
    title: "how do you use react?",
    content: "You use react by creating components",
  },
];

const options = [
    {
        label: 'the color red',
        value: 'red'
    },
    {
        label: 'the color green',
        value: 'green'
    },
    {
        label: 'the color blue',
        value: 'blue'
    }
];

function App() {

    const [selected, setSelected] = useState(options[0]);
    // const [showDropDown, setShowDropDown] = useState(true);


  return (
    <div>
    <Header />
    <Route path="/">
        <Accordion items= {items} />
    </Route>
    <Route path="/list">
        <Search />
    </Route>
    <Route path="/dropdown">
        <Dropdown
        label="Select a color"
        options ={options}
        selected = {selected}
        onSelectedChange = {setSelected} />
    </Route>
    <Route path="/translate">
        <Translate />
    </Route>
    


    {/* <button onClick={() => setShowDropDown(!showDropDown)}>Toggle Dropdown</button>
      {showDropDown ? <Dropdown
      selected={selected}
      onSelectedChange={setSelected}
      options = {options}
       /> : null} */}
    </div>
  );
}

export default App;
