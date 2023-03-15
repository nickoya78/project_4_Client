import React from "react";
import { connect } from "react-redux";
import { inputTask } from "../slices/taskSlice";
import img from "../working.png";
import img2 from "../hard.png";
import "./style.css";



class InputTask extends React.Component <{inputTask:any}>{
  state = {
    task: "",
  };

  handleChange = (e: any) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("stateTask",this.state.task)
    this.props.inputTask({ task: this.state.task });
    window.location.href = "/"
  };

  render() {
    return (
      <div className="row text-center">
        <div className="col-md-4">
          <form
           onSubmit={(e) => this.handleSubmit(e)}>
            <input
              className="form-control mt-5 ml-5"
              placeholder="Your Task"
              name="task"
              onChange={(e) => this.handleChange(e)}
              value={this.state.task}
              style={{ width: "350px", marginLeft: "40px" }}
            />
            <button
              type="submit"
              className="btn btn-primary mt-3"
              style={{
                width: "350px",
                padding: "10px",
              }}
            >
              ADD TASK
            </button>
            <img
              src={img2}
              style={{ width: "380px", height: "260px", marginLeft: "40px" }}
              alt="hard"
            />
          </form>
        </div>
        <div className="col-md-8">
          <img
            src={img}
            style={{ width: "500px", height: "400px" }}
            alt="working"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state:any) => ({
  tasks: state.tasks.tasks,
});

const mapDispatchToProps = { inputTask };

export default connect(mapStateToProps, mapDispatchToProps)(InputTask);


