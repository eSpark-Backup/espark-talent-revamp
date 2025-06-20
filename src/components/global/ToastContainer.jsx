'use client';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const ToastProvider = ({ children }) => {
  return (
    <>
      {children}
      <ToastContainer
        className={'toast-container'}
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default ToastProvider;
