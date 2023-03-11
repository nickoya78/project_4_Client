import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import  axios  from "axios";

type  taskType = {
  tasks: string [],
  total: number
}

const initialState: taskType = { 
  tasks: [],
  total: 0,
}

export const getTasks = createAsyncThunk("tasks/getTasks", async (thunkAPI) => {
  try {
    const res = await axios.get("http://localhost:3000/task");
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
      await axios.delete(`http://localhost:3000/task/${id}`);
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
      const res = await axios.post(`http://localhost:3000/task`, {
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
      const res = await axios.put(`http://localhost:3000/task/${id}`, {
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

// Action creators are generated for each case reducer function
// export const { getTasks, deleteTask, inputTask } = taskSlice.actions;

export default taskSlice.reducer;
