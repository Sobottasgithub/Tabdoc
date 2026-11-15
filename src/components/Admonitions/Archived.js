import React from 'react';
import Translate from '@docusaurus/Translate';
import '@site/src/css/archived.css';

export default function Archived({ children, title }) {
  return (
    <div className="admonition admonition-archived">
      <div className="admonition-heading">
        <Translate id="theme.Admonition.archived">
          {title || 'This page is archived and is no longer maintained'}
        </Translate>
      </div>
      {children && <div className="admonition-content">{children}</div>}
    </div>
  );
}
