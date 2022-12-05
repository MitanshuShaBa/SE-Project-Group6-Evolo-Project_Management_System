import React, { useState } from 'react';
import { close_reassign_form } from '../../utils';

export const Reassign = ({ project, task, handleTaskRefresh, handleProjRefresh }) => {
  const [taskData, setTaskData] = useState({
    assignees: 'none',
  });
  const handleChange = (e) => {
    setTaskData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);

    if (taskData.assignees === 'none') {
      alert('You must select someone');
      return;
    }

    fetch(`http://localhost:5000/task/reassign/${task._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        assignees: [...task.assignees, taskData.assignees],
      }),
    })
      .then((res) => res.json())
      .then((_data) => {
        if (_data.error) {
          alert(_data.error.message);
          return;
        }
        setTaskData((data) => ({ assignees: data.assignees }));
        handleTaskRefresh();
        handleProjRefresh();
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  };
  return (
    <div id="new_reassign_form">
      <button id="close_reassign_form" onClick={close_reassign_form}>
        X
      </button>
      <div id="reassign_form">
        <h4>Reassign Task</h4>
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label>Member:</label>
            <select name="assignees" class="form-control" defaultValue={'none'} onChange={handleChange}>
              <option value={'none'}>Select an Option</option>
              {project?.members
                ?.filter((leftValue) => !task.assignees.some((rightValue) => leftValue._id === rightValue._id))
                .map((member) => {
                  return (
                    <option key={member._id} value={member._id}>
                      {member.name} | {member.email}
                    </option>
                  );
                })}
            </select>
          </div>

          <div class="form-group">
            <ul id="org_list">
              {task?.assignees?.map((assignee) => {
                return (
                  <li
                    onClick={() => {
                      // assigneesSelected(assignee);
                    }}
                    style={{
                      cursor: 'pointer',
                    }}
                    key={assignee._id}
                  >
                    {assignee.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <div class="form-group">
            <input type="hidden" name="project_id" value="" />
          </div>

          <button type="submit" class="btn btn-primary form-btn" name="submit_reassign_form">
            Assign
          </button>
        </form>
      </div>
    </div>
  );
};
