import StarIcon from '@mui/icons-material/Star';

export const Star = ({ isStar }) => {
  if (isStar) {
    return <StarIcon color="secondary" />;
  } else {
    return <StarIcon />;
  }
};
