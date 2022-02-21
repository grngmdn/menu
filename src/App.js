import React, { useState } from "react"
import Categories from "./Categories"
import Menu from "./Menu"
import items from "./Data"
import { Box, Typography } from "@mui/material"

function App() {

  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState()


  // logic to filter the menu items according to the category
  const filterItems = (category) => {

    if(category === "all") {
      setMenuItems(items)
      return;
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }





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
      <Categories filterItems={filterItems} />
      <Menu menuItems={menuItems} />
    </Box>
  );
}

export default App;
