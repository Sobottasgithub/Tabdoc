import React from 'react';
import Translate from '@docusaurus/Translate';
import '@site/src/css/custom.css';

export default function InProgress({children}) {
    return (
        <div className="admonition admonition-inProgress">
            <div className="admonition-heading">
                <Translate id="theme.Admonition.inProgress">
                    Diese Seite wird gerade bearbeitet
                </Translate>
            </div>
            <div className="admonition-content">{children}</div>
        </div>
    );
}
