import React from 'react';
import { Card } from 'react-bootstrap/';
import CodingTech from '../assets/images/coding_tech_800w.jpg';
export default function () {
  return (
    <div>
      <Card className='bg-dark text-white cardStyles '>
        <Card.Title className='ml-4'> Technologies Used</Card.Title>
        <img src={CodingTech} alt='Coding Technologies' />
      </Card>
    </div>
  );
}
