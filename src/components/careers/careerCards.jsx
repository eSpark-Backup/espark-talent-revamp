'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Select,
  MenuItem,
  Button,
  Container,
  Typography,
  Paper,
  Pagination,
} from '@mui/material';

const CareerCards = ({ jobs, jobCategories }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const totalPages = Math.ceil(jobs.length / postsPerPage);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const renderPaginationButtons = () => {
    const buttons = [];
    let ellipsis = '...';

    for (let page = 1; page <= totalPages; page++) {
      const isSelected = page === currentPage;

      if (
        page === 1 ||
        page === totalPages ||
        Math.abs(page - currentPage) <= 1
      ) {
        buttons.push(
          <Pagination.Item
            key={page}
            active={isSelected}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </Pagination.Item>
        );
      } else if (buttons[buttons.length - 1] !== ellipsis) {
        buttons.push(
          <Pagination.Ellipsis key={`ellipsis-${buttons.length}`} />
        );
      }
    }
    return buttons;
  };

  const handleJobCategoryChange = (e) => {
    const value = e.target.value;

    setSelectedCategory(value);
    setCurrentPage(1);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Job Categories
      </Typography>
      <Select
        className="dropdown"
        value={selectedCategory}
        onChange={handleJobCategoryChange}
      >
        <MenuItem value="all">All</MenuItem>
        {jobCategories.map((category) => (
          <MenuItem key={category._id} value={category._id}>
            {category.title}
          </MenuItem>
        ))}
      </Select>
      <div>
        {jobs
          .slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)
          .map((job, index) => (
            <Paper key={index} elevation={3} className="career-card">
              <div className="career-card-title">
                <Typography variant="h5">{job.title}</Typography>
                <Typography>
                  {job.location}
                  <br />
                  {job.date}
                </Typography>
              </div>
              <hr className="horizontal-line" />
              <div className="career-card-description">
                <Typography variant="h5">Description</Typography>
                <Typography>{job.description}</Typography>
              </div>
              <div className="career-card-button">
                <Link href={job.applyLink}>
                  <Button variant="contained" color="primary" target="_blank">
                    Apply Now
                  </Button>
                </Link>
              </div>
            </Paper>
          ))}
        {jobs.length > postsPerPage && (
          <Pagination className="pagination-area">
            <Pagination.Prev
              onClick={handlePreviousClick}
              disabled={currentPage === 1}
            />
            {renderPaginationButtons()}
            <Pagination.Next
              onClick={handleNextClick}
              disabled={currentPage === totalPages}
            />
          </Pagination>
        )}
      </div>
    </Container>
  );
};

export default CareerCards;
