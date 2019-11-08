// transfrom regular link to react-tiger-transition link if
// href is '/docs/:doc' format

import React from "react";
import { withRouter } from 'react-router-dom';
import { Link } from 'react-tiger-transition';

import { docsPathsAbs } from '../../pages/docs/assets';

const LinkRender = ({
  href,
  children,
  location,
  ...other
}) => {
  const index = docsPathsAbs.indexOf(href);
  return (
    index > -1 ?
      <Link
        transition={
          docsPathsAbs.indexOf(location.pathname) < index ?
          'flip-left' :
          'flip-right'
        }
        to={href}
      >
        {children}
      </Link>
    :
      <a href={href}>{children}</a>
  )
}

export default withRouter(LinkRender);
