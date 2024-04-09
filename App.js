import React from 'react'
import ReactDOM  from 'react-dom/client';

const Title = () => {
    return (
        <div>
            <h2 id="title" key="h2">Hello from Title</h2>
        </div>
    )
}
//Composing components- Components rendered inside another component.
const HeaderComponent = () => {
    return (
        <div>
            <Title/>
            <h1>Hello from HeaderComponent</h1>
            <h1>This is h1 tag</h1>
        </div>
    )
}

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);
