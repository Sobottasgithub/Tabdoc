import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

const projects = [
  {
    name: 'Tablo',
    repo: 'https://github.com/Sobottasgithub/Tablo',
  },
  {
    name: 'TDFS',
    summary: 'Tablo Distributed File System',
    repo: 'https://github.com/Sobottasgithub/TDFS',
  },
  {
    name: 'TTP2',
    summary: 'Tablo Transfer Protocol 2',
    repo: 'https://github.com/Sobottasgithub/TTP2',
  },
  {
    name: 'TQL',
    summary: 'Tablo Query Language',
    repo: 'https://github.com/Sobottasgithub/TQL',
  },
  {
    name: 'TUD',
    summary: 'Tablo UDP Discovery',
    repo: 'https://github.com/Sobottasgithub/TUD',
  },
  {
    name: 'Tablog',
    summary: 'The logging library shared across Tablo',
    repo: 'https://github.com/Sobottasgithub/Tablog',
  },
];

function Hero() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={styles.hero}>
      <div className="container">
        <img
          className={styles.heroLogo}
          src={useBaseUrl('img/logo.svg')}
          alt=""
          width={96}
          height={96}
        />
        <h1 className={styles.heroTitle}>Tablo</h1>
        <p className={styles.heroTagline}>{siteConfig.tagline}</p>
        <div className={styles.heroButtons}>
          <Link className="button button--primary button--lg" to="/docs">
            Read the docs
          </Link>
          <Link
            className="button button--secondary button--outline button--lg"
            href="https://github.com/Sobottasgithub"
          >
            Browse the source
          </Link>
        </div>
      </div>
    </header>
  );
}

function Projects() {
  return (
    <section className={styles.projects}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Projects</h2>
        <div className={clsx('row', styles.projectGrid)}>
          {projects.map((project) => (
            <div key={project.name} className="col col--4">
              <Link className={styles.projectCard} href={project.repo}>
                <h3 className={styles.projectName}>{project.name}</h3>
                <p className={styles.projectSummary}>{project.summary}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <Hero />
      <main>
        <Projects />
      </main>
    </Layout>
  );
}
