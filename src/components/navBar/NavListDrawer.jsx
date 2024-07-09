import "./NavBar";
import {
  List,
  ListItemText,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import { Box } from "@mui/system";

export default function NavListDrawer({ navArrayLinks, NavLink, setOpen, navBarArrayLinks }) {
  return (
    <Box
      sx={{
        width: 250,
      }}
    >
      <nav>
        <List>
        {navBarArrayLinks.map((item) => (
            <ListItem disablePadding key={item.title}>
              <ListItemButton
                component={NavLink}
                to={item.path}
                onClick={() => setOpen(false)}
              >
                <ListItemIcon>{item.img}</ListItemIcon>
                <ListItemText>{item.title}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
          {navArrayLinks.map((item) => (
            <ListItem disablePadding key={item.title}>
              <ListItemButton
                component={NavLink}
                to={item.path}
                onClick={() => setOpen(false)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.title}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
          
        </List>
      </nav>
    </Box>
  );
}
