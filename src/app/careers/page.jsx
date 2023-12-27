import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CareerCards from "@/components/Careers/CareerCards";

const Career = () => {
  // Replace the dynamic data with static values
  const jobsData = [
    {
      title: "Software Engineer",
      location: "Anytown, USA",
      date: "2023-01-01",
      description: "Exciting software engineering position.",
      applyLink: "/apply-software-engineer",
    },
    // Add more static job data as needed
  ];

  const jobCategories = [
    { _id: "1", title: "Engineering" },
    { _id: "2", title: "Marketing" },
    // Add more static job category data as needed
  ];

  return (
    <>
      <Container maxWidth="xxl" className="career-section ptb-100">
        <Typography variant="h4" component="div" gutterBottom>
          Careers
        </Typography>
        <CareerCards jobs={jobsData} jobCategories={jobCategories} />
      </Container>
    </>
  );
};

export default Career;
