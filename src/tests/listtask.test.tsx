import ListTask from "../components/listtask"
import { render, screen, fireEvent } from "@testing-library/react";
import React from 'react'


jest.mock('react-redux', () => ({
   connect: () => (ReactComponent: any) => ReactComponent,
 }));

 describe("ListTask component tests", ()=> {
  beforeEach(()=> { 
    render(<ListTask/>) 
  })

   it("should have task header included", ()=> {
    const newTask = screen.getByRole('columnheader', {
      name: /TASK/i
    })
     expect(newTask).toBeInTheDocument()
})

it("should have update header included", async()=> {
  const updateTask = await screen.findByRole('columnheader', {
    name: /Update/i
  })
   expect(updateTask).toBeInTheDocument()
 })
it("should have delete header included", async()=> {
  const deleteTask = await screen.findByRole('columnheader', {
    name: /Delete/i
  })
   expect(deleteTask).toBeInTheDocument()
 })


it('should delete task when delete button is clicked', async () => {
  const mockFunction = jest.fn();
  const deleteButton = await screen.findByText('Delete');
  deleteButton.onclick = mockFunction;
  fireEvent.click(deleteButton);
  expect(mockFunction).toHaveBeenCalledTimes(1);
});

})


