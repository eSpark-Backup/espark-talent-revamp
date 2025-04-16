'use client';

import Grid from '@mui/material/Grid';

import BookADemoContent from '@/components/book-a-demo/BookADemoContent';
import BookADemoForm from '@/components/book-a-demo/BookADemoForm';

import { BOOK_A_DEMO_DATA } from '@/constants/book-a-demo/book-a-demo';
import { gridStyles } from './BookADemoStyles';

export default function BookADemo() {
  const { content, form } = BOOK_A_DEMO_DATA;

  return (
    <Grid container component="main" sx={gridStyles}>
      <Grid item xs={12} sm={12} md={12} lg={6.5}>
        <BookADemoContent content={content} />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={5.5}>
        <BookADemoForm form={form} />
      </Grid>
    </Grid>
  );
}
