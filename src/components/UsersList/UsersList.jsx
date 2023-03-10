import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from 'redux/users/usersSelectors';
import { deleteUser, updateStatus } from 'redux/users/usersSlice';
export const UsersList = () => {
  const users = useSelector(getUsers);
  const dispatch = useDispatch();
  console.log(users);
  return (
    <>
      {users.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>Name</th>
              <th>Age</th>
              <th>Status</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {users.map(({ id, name, age, status }, index) => {
              return (
                <tr key={id}>
                  <td>{index + 1}</td>
                  <td>Name{name}</td>
                  <td>Age{age}</td>
                  <td
                    onClick={() => {
                      dispatch(updateStatus(id));
                    }}
                  >
                    Status: {status}
                  </td>
                  <td>
                    {' '}
                    <button
                      type="button"
                      onClick={() => dispatch(deleteUser(id))}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>no users</p>
      )}
    </>
  );
};
