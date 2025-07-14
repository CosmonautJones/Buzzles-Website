import React, { useState, useEffect } from 'react';
import { Container, Header, Icon, Segment, Image, Button, Card } from 'semantic-ui-react';

const carouselImages = [
  'https://images.unsplash.com/photo-1526040652367-ac003a0475fe?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1563833715161-bf7db13a06d3?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1505253716362-afaea86f8f2a?auto=format&fit=crop&w=800&q=60'
];

function SimpleCarousel() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIndex(i => (i + 1) % carouselImages.length), 3000);
    return () => clearInterval(timer);
  }, []);
  const prev = () => setIndex(i => (i - 1 + carouselImages.length) % carouselImages.length);
  const next = () => setIndex(i => (i + 1) % carouselImages.length);

  return (
    <Segment textAlign='center'>
      <Image src={carouselImages[index]} size='large' centered bordered rounded />
      <div style={{ marginTop: '0.5em' }}>
        <Button icon onClick={prev} aria-label='previous'>
          <Icon name='chevron left' />
        </Button>
        <Button icon onClick={next} aria-label='next'>
          <Icon name='chevron right' />
        </Button>
      </div>
    </Segment>
  );
}

export default function HomepageLayout() {
  const flavorCards = [
    {
      title: "Tiger's Blood",
      desc: 'Sweet strawberry with a hint of coconut.',
      image: 'https://images.unsplash.com/photo-1524626498519-65e7a642df14?auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Blue Raspberry',
      desc: 'Our classic bright blue favorite.',
      image: 'https://images.unsplash.com/photo-1561067307-7aa2e3cfd672?auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Lime',
      desc: 'A tangy treat perfect for hot days.',
      image: 'https://images.unsplash.com/photo-1526634332515-d56f07abae61?auto=format&fit=crop&w=600&q=60'
    }
  ];

  const [favorites, setFavorites] = useState(flavorCards.map(() => false));
  const toggleFavorite = i => {
    const copy = [...favorites];
    copy[i] = !copy[i];
    setFavorites(copy);
  };

  return (
    <Container textAlign='center' style={{ marginTop: '2em' }}>
      <Header as='h1' icon>
        <Icon name='snowflake outline' color='teal' />
        Buzzles Shaved Ice
        <Header.Subheader>Never had a day a snowcone couldn\'t fix.</Header.Subheader>
      </Header>
      <SimpleCarousel />
      <Header as='h2' style={{ marginTop: '1em' }}>Popular Flavors</Header>
      <Card.Group centered>
        {flavorCards.map((card, i) => (
          <Card key={i}>
            <Image src={card.image} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{card.title}</Card.Header>
              <Card.Description>{card.desc}</Card.Description>
            </Card.Content>
            <Card.Content extra textAlign='center'>
              <Button icon color={favorites[i] ? 'red' : undefined} onClick={() => toggleFavorite(i)} aria-label='favorite'>
                <Icon name='heart' />
              </Button>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
      <Button size='huge' color='yellow' style={{ marginTop: '2em' }}>
        <Icon name='cart plus' /> Order Now
      </Button>
    </Container>
  );
}
