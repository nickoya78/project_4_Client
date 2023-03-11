import { render, screen } from '@testing-library/react';
import { createRoot } from 'react-dom/client';
import React from 'react';
import App from '../App';

let container:HTMLDivElement
  
beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
    const root = createRoot(container)
    root.render(<App/>)
})

afterEach(()=>{
    document.body.removeChild(container)
    container.remove()
})

it("Renders correctly InputTask and ListTask", ()=>{
  const body = container.querySelectorAll("InputTask, ListTask")
  expect(body).toBeTruthy()

})