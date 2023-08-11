import { Add } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  CssBaseline,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import SchoolGallary from "../components/school/SchoolGallary";

const School = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box>
          <SchoolGallary />
        </Box>
        <Paper sx={{ padding: "1rem 1rem 0 1rem" }}>
          <Typography variant="body2" color="text.secondary">
            The current School of Electrical Engineering and Computing is
            established following, the renaming of the Adama Science and
            Technology University by the Council of Ministers in May 2011 and
            shifting of the university from Ministry of Education (MoE) to
            Ministry of Science and Technology (MoST) to work towards the
            attainment to become the best Centre of Excellencies in Science and
            Technology in Ethiopia. Thereby, allowing for the realization of
            goal has set in the Growth and Transformation Plan (GTP).
          </Typography>
          <Box>
            Currently, School of Electrical Engineering and Computing has three
            programs under it:
            <Accordion TransitionProps={{ unmountOnExit: true }}>
              <AccordionSummary
                expandIcon={<Add />}
                aria-controls="dept"
                id="dept-1"
              >
                <Typography cursor="pointer" variant="h6" color="primary">
                  Computer Science and Engineering (CSE) Program
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  The mission of the Computer Science and Engineering CSE
                  program is to provide students with a broad and flexible
                  education in computer science and engineering, to prepare its
                  graduates for rapidly changing technological fields, and give
                  them a sound basis for professional practice, advanced
                  education, active citizenship, and lifelong learning. The
                  students are prepared to expand this knowledge through
                  research into new technologies, design methods, and analysis
                  techniques that link the knowledge with multi-disciplinary
                  fields and advance the state of the art. With a knowledge of
                  contemporary technological issues and their impact globally,
                  economically, and environmentally, computer scientists and
                  engineers are at the forefront of advances that continually
                  transform society. <Link href="https://www.astu.edu.et/images/linked-pdf/SoEEC-Website-Profile-sent-for-PR.pdf"> learn more</Link>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion TransitionProps={{ unmountOnExit: true }}>
              <AccordionSummary
                expandIcon={<Add />}
                aria-controls="dept"
                id="dept-2"
              >
                <Typography cursor="pointer" variant="h6" color="primary">
                  Electronics and Communication Engineering (ECE) program
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Electronics and Communication Engineering is one of the
                  programs of School of Electrical Engineering and Computing
                  that aims to integrate separate engineering fields to meet the
                  joint demands made by the Electronics and Communication
                  industries in today's world. This program includes design,
                  implementation and testing of a wide range of Electronics and
                  Communication systems such as electronic devices,
                  communications devices, digital signal processing and
                  networking. <Link href="https://www.astu.edu.et/images/linked-pdf/SoEEC-Website-Profile-sent-for-PR.pdf"> learn more</Link>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion TransitionProps={{ unmountOnExit: true }}>
              <AccordionSummary
                expandIcon={<Add />}
                aria-controls="dept"
                id="dept-3"
              >
                <Typography cursor="pointer" variant="h6" color="primary">
                  Electrical Power and Control Engineering (EPCE) program
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  The program of Electrical Power and Control Engineering (EPCE)
                  is one of the three programs in the School of Electrical
                  Engineering and Computing in Adama Science and Technology
                  University. The Program is aimed in serving the country by
                  producing engineers and researchers who are playing key roles
                  in the various sectors of development in the country and also
                  advanced the University’s reputation. The core strategy of the
                  Program is to pursue its vision and mission to enhance its
                  research, linkage with industry, academic and scholarly
                  activities and become a center of excellence for its programs,
                  thereby improving its eminence in national and international
                  rankings. <Link href="https://www.astu.edu.et/images/linked-pdf/SoEEC-Website-Profile-sent-for-PR.pdf"> learn more</Link>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Paper>
        <Box pt={2}>
          <h4>Vision of SoEEC </h4>
          <ul>
            <li>
              To produce a world-class competent electrical engineers and
              computing professionals who are equipped with necessary skills and
              knowledge to solve individuals and organizational problems of the
              country and bring about growth to the whole world.
            </li>
            <li>
              To excel in teaching, research, and industry linkage/consultancy
              at a national level as well as regionally in the field of
              Electrical Engineering and Computing.
            </li>
          </ul>
          <h4>Mission of SoEEC</h4>
          <ul>
            <li>
              To its students, the SoEEC provides world-class curricula that
              facilitate student-centered and research-oriented learning in
              Electrical Engineering and Computing field that are relevant to
              their lives and careers, valuable in terms of content and
              competencies, and connected to the needs of industry.
            </li>
            <li>
              To industry, the SoEEC produces practitioner-oriented electrical
              engineers with the field of specialization in Electrical power,
              control, communication, Electronics, software, computer science
              and information system who can provide plausible scientific
              solutions to real world problems. The SoEEC actively partners with
              industries to provide students the opportunity to acquire
              practical skills from industry expertise.
            </li>
          </ul>
        </Box>
        <Box py={2}>
          <h4>Objectives of SoEEC</h4>
          <Accordion TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary expandIcon={<Add />}>
              <Typography color="primary">General Objectives</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li>
                  To direct and assist students in the acquisition of
                  fundamental principles of Computer Science and Engineering,
                  Electronics and Communication Engineering & Electrical Power
                  and Control Engineering.
                </li>
                <li>
                  To stimulate and encourage students to have sound practical
                  knowledge of the fields, through project work and evaluation.
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary expandIcon={<Add />}>
              <Typography color="primary">Specific Objectives</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li>
                  To Design different problem-solving principles and techniques
                  in the area of Electrical engineering and computing.
                </li>
                <li>
                  To Understand and apply high-level tools and emerging
                  Technologies.
                </li>
                <li>
                  To Develop communication skills to effectively interact with
                  customers, supervisors and peers, both orally and in writing
                </li>
                <li>
                  To Learn to work effectively in teams to achieve a common goal{" "}
                </li>
                <li>
                  To Develop skills to monitor, supervise, manage projects and
                  handle conflict
                </li>
                <li>
                  To Understand ethical expectations of a computing professional
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default School;
