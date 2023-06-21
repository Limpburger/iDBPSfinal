import React, { useRef, useEffect } from 'react';
import htmlToImage from 'html-to-image';
import { ReactComponent as Head1 } from '../img/head2.svg';

const Head = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (svgRef.current) {
      htmlToImage.toPng(svgRef.current).then((dataUrl) => {
        // Handle the generated data URL, e.g., save it as a texture in Phaser
      });
    }
  }, []);

  return (
    <svg ref={svgRef}>
      <Head1 />
    </svg>
  );
};

export default Head;
