import { useState } from 'react';


function TestComponent() {
    return <p> Hello World </p>
}

function Header(props) {
    console.log(props.title)
    return <h1>{props.title}</h1>
}

function Header1({ title }) {
    console.log(title)
    return <h1>{`Cool ${title}`}</h1>
}

function Header2({ title }) {
    return <h1>{title ? title : 'Default Title'}</h1>
}

export default function HomePage() {
    const [likes, setLikes] = useState(0)
    const name = ['Tuschy', 'Nrinee']
    function handleClick() {
        setLikes(likes + 1);
    }
    return (
        <div>
            <Header2 title="Develop. Preview. Ship." />
            <ul>
                {name.map((name) => (
                    <li key={name}> {name} </li>
                ))}
            </ul>
            <button onClick={handleClick}>Like ({likes})</button>
        </div>
    );
}