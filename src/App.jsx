import Button from '@mui/material/Button'
import HomeIcon from '@mui/icons-material/Home'
import { Typography } from '@mui/material'

function App() {
  return (
    <>
      <p>anhquan74.dev</p>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <HomeIcon />
      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      <HomeIcon color="success" />
      <HomeIcon color="action" />
      <HomeIcon color="disabled" />
      <Typography variant="body2" color="text.secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. A repellendus delectus molestias dolorem, odio quam esse magnam cumque qui unde?</Typography>
    </>
  )
}

export default App
