import React from 'react';
import Accordion from './Accordion';


const items = [
    {
        title: "what is react?",
        content: "React is a front end javascript framework"
    },
    {
        title: "why use react?",
        content: "React is a favorite js library among engineers"
    },
    {
        title: "how do you use react?",
        content: "You use react by creating components"
    }
]

function App() {


    return(
        <div>
            <Accordion
            items={items} />
        </div>
    );
}

export default App;