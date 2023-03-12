import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import { ImQuotesLeft } from 'react-icons/im'

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
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

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Customer testimonials',

  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <ImQuotesLeft
                  style={{
                    width: "35px",
                    height: '35px',
                    color: "black"

                  }} />
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — I have an 8 year old daughter that has discovered her passion for music thanks to her amazing teacher Brandon.  She started her drum lessons when she was 7.  She felt comfortable since the first class.  Her Teacher is very patient.  I see her feeling more confident and capable of playing music.  Learning music also helped boost her self-esteem.  I highly recommend these lessons.
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Martha L</span>

                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <ImQuotesLeft
                  style={{
                    width: "35px",
                    height: '35px',
                    color: "black"

                  }} />
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — I have been going to lessons since I was in 8th grade (I am now 1 year out of high school).  I have learned so much with him and now I am able to make some of the top indoors and drum lines in Arizona.  I couldn't have done any of this without these lessons.
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Landon D</span>

                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <ImQuotesLeft
                  style={{
                    width: "35px",
                    height: '35px',
                    color: "black"

                  }} />
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — I've been bringing my son to Brandon for drum lessons for about six months now.  It's unbelievable how far his playing has progressed since Brandon started tutoring him.  My son is a quick learner, musically and Brandon has special tailored his program to help my son excel at a quick pace.  Brandon is an excellent drummer and my son always looks forward to coming and learning.
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Jonathan</span>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;