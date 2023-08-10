import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import { ReactNode } from 'react';

interface CustomListItemProps {
  icon: ReactNode;
  primaryText: string;
  open: boolean;
}

const CustomListItem = ({ icon, primaryText, open }: CustomListItemProps) => {
  return (
    <>
      <ListItem disablePadding sx={{ display: 'block' }}>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
          }}
        >
          {icon}
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
