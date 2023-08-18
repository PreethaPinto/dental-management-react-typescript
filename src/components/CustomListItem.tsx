import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { ReactNode } from 'react';

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
  return (
    <>
      <ListItem disablePadding sx={{ display: 'block' }}>
        <ListItemButton
          onClick={onClick}
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
            sx={{ opacity: open ? 1 : 0, padding: '8px' }}
          />
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default CustomListItem;
