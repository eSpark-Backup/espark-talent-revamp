'use client';
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Pagination,
  PaginationItem,
  useMediaQuery,
  Skeleton,
  Button,
} from '@mui/material';
import CareersForm from './CareersForm';
import HireModal from '../Hire-remote/HireModal';
import {
  applyButtonBoxStyle,
  applyButtonStyle,
  applyButtonTextStyle,
  cardContainerStyle,
  CAREERS_FORM_DATA,
  jobDiscriptionBoxStyle,
  jobDiscriptionHeadingStyle,
  jobDiscriptionTextStyle,
  jobLocationTextStyle,
  jobTitleBoxStyle,
  jobTitleTextStyle,
} from '@/constants/careers-form-data';
import {
  handleApplyButtonClick,
  handleJobCategoryChange,
  handlePaginationChange,
  paginateData,
  totalPageCount,
} from '@/utils';

const CareerCards = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [page, setPage] = useState(1);
  const [jobData, setJobData] = useState(null);
  const jobShowPerPage = 5;
  const paginatedData = paginateData(
    data,
    selectedCategory,
    page,
    jobShowPerPage
  );
  const pageCount = totalPageCount(data, selectedCategory, jobShowPerPage);
  const isSmallScreen = useMediaQuery((theme) =>
    theme?.breakpoints?.down('xs')
  );
  const isMediumScreen = useMediaQuery((theme) =>
    theme?.breakpoints?.between('sm', 'md')
  );
  const { form } = CAREERS_FORM_DATA;

  const handleOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

  const jobSelect = (jobs) => (
    <div className="careers-dropdown-container">
      <select
        id="careers-dropdown"
        className="careers-dropdown-select"
        value={selectedCategory}
        onChange={(event) =>
          handleJobCategoryChange(event, setSelectedCategory, setPage)
        }
      >
        <option value="all">All</option>
        {jobs?.map((category, index) => (
          <option key={index} value={category?.title}>
            {category?.title}
          </option>
        ))}
      </select>
    </div>
  );

  const jobCard = (item, index) => (
    <Box key={index} sx={cardContainerStyle}>
      <Box sx={jobTitleBoxStyle}>
        <Typography variant="h3" color="secondary" sx={jobTitleTextStyle}>
          {item?.title || (
            <Skeleton variant="text" sx={{ fontSize: '3rem', width: '80%' }} />
          )}
        </Typography>
        <Typography variant="body1" sx={jobLocationTextStyle}>
          {item?.location || (
            <Skeleton variant="text" sx={{ fontSize: '1rem', width: '70%' }} />
          )}
        </Typography>
      </Box>
      <Box sx={jobDiscriptionBoxStyle}>
        {!item?.title ? (
          <Skeleton variant="text" sx={{ fontSize: '3rem' }} />
        ) : (
          <Typography
            sx={jobDiscriptionHeadingStyle}
            variant="h3"
            color="secondary"
          >
            Description
          </Typography>
        )}
        {!item?.description ? (
          Array(5)
            ?.fill()
            ?.map((_, i) => (
              <Skeleton key={i} variant="text" sx={{ fontSize: '1rem' }} />
            ))
        ) : (
          <Typography
            color="#000"
            variant="body1"
            sx={jobDiscriptionTextStyle}
            dangerouslySetInnerHTML={{ __html: item?.description }}
          />
        )}
      </Box>
      <Box sx={applyButtonBoxStyle}>
        {!item?.title ? (
          <Skeleton variant="text" height={100} width={200} />
        ) : (
          <Button
            color={'primary'}
            size="small"
            onClick={() => handleApplyButtonClick(item, handleOpen, setJobData)}
            sx={applyButtonStyle}
          >
            <Typography variant="body1" sx={applyButtonTextStyle}>
              {`Apply Now >`}
            </Typography>
          </Button>
        )}
      </Box>
    </Box>
  );

  return (
    <Box sx={{ py: { xs: '5%', sm: '3%', md: '3%' } }}>
      <Container>
        <Box sx={{ mt: 1, mb: 2.8 }}>{jobSelect(data)}</Box>
        {paginatedData?.map((item, index) => jobCard(item, index))}
        <HireModal
          content={
            jobData && (
              <CareersForm
                form={form}
                jobData={jobData}
                handleCloseModal={handleModalClose}
              />
            )
          }
          open={open}
          handleModalClose={handleModalClose}
        />
        {pageCount > 1 && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Pagination
              count={pageCount}
              page={page}
              onChange={(e, value) => handlePaginationChange(e, value, setPage)}
              color="primary"
              size={
                isSmallScreen ? 'small' : isMediumScreen ? 'medium' : 'large'
              }
              renderItem={(item) => (
                <PaginationItem
                  {...item}
                  sx={{
                    borderRadius: '10px',
                    '&.Mui-selected': {
                      backgroundColor: 'primary.main',
                      color: 'white',
                    },
                  }}
                />
              )}
            />
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default CareerCards;
