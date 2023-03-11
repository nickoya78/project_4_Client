import ListTask from "../components/listtask"
import { render, screen, fireEvent } from "@testing-library/react";
import React from 'react'


jest.mock('react-redux', () => ({
   connect: () => (ReactComponent: any) => ReactComponent,
 }));

 describe("ListTask component tests", ()=> {
   render(<ListTask />)

   it("should have task header included", ()=> {
    const task = screen.getByRole('columnheader', {
      name: /task/i
    })
     expect(task).toBeInTheDocument()
})
 })

it("should have update header included", ()=> {
 const update = screen.findByRole('columnheader', {
   name: /update/i
 })
  expect(update).toBeTruthy()

})


