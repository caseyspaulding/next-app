const UsersPage = async() =>
{
  interface User {
    id: number;
    name: string;
  }
  
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await response.json();

  return (
  <>
    <h1>Users</h1>
    <ul>
      { users.map(user => <li key={ user.id }> {user.name} )}
    </ul>
    </>
  )

}
export default UsersPage