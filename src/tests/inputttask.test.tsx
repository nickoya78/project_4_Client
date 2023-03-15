import  InputTask from '../components/inputtask'
import { render, screen } from "@testing-library/react";
import React from 'react'



jest.mock('react-redux', () => ({
  connect: () => (ReactComponent: any) => ReactComponent,
}));


describe("Inputtask component tests", ()=> {
  beforeEach(()=> { 
    render(<InputTask/>)
  })

  
it("should include add task button", ()=> {
    const taskButton = screen.getByRole('button', {
      name: /add task/i
    })
     expect(taskButton).toBeInTheDocument()
})

it('should only allow input text ', async()=>{
      const yourTask = await  screen.findByRole('textbox')
      expect(yourTask).toBeInTheDocument()
    }) 
 
it('should include image ', ()=>{
      const imageHard = screen.getByRole('img', {
        name: /hard/i
      })
      expect(imageHard).toBeInTheDocument()
    }) 
it('should include second image ', ()=>{
      const imageWorking = screen.getByRole('img', {
        name: /working/i
      })
      expect(imageWorking).toBeInTheDocument()
    }) 
 
it("should  render input element",  async()=>{
      const inputElement = await screen.findByPlaceholderText(/Your Task/i)
      expect(inputElement).toBeInTheDocument()
    })
    
})

