'use client';
import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Select,
  MenuItem,
  Pagination,
  PaginationItem,
  useMediaQuery,
  Modal,
  Skeleton,
} from '@mui/material';
import ESparkButton from '../global/eSparkButton';
import CareersForm from './CareersForm';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import { CAREERS_FORM_DATA } from '@/constants/careers-form-data';

const CareerCards = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [page, setPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [jobData, setJobData] = useState(null);
  const jobs = data ? data : [1, 2, 3];
  const filteredData =
    selectedCategory === 'all'
      ? jobs
      : jobs?.filter((item) => item?.title === selectedCategory);
  const perPage = 5;
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const paginatedData = filteredData?.slice(startIndex, endIndex);

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('xs'));
  const isMediumScreen = useMediaQuery((theme) =>
    theme.breakpoints.between('sm', 'md')
  );
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  const handleJobCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setPage(1);
  };

  const handlePaginationChange = (event, value) => {
    setPage(value);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleApplyButtonClick = (selectedJobData) => {
    setOpenModal(true);
    setJobData(selectedJobData);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {}, [selectedCategory]);

  const { form } = CAREERS_FORM_DATA;

  return (
    <>
      <Box sx={{ py: { xs: '5%', sm: '3%', md: '2%' } }}>
        <Container>
          <Box>
            <Select
              labelId="job-category-label"
              id="job-category"
              value={selectedCategory}
              onChange={handleJobCategoryChange}
              fullWidth
              fontSize={{
                xs: '13px',
                sm: '13px',
                md: '15px',
                lg: '20px',
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    '& .MuiMenuItem-root': {
                      color: '#000',
                    },
                  },
                },
              }}
            >
              <MenuItem value="all">All</MenuItem>
              {jobs?.map((category, index) => (
                <MenuItem key={`job-category-${index}`} value={category?.title}>
                  {category?.title}
                </MenuItem>
              ))}
            </Select>
          </Box>
          {paginatedData?.map((item, index) => (
            <Grid
              key={index}
              container
              sx={{
                display: 'flex',
                justifyContent: 'center',
                borderTop: '.5px solid #ced4da',
                py: { lg: '3%', sm: '3%', xs: '20px' },
                my: { xs: '20px', sm: '20px' },
                borderRadius: { xs: '10px', sm: '20px', lg: '0', md: '0' },
                boxShadow: {
                  md: 'none',
                  sm: `5px 5px 15px rgba(0,0,0,.3)`,
                  xs: `5px 5px 15px rgba(0,0,0,.3)`,
                },
              }}
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={3}
                lg={3}
                px={{ xs: '10px', sm: '20px' }}
              >
                <Typography variant="h3" color="secondary">
                  {item?.title || (
                    <Skeleton variant="text" sx={{ fontSize: '3rem' }} />
                  )}
                </Typography>
                <Typography
                  variant="body1"
                  fontSize={{
                    xs: '12px',
                    sm: '12px',
                    md: '15px',
                    lg: '20px',
                  }}
                  color="#000"
                >
                  {item?.location || (
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                  )}
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={7}
                lg={7}
                px={{ xs: '10px', sm: '20px' }}
              >
                {!item?.title ? (
                  <Skeleton variant="text" sx={{ fontSize: '3rem' }} />
                ) : (
                  <Typography
                    variant="h3"
                    color="secondary"
                    borderTop={{
                      md: 'none',
                      sm: '.5px solid #ced4da',
                      xs: '.5px solid #ced4da',
                    }}
                    pt="10px"
                  >
                    Description
                  </Typography>
                )}
                {!item?.description ? (
                  <>
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                  </>
                ) : (
                  <Typography
                    variant="body1"
                    fontSize={{
                      xs: '12px',
                      sm: '12px',
                      md: '15px',
                      lg: '20px',
                    }}
                    color="#000"
                  >
                    {item?.description}
                  </Typography>
                )}
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={2}
                lg={2}
                display="flex"
                alignItems={'center'}
                justifyContent={'center'}
                px={{ xs: '10px', sm: '20px' }}
              >
                {!item?.title ? (
                  <Skeleton variant="text" height={100} width={200} />
                ) : (
                  <Box py={{ xs: '10px', sm: '10px' }}>
                    <ESparkButton
                      title={`Apply Now >`}
                      link={'#'}
                      onClick={() => handleApplyButtonClick(item)}
                      color={'primary'}
                    />
                  </Box>
                )}
              </Grid>
            </Grid>
          ))}
          <Modal
            open={openModal}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <>
              <Box
                sx={{
                  position: { lg: 'absolute', sm: 'relative' },
                  top: { lg: '50%', sm: '50%' },
                  left: { lg: '50%', sm: '50%' },
                  transform: {
                    lg: 'translate(-50%, -50%)',
                    sm: 'translate(-50%, -50%)',
                  },
                  width: 'auto',
                  bgcolor: 'background.paper',
                  border: '2px solid #000',
                  borderRadius: '15px',
                  boxShadow: 24,
                }}
              >
                <Box textAlign={'right'} px={2} pt={2}>
                  <Box
                    onClick={handleCloseModal}
                    sx={{
                      fontSize: '20px',
                      fontWeight: 800,
                      '&:hover': {
                        cursor: 'pointer',
                      },
                    }}
                  >
                    <CloseSharpIcon color="primary" />
                  </Box>
                </Box>
                <Box
                  sx={{
                    px: 4,
                    pb: 4,
                    pt: 1,
                  }}
                >
                  {jobData && (
                    <CareersForm
                      form={form}
                      jobData={jobData}
                      handleCloseModal={handleCloseModal}
                    />
                  )}
                </Box>
              </Box>
            </>
          </Modal>
          {filteredData?.length > perPage && (
            <Box
              spacing={2}
              sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}
            >
              <Pagination
                count={Math.ceil(filteredData?.length / perPage)}
                page={page}
                onChange={handlePaginationChange}
                color="primary"
                size={
                  isSmallScreen
                    ? 'small'
                    : isMediumScreen
                      ? 'medium'
                      : isLargeScreen
                        ? 'large'
                        : 'medium'
                }
                sx={{ '& .MuiPaginationItem-root': { borderRadius: '10px' } }}
                renderItem={(item) => (
                  <PaginationItem
                    {...item}
                    sx={{
                      borderRadius: '10px',
                      color: 'primary.main',
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
    </>
  );
};

export default CareerCards;
