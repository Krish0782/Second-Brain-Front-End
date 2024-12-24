import { useState } from 'react'
import { Button } from './components/Button'
import { Card } from './components/card'
import { CreateContentModel } from './components/CreateContentModel'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcons'

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return <div className='p-4'>
    <CreateContentModel open={modalOpen} onclose={() => {
      setModalOpen(false);
    }} />
    <div className='flex justify-end gap-2'>
      <Button onClick={()=>{
        setModalOpen(true);
      }} varient="primary" text="Add Content" startIcon={<PlusIcon />}></Button>
      <Button varient="secondary" text="Share" startIcon={<ShareIcon />}></Button>
    </div>


    <div className='flex gap-4'>
      <Card type='twitter' title='first tweet' link="https://twitter.com/billboardcharts/status/1869790670157734220#" />


      <Card type='youtube' title='my youtube video' link="https://www.youtube.com/watch?v=5fnwmXWRcQM" />
    </div>
  </div>


}


export default App
