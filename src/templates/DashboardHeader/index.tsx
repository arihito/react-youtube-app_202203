import { AppBar, Toolbar, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Logo } from '../../components/Logo'

export const DashboardHeader = () => {
  return (
    <AppBar elevation={0} color="inherit">
      <Toolbar>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <div>
          <Logo />
        </div>
      </Toolbar>
    </AppBar>
  )
}
