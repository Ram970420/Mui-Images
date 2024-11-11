// src/App.js
import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Divider,
} from '@mui/material';
import Cards from './Cards';
// import Drawerr from './Drawerr';

const drawerWidth = 240;

function App() {
  return (
    
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6">Rating of the Movies Depends on Performances</Typography>
        </Toolbar>
      </AppBar>
      <Cards />
      {/* <Drawerr/> */}
      <div>


        {/* const drawerWidth = 240; */}

        <Box sx={{ display: 'flex' }}>
          <CssBaseline />

          {/* Sidebar */}
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
              },
            }}
            variant="permanent"
            anchor="left"
          >
            <Toolbar>
              <Typography variant="h6" noWrap>
                Filmfare
              </Typography>
            </Toolbar>
            <Divider />
            <List>
              {['Popular', 'Top Rated', 'Upcoming', 'Action', 'Advanture', 'Animation', 'Commedy'].map((text) => (
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Drawer>

          {/* Main Content */}
          <Box component="main" sx={{ flexGrow: 5, p: 10}}>
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
              <Toolbar>
                <Typography variant="h6" noWrap>
                  Filmfare 
                </Typography>
              </Toolbar>
            </AppBar>
            <Toolbar />
            <Box sx={{ paddingTop: 2 }}>
              <Typography variant="h4" gutterBottom>
                Welcome to Filmfare
              </Typography>
              <Typography variant="body1">
                Select a category from the sidebar to explore popular, top-rated, Action, Advanture, Animation, Commedy and upcoming films.
              </Typography>
            </Box>
          </Box>
        </Box>
        );
}

        export default App;

      </div>

    </div>
  );
}

export default App;
