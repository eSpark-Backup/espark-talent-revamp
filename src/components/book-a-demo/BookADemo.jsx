'use client';

import Grid from '@mui/material/Grid';

import BookADemoContent from './BookADemoContent';
import BookADemoForm from './BookADemoForm';

import { Book_A_Demo_Data, styles } from '@/constants/book-a-demo';

export default function BookADemo() {
  const { content, form } = Book_A_Demo_Data;

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid item xs={12} sm={12} md={12} lg={6.5}>
        <BookADemoContent content={content} styles={styles} />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={5.5}>
        <BookADemoForm form={form} />
      </Grid>
    </Grid>
  );
}
