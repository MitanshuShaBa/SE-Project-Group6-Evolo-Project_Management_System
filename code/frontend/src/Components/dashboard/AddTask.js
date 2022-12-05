import React, { useState } from "react";
import { close_task_form } from "../../utils";

export const AddTask = ({ project, handleTaskRefresh }) => {
  const [taskData, setTaskData] = useState(
    project?.members?.length > 0
      ? {
          assignees: project?.members[0]._id,
          name: "",
          date: new Date().toDateString(),
        }
      : { assignees: null, name: "", date: new Date().toDateString() }
  );
  const handleChange = (e) => {
    setTaskData((data) => ({ ...data, [e.target.name]: e.target.value }));
    console.log(taskData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);

    fetch(`http://localhost:5000/task/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        ...taskData,
        assignees: [taskData.assignees],
        project: project._id,
      }),
    })
      .then((res) => res.json())
      .then((_data) => {
        if (data.error) {
          alert(data.error);
          return;
        }
        close_task_form();
        setTaskData((data) => ({ assignees: data.assignees }));
        // handleTaskRefresh();
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };
  return (
    <div id="new_task_form">
      <button id="close_task_form" onClick={close_task_form}>
        X
      </button>
      <div id="task_form">
        <h4>Assign Task</h4>
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label>Member:</label>
            <select
              name="assignees"
              class="form-control"
              onChange={handleChange}
            >
              {project?.members?.map((member) => {
                return (
                  <option key={member._id} value={member._id}>
                    {member.name} | {member.email}
                  </option>
                );
              })}
            </select>
          </div>
          <div class="form-group">
            <label>Task Name:</label>
            <input
              type="text"
              name="name"
              class="form-control"
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label>Description:</label>
            <textarea
              name="description"
              class="form-control"
              onChange={handleChange}
            ></textarea>
          </div>
          <div class="form-group">
            <label>Deadline:</label>
            <input
              type="date"
              name="deadline"
              class="form-control"
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <input type="hidden" name="project_id" value="" />
          </div>

          <button
            type="submit"
            class="btn btn-primary form-btn"
            name="submit_task_form"
          >
            Assign
          </button>
        </form>
      </div>
    </div>
  );
};