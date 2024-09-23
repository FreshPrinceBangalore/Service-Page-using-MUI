import {  Box, Button, Container, Paper, Typography } from '@mui/material';
import React from 'react'

const serviceList = ["Service 1", "Service 2", "Service 3"];

const App = () => {
  return (
    <>
    <Container>
      <Typography variant="h1" sx={{ my: 4 ,textAlign:"center", color:"primary.main"}}>
        Services
      </Typography>
      <Typography variant="h2">Overview</Typography>
      <Box sx={{pt: 4, display:"flex", flexDirection:{xs: "column", md:"row"},justifyContent: "space-between", gap: 4,}}>
      {serviceList.map((service) => (
        <Paper elevation={3} sx={{width:{ xs:1 ,md:320}}}>
          <Box sx={{m:3}}>
            <Typography variant="h3">{service}</Typography>
            <Typography sx={{mt:3}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto fugit reprehenderit ut cum ab quod ad cupiditate consequuntur maxime vel harum perferendis repellat voluptas facilis, quis architecto voluptatum optio dolore!</Typography>
            <Button variant="contained" sx={{mt: 2}} color="secondary">Learn more</Button>
            </Box>
        </Paper>
      ))}
      </Box>
    </Container>
    </>
  )
}

export default App
