// https://github.com/codesandbox/codesandbox-client/blob/master/packages/react-embed/src/SandboxEmbed/SandboxEmbed.tsx
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CodeSandboxer from 'react-codesandboxer';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  spinner: {
    position: 'absolute',
    zIndex: -1,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}));

const Sandbox = ({
  embedOptions,
  sandboxOptions,
  width,
  height,
  renderError,
  children
}) => {

  const [payload, setPayload] = useState({
    sandboxId: null,
    oldSandboxId: null,
    error: null,
  });

  const generateEmbedURL = sandboxId => {
    let url = `https://codesandbox.io/embed/${sandboxId}`;

    function getValue(option, value) {
      if (typeof value === 'boolean') {
        return value ? 1 : 0;
      }

      if (option === 'highlights') {
        return value.join(',');
      }

      return value;
    }

    embedOptions.module = embedOptions.module || '/example.jsx' || '/example.js';
    const options = Object.keys(embedOptions)
      .map(option => `${option}=${getValue(option, embedOptions[option])}`)
      .join('&');

    if (options) {
      url += `?${options}`;
    }

    return url;
  };

  const afterDeploy = (sandboxUrl, sandboxId) => {
    setPayload({ sandboxId, oldSandBoxId: null, error: null });

    if (sandboxOptions && sandboxOptions.afterDeploy) {
      sandboxOptions.afterDeploy(sandboxUrl, sandboxId);
    }
  };

  const onLoadComplete = ({
    parameters,
    files,
    error
  }) => {
    if (error) {
      setPayload({ sandboxId: null, error: error });
    }

    if (sandboxOptions && sandboxOptions.onLoadComplete) {
      sandboxOptions.onLoadComplete({
        parameters,
        files,
        error
      });
    }
  };

  useEffect(() => {
    setPayload({
      sandboxId: null,
      oldSandboxId: payload.sandboxId,
      error: null,
    });
  }, [sandboxOptions])

  const style = {
    width: width || '100%',
    height: height || 500,
    outline: 0,
    border: 0,
    borderRadius: 4,
  }

  if (payload.error) {
    return renderError ? (
      renderError(payload.error)
    ) : (
      <div style={style}>
        Something went wrong while fetching the sandbox:{' '}
        {payload.error.message}
      </div>
    );
  }

  const usedSandboxId = payload.sandboxId || payload.oldSandboxId;

  const classes = useStyles();

  return (
    <React.Fragment>
      <div style={style}>
        {/* fake spinner */}
        <div className={classes.spinner}>
          <CircularProgress />
        </div>
        {usedSandboxId && (
          <iframe
            name="codesandbox"
            style={style}
            src={generateEmbedURL(usedSandboxId)}
          />
        )}
        {!payload.sandboxId && (
          <CodeSandboxer
            {...sandboxOptions}
            autoDeploy
            skipRedirect
            afterDeploy={afterDeploy}
            onLoadComplete={onLoadComplete}
          >
            {() =>
              payload.oldSandboxId
                ? null
                : children || 'Loading Sandbox...'
            }
          </CodeSandboxer>
        )}
      </div>
    </React.Fragment>
  );
}

export default Sandbox;
