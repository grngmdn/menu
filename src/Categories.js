import { Button } from '@mui/material'
import React from 'react'

function Categories({filterItems}) {
  return (
    <div>
      <Button
        onClick={()=>{
          filterItems('all')
        }}
      >
        all
      </Button>
      <Button
        onClick={()=>{
          filterItems('breakfast')
        }}
      >
        breakfast
      </Button>
    </div>
  )
}

export default Categories 