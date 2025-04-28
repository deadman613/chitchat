import React from 'react'
import { useChatstore } from '../store/useChatstore';
import { Sidebar } from '../components/Sidebar';
import { NoChatSelected} from '../components/NoChatSelected';
import { ChatContainer } from '../components/ChatContainer';


const Homepage = () => {
  const { selectedUsers } = useChatstore();

  return (
    <div className="h-screen text-gray-300 bg-[#1c1f1d57]">
      <div className="flex items-center justify-center pt-20 px-4">
        <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)]">
          <div className="flex h-full rounded-lg overflow-hidden">
            <Sidebar />

            {!selectedUsers ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage   