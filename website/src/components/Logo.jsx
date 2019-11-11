import React from 'react';

const Logo = ({
  height,
  width,
  viewBox,
  ...other
}) => (
  <svg
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    {...other}
  >
   <g>
    <path id="t_1" d="m17.378035,13.081166l-0.30486,22.89445l82.92683,23.78049l0,113.41464l0,16.46341l20.73171,-19.51219l1.21951,-109.14635l68.90244,21.34146l-0.60975,-23.17073l-172.86588,-46.06518z" strokeWidth="null" stroke="#ff9800" fill="#ff9800"/>
    <path id="t_2" d="m108.231705,13.690926l-0.30486,22.89445l82.92683,23.78049l0,113.41464l0,16.46341l20.73171,-19.51219l1.21951,-109.14635l68.90244,21.34146l-0.60975,-23.17073l-172.86588,-46.06518z" strokeWidth="null" stroke="#ffc107" fill="#ffc107"/>
   </g>
  </svg>
);

Logo.defaultProps = {
  height: "200",
  width: "300",
  viewBox: "0 0 300 200"
};

export default Logo;
