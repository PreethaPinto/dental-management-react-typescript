import { ReactNode, MouseEventHandler } from 'react';
import { IconButton, Badge } from '@mui/material';

interface CustomIconButtonProps {
  icon: ReactNode;
  badge?: number;
  label?: string;
  edge?: 'start' | 'end' | false | undefined;
  sx?: React.CSSProperties;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const CustomIconButton = ({
  icon,
  badge,
  label,
  edge,
  sx,
  onClick,
}: CustomIconButtonProps) => {
  return (
    <>
      <IconButton
        size='large'
        edge={edge}
        aria-label={label}
        color='inherit'
        onClick={onClick}
        sx={sx}
      >
        {badge ? (
          <Badge badgeContent={badge} color='error'>
            {icon}
          </Badge>
        ) : (
          icon
        )}
      </IconButton>
    </>
  );
};

export default CustomIconButton;
