import React from 'react';
import Particles from 'react-particles-js';
import Logo from '../svg/ReactLogo.svg';
import NodeJs from '../svg/NodeJS.svg';

export default function BackgroundParts() {
  const particleOptions = {
    particles: {
      number: {
        value: 8,
        density: {
          ' enable': true,
          value_area: 800,
        },
      },
      line_linked: {
        enable: false,
      },
      move: {
        speed: 1,
        out_mode: 'out',
      },
      shape: {
        type: ['image'],
        image: [
          {
            src: Logo,
            height: 20,
            width: 23,
          },
          {
            src: NodeJs,
            height: 20,
            width: 20,
          },
          {
            src: '/code.b3b4c4f4.png',
            height: 20,
            width: 20,
          },
        ],
      },
      color: {
        value: '#CCC',
      },
      size: {
        value: 30,
        random: false,
        anim: {
          enable: true,
          speed: 4,
          size_min: 10,
          sync: false,
        },
      },
    },
    retina_detect: false,
  };
  return (
    <div>
      <Particles Particles className='particles' params={particleOptions} />
    </div>
  );
}
