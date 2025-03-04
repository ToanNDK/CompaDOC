import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_workspace_s6wf.svg').default,
    description: (
      <>
        Xây dựng trang DOC cho COMPACLASS
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_dev-productivity_5wps.svg').default,
    description: (
      <>
       Lưu trữ thông tin về các buổi meeting
      </>
    ),
  }, 
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_going-upwards_0y3z.svg').default,
    description: (
      <>
        Tái sử dụng
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
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
