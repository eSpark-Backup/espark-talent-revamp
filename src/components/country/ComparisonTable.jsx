import React from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

const data = [
  { label: 'Hiring Time', inHouse: '6–12 Weeks', offshore: '3–6 Days' },
  { label: 'Cost per Hire', inHouse: '$$$$$', offshore: '$$' },
  { label: 'Admin/Legal Overhead', inHouse: 'High', offshore: 'Zero' },
  { label: 'Flexibility', inHouse: 'Low', offshore: 'High' },
];

const ComparisonTable = () => {
  return (
    <Box
      sx={{
        borderRadius: '20px',
        p: 4,
        background:
          'linear-gradient(170deg, rgba(0, 28, 99, 1) 25%, rgba(4, 16, 44, 1) 100%)',
        color: '#fff',
        width: '100%',
        maxWidth: '1400px',
        mx: 'auto',
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          fontSize: { xs: '18px', sm: '20px', md: '30px', lg: '40px' },
          fontWeight: 500,
        }}
      >
        Compare: In-House Hiring (KSA) VS Offshore with eSprak Talent
      </Typography>
      <Typography sx={{ color: '#d0d6f9', mb: 3 }}>
        A visual Comparison table showing
      </Typography>

      <TableContainer
        component={Paper}
        sx={{ background: 'transparent', boxShadow: 'none' }}
      >
        <Table sx={{}} aria-label="comparison table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  color: '#fff',
                  borderBottom: '1px solid rgba(255,255,255,0.2)',
                }}
              >
                Criteria
              </TableCell>
              <TableCell
                sx={{
                  color: '#fff',
                  borderBottom: '1px solid rgba(255,255,255,0.2)',
                }}
              >
                In-House (KSA)
              </TableCell>
              <TableCell
                sx={{
                  color: '#fff',
                  borderBottom: '1px solid rgba(255,255,255,0.2)',
                }}
              >
                Offshore with Us
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.label}>
                <TableCell
                  sx={{
                    color: '#fff',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  {row.label}
                </TableCell>
                <TableCell
                  sx={{
                    color: '#fff',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  {row.inHouse}
                </TableCell>
                <TableCell
                  sx={{
                    color: '#fff',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  {row.offshore}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ComparisonTable;
