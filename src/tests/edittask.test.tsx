import EditTask from "../components/listtask"
import { render, screen, fireEvent} from "@testing-library/react";
import React from 'react'



jest.mock('react-redux', () => ({
   connect: () => (ReactComponent: any) => ReactComponent,
 }));

 
 describe("ListTask component tests", ()=> {
  beforeEach(()=> { render(<EditTask/>) })

   it('should hide textbox  ', ()=>{
    const hideTask =  screen.findByRole('textbox', {
        hidden: true
      })
    expect(hideTask).toBeTruthy()
  })

  it("should include update button", ()=> {
    const updateBtn = screen.queryByRole('heading', {
        name: /update the task/i,
        hidden: true
      })
     expect(updateBtn).toBeFalsy()
})
  it("should include close button", ()=> {
    const closeBtn = screen.findByRole('button', {
        name: /close/i
      })
     expect(closeBtn).toBeTruthy()
})
  it("should include update", async()=> {
  const updateButton = await screen.findByText("Update")
  expect(updateButton).toBeInTheDocument()
})


 })
