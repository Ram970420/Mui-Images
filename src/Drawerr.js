import { Drawer } from "@mui/material";

function Drawerr(){
    return(
        <Drawer
          key="D"
          anchor="left"
          open={true}
        //   onClose={toggleDrawer(anchor, false)}
        >
          {/* {list(anchor)} */}
        </Drawer>
    )

}

export default Drawerr;

