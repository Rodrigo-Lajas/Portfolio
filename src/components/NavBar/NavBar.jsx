import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu"
import { NavLink } from "react-router-dom";



export default function NavBar({navArrayLinks}) {
    const [open, setOpen] = useState(false)
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                        <IconButton
                            color="inherit"
                            size="large"
                            edge="start"
                            aria-label="menu"
                            onClick={() => setOpen(true)}
                            sx={{display: {xs: "block", sm: "none"}}}>
                            <MenuIcon />
                        </IconButton>
                    <Typography
                        variant="h6"
                        sx={{ flexGrow: 1 }}>
                        Rodrigo Lajas
                    </Typography>
                    <Box
                        sx={{ display: { xs: "none", sm: "block" } }}>
                        {navArrayLinks.map(item => (
                                <Button
                                    color="inherit"
                                    key={item.title}
                                    component={NavLink}
                                    to={item.path}>
                                    {item.title}
                                </Button>
                            ))
                        }
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                open={open}
                anchor="left"
                onClose={() => setOpen(false)}
                sx={{display: {xs: "block", sm: "none"}}}>                
                <NavListDrawer 
                onClick={() => setOpen(false)}
                navArrayLinks={navArrayLinks} 
                NavLink={NavLink} 
                setOpen={setOpen}/>
            </Drawer>
        </>
    )
}