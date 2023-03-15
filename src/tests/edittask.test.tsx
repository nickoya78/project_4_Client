import EditTask from "../components/edittask"
import { render, screen, fireEvent} from "@testing-library/react";
import React from 'react'



jest.mock('react-redux', () => ({
   connect: () => (ReactComponent: any) => ReactComponent,
 }));

 const mockTask ={
   todo_id:1,
   name: "Feed the dog",
 }
 describe("ListTask component tests", ()=> {
  beforeEach(()=>  { 
    render(<EditTask task={mockTask}/>) 
  })


it("should include close button",()=> {
  const closeButton = screen.getByText('Close')
  expect(closeButton).toBeInTheDocument()
})
it("should include update button", ()=> {
  const updateButton = screen.getByRole('button', {
    name: "Update"
  })
  expect(updateButton).toBeInTheDocument()
})

it('should correctly click the Update button',  () => {
  const mockFunction = jest.fn();
  const updateButton =  screen.getByRole('button',{
   name: "Update"
  });
  updateButton.onclick = mockFunction;
  fireEvent.click(updateButton);
  expect(mockFunction).toHaveBeenCalledTimes(1);
});

it('should correctly set task_name in state', async() => {
  const taskInput = await screen.findByPlaceholderText('Enter a new task') as HTMLInputElement;
    // console.log(taskInput);
    fireEvent.change(taskInput, { target: { value: 'This is my new task!' } });
    // component state.task_name === 'This is my new task!'
    expect(taskInput.value).toBe('This is my new task!');
  });

 })
