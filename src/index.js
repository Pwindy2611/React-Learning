import React from 'react'
import ReactDom from 'react-dom/client'

function App(){
    return (
        <div>
            <h1>Hello world!</h1>
        </div>
    )
}

const root= ReactDom.createRoot(document.getElementById('root'))
root.render(<App/>)