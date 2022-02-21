import React, { useState } from "react"
import Categories from "./Categories"
import Menu from "./Menu"
import data from "./Data"
import { Box, Typography } from "@mui/material"

function App() {

  const [menuItems, setMenuItems] = useState(data)
  const [categories, setCategories] = useState()

  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "60px",
        paddingBottom: "60px",
      }}
    >
      <header>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: "#303030"
          }}
        >
          Our Menu
        </Typography>
      </header>
      <Categories />
      <Menu menuItems={menuItems} />
    </Box>
  );
}

export default App;
