import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Gmail from '../assets/images/contact-pics/Gmail.png';

export default function Contact() {
  return (
    <>
      <CardGroup>
        <Card>
          <Card.Img variant='top' src={Gmail} />
          <Card.Body>
            <Card.Title>Questions?</Card.Title>
            <Card.Text>
              Email me{' '}
              <a href='mailto:Blakeathompson94@gmail.com' target='_blank'>
                Here!
              </a>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>Always Available!</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant='top'
            src='https://gyazo.com/9e63d45d144f8877901ac2a3cdfc168d.png'
          />
          <Card.Body>
            <Card.Title>LinkedIn</Card.Title>
            <Card.Text>
              Connect or Check it{' '}
              <a
                href='https://www.linkedin.com/in/blake-thompson94/'
                target='_blank'
              >
                out!
              </a>{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant='top'
            src='https://gyazo.com/26ba3e8e01133dea25f76d1a604475fc.png'
          />
          <Card.Body>
            <Card.Title>GitHub</Card.Title>
            <Card.Text>
              Ever growing collection of projects, and new technologies being
              tested out! Drop me a follow{' '}
              <a href='https://github.com/fleshborne' target='_blank'>
                here.
              </a>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>Updates Frequently!</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </>
  );
}
