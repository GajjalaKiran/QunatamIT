import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  const usersData = [
    { id: 1, name: 'Michael Holz', dateCreated: '04/10/2013', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Paula Wilson', dateCreated: '05/08/2014', role: 'Publisher', status: 'Active' },
    { id: 3, name: 'Antonio Moreno', dateCreated: '11/05/2015', role: 'Publisher', status: 'Suspended' },
    { id: 4, name: 'Mary Saveloy', dateCreated: '06/09/2016', role: 'Reviewer', status: 'Active' },
    { id: 5, name: 'Martin Sommer', dateCreated: '12/08/2017', role: 'Moderator', status: 'Inactive' }
  ];

  return (
    <div className="dashboard">
      <h2>Welcome, {user?.name}</h2>
      <button onClick={logout}>Logout</button>
      
      <h3>User Management</h3>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date Created</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.dateCreated}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
