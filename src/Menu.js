import { Card, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'


function Menu({menuItems}) {


  return (

    <div>
      {menuItems.map(
        (menuData) => {

          const {title, id, price, img, desc} = menuData
 
          return(
            <Box
              key={id}
            >
              <Box
                sx={{
                  maxWidth: "850px",
                  display: "flex",
                  paddingBottom: "25px",
                  paddingTop: "25px",
                }}
              >
                <img src={img} alt={title} className="photo" />
                <Box
                  sx={{
                    paddingLeft: "25px",
                    paddingRight: "25px",
                  }}
                >
                  <Box
                    sx={{
                      borderBottom: "1px dotted gray",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between"
                    }}
                  >
                    <Typography
                      variant='h6'
                      sx={{
                        color: "#303030",
                      }}
                    >
                      {/* capitalizes the first letter of every word */}
                      {title.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}
                    </Typography>
                    <Typography
                      sx={{
                        color: "goldenrod",
                        fontWeight: "bold"
                      }}
                    >
                      £{price}
                    </Typography>
                  </Box>
                  <Typography
                    variant='body1'
                    color="textSecondary"
                    sx={{
                      paddingTop: "25px",
                    }}
                  >
                    {desc}
                  </Typography>
                </Box>
              </Box>
            </Box>
          )
        }
      )}
    </div>

  )
}

export default Menu



