// transfrom regular link to react-tiger-transition link if
// href is '/docs/:doc' format

import React from "react";
import { withRouter } from 'react-router-dom';
import { Link, flip } from 'react-tiger-transition';

import { docsPathsAbs } from '../utils/Docs';

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
        transition={() => flip({
          duration: 300,
          direction:
            docsPathsAbs.indexOf(location.pathname) < index ?
            'left' :
            'right'
        })}
        to={href}
      >
        {children}
      </Link>
    :
      <a href={href}>{children}</a>
  )
}

export default withRouter(LinkRender);
