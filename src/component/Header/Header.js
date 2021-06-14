import React from 'react';
import clsx from 'clsx';
import './Header.css';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import DevicesIcon from '@material-ui/icons/Devices';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import img from '../../images/Aku.jpg'
import imgTwo from '../../images/akash-designstyle-boots-m.png'
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar style={{ background: 'rgba(0,0,0,0.8)' }}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
          <img style={{width: '100px', borderRadius:'50px'}} src={imgTwo} alt=""/>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer style={{ background: 'rgba(0,0,0,0.8)' }}
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <img style={{width: '100%',hight:'50%', marginTop:'20px',borderRadius:'1px'}} src={img} alt=""/>
        <Divider />
        <Link className="bar" to={`/`}>
        <List>
        
            <ListItem>
            
            <ListItemIcon><HomeIcon></HomeIcon>
           </ListItemIcon><strong className="pra mt-2 mb-1">Home</strong>
              <ListItemText />
            </ListItem>
           
        </List>
        
        <Divider />
        </Link>
        <Link className="bar" to={`/about`}>
        <List>
         
         <ListItem>
           <ListItemIcon> <InfoIcon></InfoIcon>
        </ListItemIcon><p className="pra mt-2 mb-1">About</p>
           <ListItemText />
         </ListItem>
      
     </List>
     
     <Divider />
     </Link>
     <Link className="bar" to={`/project`}>
     <List>
         
         <ListItem>
           <ListItemIcon> <DevicesIcon></DevicesIcon>
        </ListItemIcon><p className="pra mt-2 mb-1">Projects</p>
           <ListItemText />
         </ListItem>
      
     </List>
     
     <Divider />
     </Link>
     <Link className="bar" to={`/blogs`}>
     <List>
         
         <ListItem>
           <ListItemIcon> <LocalLibraryIcon></LocalLibraryIcon>
        </ListItemIcon><p className="pra mt-2 mb-1">Blogs</p>
           <ListItemText />
         </ListItem>
      
     </List>
     
     <Divider />
     </Link>
     <Link className="bar" to={`/contact`}>
     <List>
         
         <ListItem>
           <ListItemIcon> <ContactMailIcon></ContactMailIcon>
        </ListItemIcon><p className="pra mt-2 mb-1">Contact</p>
           <ListItemText />
         </ListItem>
      
     </List>
     
     <Divider />
     </Link>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
       
      </main>
    </div>
  );
}
