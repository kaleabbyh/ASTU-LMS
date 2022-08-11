import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const NavLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",
    color: "#00695c",
    display: "inline-block",
    textTransform: "uppercase",
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    transition: "all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1)",
    "&:hover": {
      fontWeight: 600,
      color: "#02e2ff",
      outline: "#02e2ff solid 1px",
    },
  }));

export default NavLink