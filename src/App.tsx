import React, {useState} from "react";
import Rate from "./rate/Rate";
import "./App.css";
import "./rate/Rate.scss"

function NoCloneRate() {
    const [value, setValue] = useState(2)

    return <>
        <div>{value}</div>
        <Rate question={1} value={value} onChange={setValue}/>
    </>
}

function FixedRate() {
    const [value, setValue] = useState(2)

    return <>
        <div>{value}</div>
        <Rate question={2} value={value} onChange={setValue}/>
    </>
}

function BugRate() {
    const [value, setValue] = useState(2)

    return <>
        <div>{value}</div>
        <Rate question={3} value={value} onChange={setValue}/>
    </>
}

function App() {
    return (
        <div className="App">
            <div>
                <div>NoCloneRate</div>
                <NoCloneRate/>
            </div>
            <div>
                <div>FixedRate</div>
                <FixedRate/>
            </div>
            <div>
                <div>BugRate</div>
                <BugRate/>
            </div>
        </div>
    );
}

export default App;
