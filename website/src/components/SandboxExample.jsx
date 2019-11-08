/**
 *  similar from react-router:
 *  https://github.com/ReactTraining/react-router/blob/master/website/modules/components/SandboxExample.js
 */

import React from "react";
import PropTypes from "prop-types";
import SandboxEmbed from './SandboxEmbed';
import CircularProgress from '@material-ui/core/CircularProgress';

const defaultDependencies = {
  "react": "^16.9.0",
  "react-dom": "^16.9.0",
  "react-router-dom": "^5.0.1",
  "react-transition-group": "^4.3.0",
  "react-tiger-transition": "^4.0.0",
};

export default function SandboxExample({
  label,
  path,
  dependencies,
  code,
  extraEmbedOptions,
  pkgJSON,
}) {
  return (
    <SandboxEmbed
      sandboxOptions={{
        name: `React Tiger Transition - ${label}`,
        examplePath: path,
        gitInfo: {
          account: "PedroBern",
          repository: "react-tiger-transition",
          host: "github"
        },
        pkgJSON: {
          dependencies: {
            ...defaultDependencies,
            ...dependencies
          },
        },
        dependencies: {
          ...defaultDependencies,
          ...dependencies
        },
        example: code,
      }}
      embedOptions={{
        codemirror: true,
        fontsize: 14,
        runonclick: true,
        ...extraEmbedOptions
      }}
      height="calc(100% - 8px)"
      width="calc(100% - 8px)"
    >
      <div
        style={{
          width: "calc(100% - 8px)",
          height: "calc(100% - 8px)",
          backgroundColor: "#FFF",
        }}
      />
    </SandboxEmbed>
  );
}

SandboxExample.defaultProps = {
  code: '',
  extraEmbedOptions: {},
};

SandboxExample.propTypes = {
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  dependencies: PropTypes.object,
  code: PropTypes.string,
  extraEmbedOptions: PropTypes.object
};
