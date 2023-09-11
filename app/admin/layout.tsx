import NavBar from "../components/NavBar"; // import the NavBar component
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

interface Props
{
  children: React.ReactNode;
}


const AdminLayout = ({ children }: Props) =>
{
  return (<>
    <div className=''>
      <header></header>
     <div className="flex">
      <aside className="bg-slate-200 p-5 mr-5">Admin Sidebar </aside>
      <main className="p-5">{ children }</main>
      </div>
    </div>
    </>
  )
}
export default AdminLayout