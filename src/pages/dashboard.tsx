import { useState } from 'react'
import { Button } from '../components/Button'
import { Card } from '../components/card'
import { CreateContentModel } from '../components/CreateContentModel'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcons'
import { Sidebar } from '../components/sidebar'

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);

  return <div >
    <Sidebar />
    <div className='pl-6 ml-72 min-h-screen bg-gray-100 border-2'>
      <CreateContentModel open={modalOpen} onclose={() => {
        setModalOpen(false);
      }} />
      <div className='pt-6 flex justify-between items-center' >
        <div className='text-2xl font-bold'>
          All Notes
        </div>
        <div className='flex pr-6 justify-end gap-4'>
          <Button varient="secondary" text="Share Brain" startIcon={<ShareIcon />}></Button>
          <Button onClick={() => {
            setModalOpen(true);
          }} varient="primary" text="Add Content" startIcon={<PlusIcon />}></Button>
        </div>
      </div>

      
      <div className='pt-8 flex gap-6'>
        <Card title="Future Projects" type="documents" heading='Things to do today'
          items={[
            "Build a personal knowledge base",
            "Create a habit tracker",
            "Design a minimalist todo app",
          ]}
        />
        <Card type='twitter' title='First Tweet' link="https://twitter.com/billboardcharts/status/1872341859315675297#" />
        <Card type='youtube' title='First Video' link="https://www.youtube.com/watch?v=5fnwmXWRcQM" />
      </div>
    </div>
  </div>


}

