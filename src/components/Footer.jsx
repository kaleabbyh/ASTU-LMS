import React from "react";

import { Box } from "@mui/system";
import { Icon, Typography } from "@mui/material";
import { Email, Facebook, LinkedIn, LocationOn,  Phone, Twitter, YouTube } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box className="footer">
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            <span>
              <img width={100} src="../images/logo.png" alt="Compony logo" />
            </span>
          </h3>

          <Typography component={"p"} className="footer-links">
            <a href="www.astu.edu.et" className="link-1">
              Home
            </a>

            <a href="www.astu.edu.et">Blog</a>

            <a href="www.astu.edu.et">About</a>

            <a href="www.astu.edu.et">Faq</a>

            <a href="www.astu.edu.et">Contact</a>
          </Typography>

          <p className="footer-company-name">ASTU LMS &copy; 2022</p>
        </div>

        <div className="footer-center">
          <div>
            <Icon>
              <LocationOn sx={{ paddingRight: 1, color: "#a9d3df" }} />
            </Icon>
            <p>
              <span>Adama</span> Oromia, Ethiopia
            </p>
          </div>

          <div>
            <Icon>
              <Phone sx={{ paddingRight: 1, color: "#a9d3df" }} />
            </Icon>
            <p>+251 22545786</p>
          </div>

          <div>
            <Icon>
              <Email sx={{ paddingRight: 1, color: "#a9d3df" }} />
            </Icon>
            <Typography component={"p"}>
              <a href="mailto:info.lms@astu.edu.et" style={{ color: "white" }}>
                info.lms@astu.edu.et
              </a>
            </Typography>
          </div>
        </div>

        <Box component={"div"} className="footer-right">
          <p className="footer-company-about">
            <span>About ASTU LMS</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>

          <Box component={"div"} className="footer-icons">
            <a href="www.facebook.com">
              <Icon>
                <Facebook />
              </Icon>
            </a>
            <a href="www.facebook.com">
              <Icon>
                <Twitter />
              </Icon>
            </a>
            <a href="www.facebook.com">
              <Icon>
                <LinkedIn />
              </Icon>
            </a>
            <a href="www.facebook.com">
              <Icon>
                <YouTube />
              </Icon>
            </a>
          </Box>
        </Box>
      </footer>
    </Box>
  );
};
export default Footer;