import React from 'react';
import ReactMarkdown from 'react-markdown';
import { CodeRender, LinkRender } from '../../utils/md-renderers';

const RenderDoc = ({ md }) => (
  <div className='markdown-body'>
    {
      Array.isArray(md) ?
        md.map((content, index) => (
          <ReactMarkdown
            key={index}
            source={content}
            renderers={{
              code: CodeRender,
              link: LinkRender
            }}
          />
        ))
        :
        <ReactMarkdown
          source={md}
          escapeHtml={false}
          renderers={{
            code: CodeRender,
            link: LinkRender
          }}
        />
    }
  </div>
);

export default RenderDoc;
