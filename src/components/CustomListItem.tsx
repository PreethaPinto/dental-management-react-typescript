import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from '@mui/material';
import { ReactNode, useState } from 'react';

interface CustomListItemProps {
  icon: ReactNode;
  primaryText: string;
  open: boolean;
  onClick: () => void;
}

const CustomListItem = ({
  icon,
  primaryText,
  open,
  onClick,
}: CustomListItemProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <ListItem disablePadding sx={{ display: 'block' }}>
        <Tooltip title={primaryText} placement='right'>
          <ListItemButton
            onClick={onClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              {icon}
            </ListItemIcon>
            <ListItemText
              primary={primaryText}
              sx={{
                opacity: open ? 1 : 0,
                padding: '8px',
                textDecoration: 'none',
              }}
            />
          </ListItemButton>
        </Tooltip>
      </ListItem>
      <Box
        sx={{
          display: 'block',
          opacity: hovered ? 1 : 0,
          padding: '8px',
          textAlign: 'right', // Align text to the right
          transition: 'opacity 0.3s',
          backgroundColor: '#f0f0f0', // Background color on hover
          marginLeft: 'auto', // Move the box to the right
        }}
      ></Box>
    </>
  );
};

export default CustomListItem;
