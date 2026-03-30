import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Learn Cybersecurity by Doing',
    Svg: require('@site/static/img/cyber_doing.svg').default,
    description: (
      <>
        This website documents my journey as an Information Security student.
        I focus on hands-on learning — from networking basics to real-world security scenarios.
      </>
    ),
  },
  {
    title: 'Structured & Practical Knowledge',
    Svg: require('@site/static/img/cyber_knowledge.svg').default,
    description: (
      <>
        Notes are organized into clear topics like networking, system security, and cybersecurity fundamentals.
        Step by step, building a strong and practical foundation.
      </>
    ),
  },
  {
    title: 'Building a Security Mindset',
    Svg: require('@site/static/img/cyber_mindset.svg').default,
    description: (
      <>
        Beyond tools, this site emphasizes thinking like a security professional:
        analyzing systems, identifying vulnerabilities, and understanding attacks and defenses.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">

        {/* Intro Section */}
        <div className="text--center margin-bottom--xl">
          <Heading as="h2">Welcome to My Cybersecurity Journey</Heading>
          <p style={{maxWidth: '700px', margin: '0 auto'}}>
            Hi, I'm <strong>Mai Tien Thanh</strong>, an Information Security student passionate about 
            cybersecurity and systems. This site documents what I learn, explore, and build — 
            from fundamentals to hands-on practice
          </p>
        </div>

        {/* Features */}
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>

      </div>
    </section>
  );
}