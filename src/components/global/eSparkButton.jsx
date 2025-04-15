import { Button, Typography } from '@mui/material';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  buttonStyles,
  typographyStyles,
} from '@/components/global/eSparkButtonStyles';

const ESparkButton = ({ title, link, color, onClick, size, hover, target }) => {
  const pathName = usePathname();
  const book_A_demo_meeting = '/book-a-demo-meeting';

  let btnVariant;

  if (color === 'primary') {
    btnVariant = 'primary';
  } else if (color === 'secondary') {
    btnVariant = 'secondary';
  } else if (color === 'default') {
    btnVariant = 'default';
  } else {
    return null;
  }

  return (
    <Link href={link} target={target}>
      <Button
        size="small"
        variant={btnVariant}
        onClick={onClick}
        sx={buttonStyles(hover, size)}
      >
        <Typography
          variant="body1"
          sx={typographyStyles(pathName, book_A_demo_meeting)}
        >
          {title}
        </Typography>
      </Button>
    </Link>
  );
};

export default ESparkButton;
