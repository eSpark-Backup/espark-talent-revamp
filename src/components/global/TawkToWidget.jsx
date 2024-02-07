'use client';
import { useEffect } from 'react';

const TawkToWidget = ({ propertyId, taskId }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://embed.tawk.to/${propertyId}/${taskId}`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [propertyId, taskId]);

  return null;
};

export default TawkToWidget;
