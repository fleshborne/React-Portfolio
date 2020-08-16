import React from 'react';
import { Card } from 'react-bootstrap/';
import ProfilePic from '../assets/images/its-me.JPG';

export default function AboutMe() {
  return (
    <div>
      <img src={ProfilePic} alt='headshot' className='profilePic' />
      <Card className='bg-dark text-white cardStyles justify'>
        {/* <Card.Title className='ml-4'>Hello World, Blake here!</Card.Title> */}
        {/* </Card>
      <Card className='bg-dark text-white cardStyles'> */}
        <Card.Title className='ml-4' href='#About'>
          About Me
        </Card.Title>
        <Card.Text className='ml-2'>
          My name is Blake Thompson, I'm a Certified Full-Stack Developer from
          the University of New Hampshire. Learning new technologies and
          applying functional codes is my passion. In my free time I enjoy
          reading, skating, and running with my dog, Binks. Scroll down to check
          out my journey through my world of Web Development!
        </Card.Text>
      </Card>
    </div>
  );
}
