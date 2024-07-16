import "./NavBar";
import {
  List,
  ListItemText,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import { Box } from "@mui/system";
import PropTypes from "prop-types";


export default function NavListDrawer({
  navArrayLinks,
  NavLink,
  setOpen,
  navBarArrayLinks,
  navBarArrayLinksItems,
}) {
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
          {navBarArrayLinksItems.map((itemBar) => (
            <ListItem disablePadding key={itemBar.title}>
              <ListItemButton
                component={NavLink}
                to={itemBar.path}
                onClick={() => setOpen(false)}
              >
                <ListItemIcon>{itemBar.img}</ListItemIcon>
                <ListItemText>{itemBar.title}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
}
NavListDrawer.propTypes = {
  navArrayLinks: PropTypes.array.isRequired,
  navBarArrayLinks: PropTypes.array.isRequired,
  navBarArrayLinksItems: PropTypes.array.isRequireds,
  setOpen: PropTypes.array.isRequired,
  NavLink: PropTypes.array.isRequired
};
