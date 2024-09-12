import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import { GiDrumKit, GiDrum } from 'react-icons/gi'
import Logo from '../layout/partials/Logo';
// import Image from '../elements/Image';
// import ButtonGroup from '../elements/ButtonGroup';
// import Button from '../elements/Button';

// import Modal from '../elements/Modal';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  // const [videoModalActive, setVideomodalactive] = useState(false);

  // const openModal = (e) => {
  //   e.preventDefault();
  //   setVideomodalactive(true);
  // }

  // const closeModal = (e) => {
  //   e.preventDefault();
  //   setVideomodalactive(false);
  // }
  // const outerClasses = classNames(
  //   'features-tiles section',
  //   topOuterDivider && 'has-top-divider',
  //   bottomOuterDivider && 'has-bottom-divider',
  //   hasBgColor && 'has-bg-color',
  //   invertColor && 'invert-color',
  //   className
  // );

  // const innerClasses = classNames(
  //   'features-tiles-inner section-inner pt-0',
  //   topDivider && 'has-top-divider',
  //   bottomDivider && 'has-bottom-divider'
  // );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Instructor with Expansive Knowledge and Experience',
    paragraph: 'Brandon is a highly skilled drummer that has studied a wide variety of styles which he has mastered over the past 20 years of playing the drums. Starting teaching at 14 years old Brandon learned the essentials of what it means to be a good teacher alongside his father for over 4 years. Brandon cares about each and every student that comes through his doors and ensures that they will get the best education. '
  };
  const sectionHeader2 = {

    paragraph: 'Unlike other companies, he puts playing the drums first and getting people good at the craft rather than making money.  Brandon teaches all ages and all skill levels in a family friendly environment out of his studio. He Teaches using a vast curriculum that was developed in house that expands over 2,000 pages of material and with this material students can study any style of music they would like to play from Rock, Jazz, Latin, Elementary school band, Drumline, Prog, Metal, and many many more.'
  };

  return (
    <section
      {...props}
    >
      <div className="container">
        {/* <div> */}
        <div className={tilesClasses}>
          <div className="video-secton">
            <div className='display-none '>
              <Logo className='logo' />
            </div>
            {/* <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
              </div> */}
            <div >
              <SectionHeader data={sectionHeader} className="center-content text-color-primary pl-107 pr-107" />
              <iframe className="pl-16 pr-16" width="560" height="315" src="https://www.youtube.com/embed/PEcqvmCHYRw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <SectionHeader data={sectionHeader2} className="center-content text-color-primary pl-107 pr-107" />
            </div>
            <div className='display-none '>
              <Logo className='logo' />
            </div>
          </div>
        </div>

        <div className={tilesClasses}>

          <div className="tiles-item reveal-from-bottom">
            <div className="tiles-item-inner">
              <div className="features-tiles-item-header">
                <div className="features-tiles-item-image mb-16">
                  <GiDrumKit
                    style={{
                      width: '100px',
                      height: '100px',
                      color: '#fff'
                    }} />
                  {/* <Image
                      src={require('./../../assets/images/feature-tile-icon-01.svg')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} /> */}
                </div>
              </div>
              <div className="features-tiles-item-content">
                <h4 className="mt-0 mb-8 text-color-primary">
                  History
                </h4>
                <p className="m-0 text-sm">
                  Brett Fredrickson (Brandons Dad and teacher) was a degreed Musician from Musicians Institute, Brett played with groups such as Megadeth and Scotty Mishoe.
                </p>
              </div>
            </div>
          </div>

          <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
            <div className="tiles-item-inner">
              <div className="features-tiles-item-header">
                <div className="features-tiles-item-image mb-16">
                  <GiDrum
                    style={{
                      width: '100px',
                      height: '100px',
                      color: '#fff'
                    }}
                  />
                  {/* <Image
                      src={require('./../../assets/images/feature-tile-icon-01.svg')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} /> */}
                </div>
              </div>
              <div className="features-tiles-item-content">
                <h4 className="mt-0 mb-8 text-color-primary">
                  Integrity
                </h4>
                <p className="m-0 text-sm">
                  Brandonis so confident you will love his teaching, he is offering 1 free lesson to new students.
                </p>
              </div>
            </div>
          </div>

          <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
            <div className="tiles-item-inner">
              <div className="features-tiles-item-header">
                <div className="features-tiles-item-image mb-16">
                  <GiDrumKit
                    style={{
                      width: '100px',
                      height: '100px',
                      color: '#fff'
                    }} />
                </div>
              </div>
              <div className="features-tiles-item-content">
                <h4 className="mt-0 mb-8 text-color-primary">
                  Lessons
                </h4>
                <p className="m-0 text-sm">
                  Lessons can be either 1/2 Hour or an Hour long.  We charge $20 1/2 hour and $35 and hour.
                </p>
              </div>
            </div>
          </div>

          {/* <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <RiMusic2Line
                      style={{
                        width: '100px',
                        height: '100px',
                        color: '#fff'
                      }} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Integrity
                  </h4>
                  <p className="m-0 text-sm">
                    Brandonis so confident you will love his teaching he is offering 1 free lesson to new students.
                  </p>
                </div>
              </div>
            </div> */}

          {/* <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <BsMusicPlayer
                      style={{
                        width: '100px',
                        height: '100px',
                        color: '#fff'
                      }} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Robust Workflow
                  </h4>
                  <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                  </p>
                </div>
              </div>
            </div> */}

          {/* <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <RiMusic2Line
                      style={{
                        width: '100px',
                        height: '100px',
                        color: '#fff'
                      }} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Robust Workflow
                  </h4>
                  <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                  </p>
                </div>
              </div>
            </div> */}

        </div>
        {/* </div> */}
      </div>
    </section >
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;