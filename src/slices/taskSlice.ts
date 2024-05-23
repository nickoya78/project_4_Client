import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import  axios  from "axios";

type  taskType = {
  tasks: string [],
}

const initialState: taskType = { 
  tasks: [],
}

const baseUrl = "https://project-4-server.netlify.app"

export const getTasks = createAsyncThunk("tasks/getTasks", async (thunkAPI) => {
  try {
    const res = await axios.get(`${baseUrl}/.netlify/functions/api`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
});

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (data:{id:number}, thunkAPI) => {
    
    const id = data.id
    try {
      await axios.delete(`${baseUrl}/.netlify/functions/api/${id}`);
      return id;
    } catch (err) {
      console.log(err);
    }
  }
);

export const inputTask = createAsyncThunk(
  "tasks/inputTask",
  async (data: { task: string }, thunkAPI) => {
    console.log(data)
    const task = data.task;

    try {
      const res = await axios.post(`${baseUrl}/.netlify/functions/api`, {
        name: task,
      });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);
export const editTask = createAsyncThunk(
  "tasks/editTask",
  async (data: {task: string, id:number}, thunkAPI) => {
    const  task  = data.task
    const id = data.id;
    try {
      const res = await axios.put(`${baseUrl}/.netlify/functions/api/${id}`, {
        name: task,
      });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);



export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
    

  
  extraReducers: (builder) => {
    builder
    .addCase(getTasks.pending, (state) => {
      state.tasks = [];
    })
    builder.addCase(getTasks.fulfilled, (state, payload) => {
      console.log(payload.payload);
      state.tasks =(payload.payload)
    })
    builder.addCase(getTasks.rejected, (state) => {
      state.tasks = [];
    })

    builder.addCase(deleteTask.pending, (state) => {})
    builder.addCase(deleteTask.fulfilled,(state, payload) => {
      console.log(payload);
      state.tasks = state.tasks.filter((task:any) => task.todo_id !== payload);
    })
    builder.addCase(deleteTask.rejected, (state) => {})

    builder.addCase(inputTask.pending, (state) => {
      state.tasks = [];
    })
    builder.addCase(inputTask.fulfilled, (state,payload)  => {
      console.log(payload);
      state.tasks =(payload.payload)
    })
    builder.addCase(inputTask.rejected,(state) => {
      state.tasks = []
    })
    builder.addCase(editTask.pending, (state) => {
      state.tasks = [];
    })
    builder.addCase(editTask.fulfilled,(state, payload) => {
      console.log(payload);
      state.tasks =(payload.payload)
    })
    builder.addCase(editTask.rejected, (state) => {
      state.tasks = [];
    })
  }
});

export default taskSlice.reducer;
