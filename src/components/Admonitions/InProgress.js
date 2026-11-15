import React from 'react';
import Translate from '@docusaurus/Translate';

export default function InProgress({ children }) {
  return (
    <div className="admonition admonition-inProgress">
      <div className="admonition-heading">
        <Translate id="theme.Admonition.inProgress">This page is a work in progress</Translate>
      </div>
      <div className="admonition-content">{children}</div>
    </div>
  );
}
