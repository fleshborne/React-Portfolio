/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import BlueSkies from '../assets/images/project-pics/Logo-blue.png';

export default function Projects() {
  return (
    <>
      <CardGroup>
        <Card>
          <Card.Img variant='top' src={BlueSkies} />
          <Card.Body>
            <Card.Title>Blue Skies</Card.Title>
            <Card.Text>
              Looking for something to do after Covid? Plan your next outing
              with Blue Skies!
            </Card.Text>
            <a href='https://fleshborne.github.io/Blue-Skies/' target='_blank'>
              Website
            </a>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>
              <a
                href='https://github.com/fleshborne/Blue-Skies'
                target='_blank'
              >
                Check the Repo!
              </a>
            </small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant='top'
            src='https://gyazo.com/41a1a31edebe91e6e1deb1b4cf941c45.png/'
          />
          <Card.Body>
            <Card.Title>Portsmouth PickUp Leagues!</Card.Title>
            <Card.Text>
              New to the Portsmouth area? Or enjoy sports that your friends
              don't? Come checkout whats going on in the area, or make your own
              event!{' '}
            </Card.Text>
            <a href='https://thawing-dusk-46621.herokuapp.com/' target='_blank'>
              Website
            </a>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>
              <a
                href='https://github.com/fleshborne/NH-Pickup-Leagues'
                target='_blank'
              >
                Check the Repo!
              </a>
            </small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant='top'
            src='https://gyazo.com/4439ed31b09e56e5c8212a5eafd54d3a.gif'
          />
          <Card.Body>
            <Card.Title>PWA Budget Tracker</Card.Title>
            <Card.Text>
              Practicing with PWA technology and IndexDB for offline caching of
              deposits/withdraws.
            </Card.Text>
            <a href='https://lit-plains-19908.herokuapp.com/' target='_blank'>
              Website
            </a>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>
              <a
                href='https://github.com/fleshborne/PWA-Budget-Tracker'
                target='_blank'
              >
                Check the Repo!
              </a>
            </small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </>
  );
}
