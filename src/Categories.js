import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function Categories({filterItems, categories}) {
  return (
      <Box
        sx={{
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
      >
        {categories.map((category, index) => {
          return(
            <Button
              key={index}
              onClick={() => filterItems(category)}
              sx={{
                color: "goldenrod",
                "&:hover": {
                  backgroundColor: "goldenrod",
                  color: "white"
                }
              }}
            >
              {category}
            </Button>
          )
        })}
      </Box>
  )
}

export default Categories  