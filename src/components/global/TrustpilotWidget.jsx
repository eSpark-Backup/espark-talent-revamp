'use client';
import { useEffect } from 'react';

const TrustpilotWidget = () => {
  useEffect(() => {
    // Dynamically load the Trustpilot script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src =
      '//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="trustpilot-widget-container">
        <div
          className="trustpilot-widget"
          data-locale="en-US"
          data-template-id="56278e9abfbbba0bdcd568bc"
          data-businessunit-id="650c3dc3c608071dca4cdbae"
          data-style-height="52px"
          data-style-width="100%"
        >
          <a
            href="https://www.trustpilot.com/review/esparktalent.com"
            target="_blank"
            rel="noopener"
          >
            Trustpilot
          </a>
        </div>
      </div>
      <style jsx>{`
        .trustpilot-widget-container {
          padding-top: 10px;
          width: 250px;
        }
      `}</style>
    </>
  );
};

export default TrustpilotWidget;
