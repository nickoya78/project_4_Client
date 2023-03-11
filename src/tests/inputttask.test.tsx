import  InputTask from '../components/inputtask'
import { fireEvent, render, screen } from "@testing-library/react";
import React from 'react'



jest.mock('react-redux', () => ({
  connect: () => (ReactComponent: any) => ReactComponent,
}));


describe("Inputtask component tests", ()=> {
  render(<InputTask />)
  
it("should include add task button", ()=> {
    const taskButton = screen.getByRole('button', {
      name: /add task/i
    })
     expect(taskButton).toBeInTheDocument()
})

it('should only input text ', ()=>{
      const yourTask =  screen.findByRole('textbox')
      expect(yourTask).toBeTruthy()
    }) 
 

    it("should  render input element",  ()=>{
      const inputElement = screen.findByPlaceholderText(/Your Task/i)
      expect(inputElement).toBeTruthy()
    })
})

