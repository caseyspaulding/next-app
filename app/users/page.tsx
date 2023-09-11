import Link from 'next/link'
import UserTable from './UserTable'


interface Props
{
  searchParams: {sortOrder: string}
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) =>
{
  
  return (
    <>
      <h1>Users</h1>
      <Link className='btn'  href='/users/new'>New User</Link>
      <UserTable sortOrder={sortOrder } />
    </>
  )
}
export default UsersPage
