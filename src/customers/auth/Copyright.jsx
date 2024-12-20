import { Link } from "@mui/icons-material";
import { Typography } from "@mui/material";

export default function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>
        {new Date().getFullYear()}
      </Typography>

    );
  }