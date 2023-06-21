import React, { useEffect, useRef } from 'react';
import { SVG } from '@svgdotjs/svg.js';
import axios from 'axios';

import HeadSvg from './img/head1Man.svg';
import ChestSvg from './img/chest1-cropped.svg';
import LegsSvg from './img/legs1-cropped.svg';
import ShoesSvg from './img/shoes1-cropped.svg';

const Avatar = ({ headSvg, chestSvg, legsSvg, shoesSvg, bodyColor }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svgElement = SVG(svgRef.current);

    // Load the SVG content for each part
    Promise.all([
      axios.get(headSvg),
      axios.get(chestSvg),
      axios.get(legsSvg),
      axios.get(shoesSvg),
    ]).then((responses) => {
      const [headResponse, chestResponse, legsResponse, shoesResponse] = responses;

      const headContent = headResponse.data;
      const chestContent = chestResponse.data;
      const legsContent = legsResponse.data;
      const shoesContent = shoesResponse.data;

      // Create SVG elements for each part
      const headSvgElement = SVG(headContent).addTo(svgElement);
      const chestSvgElement = SVG(chestContent).addTo(svgElement);
      const legsSvgElement = SVG(legsContent).addTo(svgElement);
      const shoesSvgElement = SVG(shoesContent).addTo(svgElement);

      // Set positions for each part relative to the original bigger SVG
      headSvgElement.attr({ x: 0, y: 0 });
      chestSvgElement.attr({ x: 10, y: 60 });
      legsSvgElement.attr({ x: 10, y: 120 });
      shoesSvgElement.attr({ x: 10, y: 580 });

      // Apply customization
      // headSvgElement.fill('#FF0000'); // Example customization for the imported SVG

      // Adjust the size of the main SVG element
      //svgElement.size(200, 250);
    });
  }, [headSvg, chestSvg, legsSvg, shoesSvg, bodyColor]);

  return (
    <div className='svgAvatar-Container'>
      <svg ref={svgRef} />
    </div>
  );
};

export default Avatar;
