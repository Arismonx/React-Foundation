import LikeButton from "./like-button"

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
    const name = ['Tuschy', 'Nrinee']
    return (
        <div>
            <Header2 title="Develop. Preview. Ship." />
            <ul>
                {name.map((name) => (
                    <li key={name}> {name} </li>
                ))}
            </ul>
            <LikeButton />
        </div>
    );
}