import styled from '@emotion/styled';

const LogoBox = styled("div")(({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  }));

export default LogoBox