import React from "react";
import { connect } from "react-redux";
import { getTasks, deleteTask } from "../slices/taskSlice";
import EditTask from "./edittask";



interface Props {
  getTasks: any;
  deleteTask: any;
  tasks:any
}

class ListTask extends React.Component<Props>{
 

componentDidMount = () => {
 const getTasks = () => this.props.getTasks()
 return this.props.getTasks&&getTasks()
}

 render() {
    return (
      <div>
        <table className="table mt-5 text-center borderless">
          <thead>
            <tr>
              <th>TASK</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.props.tasks&&this.props.tasks.map((task:any) => (
              <tr key={task.todo_id}>
                <td>{task.name}</td>
                <td>
                  <EditTask task = {task} />
                </td>
                <td>
                  <button
                    className="btn btn-danger delete"
                    onClick={() => { this.props.deleteTask({ id: task.todo_id }) 
                    window.location.href = "/" }
                  }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state:any) => ({
  tasks: state.tasks.tasks,
  total: state.tasks.total,
});

const mapDispatchToProps =  { getTasks, deleteTask }

export default connect(mapStateToProps, mapDispatchToProps)(ListTask);
