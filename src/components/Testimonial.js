import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import User1 from '../assets/images/user1.jpg';
import User2 from '../assets/images/user2.jpg';
import User3 from '../assets/images/user3.jpg';

const Testimonial = ({ color, testimonials = [] }) => (
  <section id="testimonial" className={color}>
    {testimonials && (
      <div className="inner">
        <header>
          <h2>Testimoniales</h2>
          <div className="inner">
            <Carousel
              showArrows={false}
              showStatus={false}
              autoPlay={true}
              infiniteLoop={true}
              showThumbs={false}
              interval={10000}
            >
              {testimonials.map(({ imagen, name, testimony }, index) => (
                <div key={index}>
                  <p>
                    {testimony},{' '}
                    <strong style={{ color: 'inherit' }}>{name}</strong>
                  </p>
                  <img
                    src={imagen}
                    alt="foto persona"
                    className="picture__testimonial"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </header>
      </div>
    )}
  </section>
);

export default Testimonial;
