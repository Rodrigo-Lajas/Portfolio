import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Box } from "@mui/system";

export default function NavListDrawer({ navArrayLinks, NavLink,setOpen }) {
    return (
        <Box sx={{ width: 200 }}>
            <nav>
                <List>
                    <Box sx={{
                        display: {
                            xs: "block",
                            sm: "none"
                        }
                    }}>
                        {navArrayLinks.map((item) => (
                            <ListItem
                                disablePadding
                                key={item.title}
                            >
                                <ListItemButton
                                    component={NavLink}
                                    to={item.path}
                                    onClick={() => setOpen(false)}
                                >
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText>{item.title}</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        ))
                        }
                    </Box>
                </List>
            </nav>
        </Box>
    )
}