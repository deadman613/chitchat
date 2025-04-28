import React, { useEffect } from 'react'
import { useChatstore } from '../store/useChatstore'
import { Loader, User } from 'lucide-react';

export const Sidebar = () => {

  const { setSelectedUser, selectedUsers, users, getUsers, isUsersLoading } = useChatstore();
  const onlineusers = [];

  useEffect(() => {
    getUsers();

  }, [getUsers]);

  if (isUsersLoading) return <div> <Loader /> </div>



  return (
    <aside className=' h-full w-20 lg:w-70 bg-[#13121125] border-r border-[#d986ee] rounded-2xl flex flex-col transition-all duration-200'>
      <div className=' border-b  border-[#d986ee] w-full p-5'>
        <div className=' flex items-center gap-2'>
          <User className='size-8' />
          <span className='font-medium hidden lg:block'>Contacts</span>
        </div>
        {/* online filter here */}
      </div>

      <div className='overflow-y-auto w-full py-3'>
        {
          users.map((user) => {
            <button
              key={user._id}
              onClick={() => setSelectedUser(user)}
              className={`
            w-full p-3 flex items-center gap-3
            hover:bg-base-300 transition-colors
            ${selectedUsers?._id === user._id ? "bg-[#cf65f0] ring-1 ring-base-300" : ""}
          `}>
              <div className='relative mx-auto lg:mx-0'>
                <img src={user.profile || "/user.png"}
                  alt={user.name}
                  className="size-12 object-cover rounded-full"
                />
                {
                  onlineuser.includes(user._id) && (<span className='absolute bottom-0 right-0 size-3 bg-green-500 
                rounded-full ring-2 ring-zinc-900'/>)

                }</div>

                {/* user information only no larger screen */}

              <div className="hidden lg:block text-left min-w-0">
                <div className="font-medium truncate">{user.fullName}</div>
                <div className="text-sm text-zinc-400">
                  {onlineusers.includes(user._id) ? "Online" : "Offline"}
                </div>
              </div>

            </button>

          })


        }



      </div>


    </aside>
  )
}
