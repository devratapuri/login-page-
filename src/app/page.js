"use client"
import { AppBar,Typography } from "@mui/material";
import CenteredTabs from '@/Component/Centeredtabs';

export default function Home() {
  return (
    <main >
    <AppBar position="static" style={{"background-color": "white","height":"500px"}}>
       <Typography variant="h6" color="black">
          Udacity
        </Typography>
       </AppBar>
       <CenteredTabs></CenteredTabs>
    </main>
  )
}
