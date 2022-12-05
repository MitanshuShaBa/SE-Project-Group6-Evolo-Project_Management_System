const Profile = () => {
    return (
        <table className="table profile-table table-borderless">
            <tbody colSpan={2}>
                <tr className="table-head">
                <th colSpan={2}>Profile Information</th>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>Janvi Phadtare</td>
                </tr>
                <tr>
                    <td>Designation</td>
                    <td>Developer</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>janviphadtare@gmail.com</td>
                </tr>
                <tr>
                    <td>Contact</td>
                    <td>965238741</td>
                </tr>
                <tr>
                    <td>Organization</td>
                    <td>NCSU</td>
                </tr>
                <tr>
                    <td>Project</td>
                    <td>SE</td>
                </tr>
            </tbody>
        </table>
    )
}
export default Profile;
