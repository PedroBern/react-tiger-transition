/**
 *  from react-router:
 *  https://github.com/ReactTraining/react-router/blob/master/website/modules/components/SandboxExample.js
 */

import React from "react";
import PropTypes from "prop-types";
import { SandboxEmbed } from "@codesandbox/react-embed";

export default function SandboxExample({
  label,
  path,
  dependencies,
  code,
  extraEmbedOptions = {}
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
        dependencies: dependencies,
        example: code
      }}
      embedOptions={{
        codemirror: true,
        fontsize: 14,
        ...extraEmbedOptions
      }}
      height="calc(100% - 8px)"
      width="calc(100% - 8px)"
    >
      <div
        style={{
          width: "calc(100% - 8px)",
          height: "calc(100% - 8px)",
          backgroundColor: "#FFF"
        }}
      />
    </SandboxEmbed>
  );
}

SandboxExample.propTypes = {
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  dependencies: PropTypes.object.isRequired,
  code: PropTypes.string.isRequired,
  extraEmbedOptions: PropTypes.object
};
