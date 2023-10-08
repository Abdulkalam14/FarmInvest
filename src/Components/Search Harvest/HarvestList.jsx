import React from 'react'
import HarvestCard from './HarvestCard'

const HarvestList = () => {
  return (
    <div className='w-full grid grid-cols-2'>
        <HarvestCard/>
        <HarvestCard/>
    </div>
  )
}

export default HarvestList