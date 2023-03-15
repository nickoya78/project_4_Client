import React from "react";
import { connect } from "react-redux";
import { editTask } from "../slices/taskSlice";


interface Props {
  editTask: any;
  task:any
}


class EditTask extends React.Component <Props>{

  state = {
    task_id: "",
    task_name: this.props.task.name,
  };
  handleChange = (e: any) => {
    this.setState({ task_name: e.target.value });
  };
  handleUpdate = (e: any) => {
    e.preventDefault();
    this.props.editTask({
      task: this.state.task_name,
      id: this.state.task_id,
    });
    window.location.href = "/";
  };

  componentDidMount = () => {
    if (this.state.task_id === "") {
      this.setState({
        task_id: this.props.task.todo_id,
        task_name: this.props.task.name,
      });
    }
  };
  render() {
    return (
      <div className="container">
        <button
          type="button"
          className="btn btn-primary primary"
          data-toggle="modal"
          data-target={`#id${this.props.task.todo_id}`}
          style={{ fontSize: "18px" }}
        >
          Update
        </button>

        <div
          className="modal fade"
          id={`id${this.props.task.todo_id}`}
          tabIndex={-1}
          role="dialog"
          aria-labelledby={`id${this.props.task.todo_id}`}
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5
                  className="modal-title"
                  style={{ color: "black" }}
                  id={`id${this.props.task.todo_id}`}
                >
                  Update the Task
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <input
                  className="form-control"
                  placeholder="Enter a new task"
                  name="task"
                  value={this.state.task_name}
                  onChange={(e) => this.handleChange(e)}
                  style={{ width: "200px" }}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  style={{ backgroundColor: "orange", backgroundImage: "none" }}
                  onClick={(e) => this.handleUpdate(e)}
                >
                  Update
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                  style={{ backgroundColor: "red", backgroundImage: "none" }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state:any) => ({
  tasks: state.tasks.tasks,
});

const mapDispatchToProps = { editTask };

export default connect(mapStateToProps, mapDispatchToProps)(EditTask);


