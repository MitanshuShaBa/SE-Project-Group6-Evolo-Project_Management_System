# Verify Work
The leader of a project can verify the project work submitted by the various group members. When a work has been verified by the leader it is represented with a green color in the tasks table. The leader can also reject the work submitted by a team member and ask to make changes in the same. The respective member will be notified the same as well.

```js
const VerifyWork = ({ task, handleTaskRefresh }) => {
  const [isVerified, setIsVerified] = useState(false);
  return (
    <div id="new_verify_form">
      <button id="close_verify_form" onClick={close_verify_form}>
        X
      </button>
      <div id="verify_form">
        <h4>Verify work</h4>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            fetch(`http://localhost:5000/task/${task._id}`, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
              },
              body: JSON.stringify({
                status: isVerified ? 'verified' : 'reassigned',
              }),
            })
              .then((res) => res.json())
              .then((_data) => {
                if (_data.error) {
                  alert(_data.error);
                  return;
                }
                close_verify_form();
                setIsVerified(false);
                handleTaskRefresh();
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        >
          <div class="form-group">
            <label>Work : </label>
            <p>{task?.work}</p>
          </div>
          <div class="form-group">
            <input type="hidden" name="t_id" id="t_id_verify" />
          </div>
          <div class="form-group">
            <input type="hidden" name="project_id" value="" />
          </div>

          <button
            onClick={() => {
              setIsVerified(true);
            }}
            type="submit"
            class="btn btn-primary form-btn"
            name="submit_accept_form"
          >
            Accept
          </button>
          <button
            onClick={() => {
              setIsVerified(false);
            }}
            type="submit"
            class="btn btn-primary form-btn"
            name="submit_reject_form"
          >
            Reject
          </button>
        </form>
      </div>
    </div>
  );
};

```