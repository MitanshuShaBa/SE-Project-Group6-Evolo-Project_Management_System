import React, { useEffect, useState } from "react";
import {
  close_delete_task_form,
  close_member_form,
  close_project_form,
  close_remove_member_form,
  close_submit_form,
  close_task_form,
  close_verify_form,
  show_new_member,
  show_new_org,
  show_new_project,
} from "../../utils";

const AddMember = ({ organisation, project, handleProjRefresh }) => {
  const [memberSelected, setMemberSelected] = useState(
    project?.members.length > 0 ? project?.members[0]._id : null
  );
  return (
    <div id="new_member_form">
      <button id="close_member_form" onClick={close_member_form}>
        X
      </button>
      <div id="member_form">
        <h4>Add New Member</h4>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            // fetch(
            //   `http://localhost:5000/project/member/add/${project._id}/${memberSelected}`,
            //   {
            //     method: "PATCH",
            //     headers: {
            //       "Content-Type": "application/json",
            //       Authorization: `Bearer ${localStorage.getItem("token")}`,
            //     },
            //   }
            // )
            //   .then((res) => res.json())
            //   .then((_data) => {
            //  if (data.error) {
            //    alert(data.error);
            //    return;
            //  }
            //     close_member_form();
            //     setMemberSelected(null);
            //     handleProjRefresh();
            //   })
            //   .catch((error) => {
            //     console.log(error);
            //   });
          }}
        >
          <div class="form-group">
            <label>User:</label>
            <select
              name="user"
              class="form-control"
              id="add_member_user"
              defaultValue={null}
              onChange={(e) => {
                setMemberSelected(e.target.value);
              }}
            >
              <option value={null} disabled hidden>
                Select an Option
              </option>
              {organisation &&
                project &&
                organisation.members
                  .filter(
                    (leftValue) =>
                      !project.members.some(
                        (rightValue) => leftValue._id === rightValue._id
                      )
                  )
                  .map((member) => (
                    <option key={member._id} value={member._id}>
                      {member.name} | {member.email}
                    </option>
                  ))}
            </select>
          </div>
          <div class="form-group">
            <input type="hidden" name="project_id" value="" />
          </div>

          <button
            type="submit"
            class="btn btn-primary form-btn"
            name="submit_member_form"
          >
            Add Member
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMember;
