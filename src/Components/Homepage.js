import React from 'react';
import {
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar
} from 'semantic-ui-react';
import './Homepage.css';

const locations = [
  {
    name: 'FM 2920 Location',
    address: '4035 FM 2920 Rd, Spring, TX 77388',
    mapsUrl: 'https://maps.google.com/?q=4035+FM+2920+Rd+Spring+TX+77388'
  },
  {
    name: 'Louetta Location',
    address: '5025 FM Louetta Rd, Spring, TX 77379',
    mapsUrl: 'https://maps.google.com/?q=5025+FM+Louetta+Rd+Spring+TX+77379'
  }
];

const featuredFlavors = [
  'Tiger’s Blood',
  'Blue Raspberry',
  'Wedding Cake',
  'Pina Colada',
  'Mango',
  'Strawberry Lemonade'
];

const eventTypes = [
  'School functions',
  'Birthday parties',
  'Corporate events',
  'Wedding receptions',
  'Fundraisers',
  'Community festivals'
];

const HomepageHeading = ({ mobile }) => (
  <Container text className="hero-content">
    <Image
      src="https://res.cloudinary.com/travdevcloudserver/image/upload/v1531247438/modernBeeTrans.png"
      size={mobile ? 'small' : 'medium'}
      alt="Buzzles bee logo"
      centered
    />
    <Header as="h1" className="hero-title">
      Buzzles Shaved Ice
    </Header>
    <Header as="h2" className="hero-subtitle">
      The finest ice in town — served all year round.
    </Header>
    <Button.Group size={mobile ? 'medium' : 'large'}>
      <Button
        as="a"
        href="https://maps.google.com/?q=4035+FM+2920+Rd+Spring+TX+77388"
        target="_blank"
        rel="noopener noreferrer"
        primary>
        Find a Location
      </Button>
      <Button.Or text="or" />
      <Button as="a" href="tel:+18322764603" color="yellow">
        Call 832-276-4603
      </Button>
    </Button.Group>
  </Container>
);

const DesktopNavigation = () => (
  <Menu borderless secondary className="top-nav" size="large">
    <Container>
      <Menu.Item header>Buzzles</Menu.Item>
      <Menu.Item as="a" href="#locations">
        Locations
      </Menu.Item>
      <Menu.Item as="a" href="#flavors">
        Flavors
      </Menu.Item>
      <Menu.Item as="a" href="#events">
        Mobile Events
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item as="a" href="mailto:buzzlesshavedice@gmail.com">
          <Icon name="mail" /> Email Us
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
);

class MobileNavigation extends React.Component {
  state = { sidebarOpened: false };

  handleToggle = () => this.setState(({ sidebarOpened }) => ({ sidebarOpened: !sidebarOpened }));

  handleClose = () => this.setState({ sidebarOpened: false });

  render() {
    const { sidebarOpened } = this.state;

    return (
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          onHide={this.handleClose}
          vertical
          visible={sidebarOpened}
          width="thin">
          <Menu.Item as="a" href="#locations" onClick={this.handleClose}>
            Locations
          </Menu.Item>
          <Menu.Item as="a" href="#flavors" onClick={this.handleClose}>
            Flavors
          </Menu.Item>
          <Menu.Item as="a" href="#events" onClick={this.handleClose}>
            Mobile Events
          </Menu.Item>
          <Menu.Item as="a" href="mailto:buzzlesshavedice@gmail.com" onClick={this.handleClose}>
            Contact
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment inverted textAlign="center" vertical className="hero-segment">
            <Container>
              <Menu inverted secondary borderless>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item position="right" header>
                  Buzzles
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>
          <MainContent />
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

const MainContent = () => (
  <React.Fragment>
    <Segment vertical className="section" id="locations">
      <Container>
        <Header as="h2" textAlign="center">
          Two Spring / Klein Locations
        </Header>
        <Card.Group stackable itemsPerRow={2}>
          {locations.map(location => (
            <Card fluid key={location.name}>
              <Card.Content>
                <Card.Header>{location.name}</Card.Header>
                <Card.Meta>Open year-round</Card.Meta>
                <Card.Description>
                  <Icon name="map marker alternate" />
                  {location.address}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button as="a" href={location.mapsUrl} target="_blank" rel="noopener noreferrer" basic color="blue">
                  Get Directions
                </Button>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </Container>
    </Segment>

    <Segment vertical className="section alt" id="flavors">
      <Container>
        <Grid stackable columns={2} verticalAlign="middle">
          <Grid.Column>
            <Header as="h2">Signature Flavors</Header>
            <p>
              New Orleans-inspired syrups and fluffy Hawaiian-style shaved ice come together for a smoother, bolder
              treat in every cup.
            </p>
            <List bulleted>
              {featuredFlavors.map(flavor => (
                <List.Item key={flavor}>{flavor}</List.Item>
              ))}
            </List>
          </Grid.Column>
          <Grid.Column>
            <Image
              rounded
              fluid
              src="https://images.unsplash.com/photo-1527761939622-9119094630cf?auto=format&fit=crop&w=1200&q=80"
              alt="Colorful shaved ice cups"
            />
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>

    <Segment vertical className="section" id="events">
      <Container>
        <Header as="h2" textAlign="center">
          Book Buzzles Mobile Events
        </Header>
        <p className="section-lead">
          Bring Buzzles to your next celebration. Our mobile unit is perfect for crowds, easy to set up, and always a
          hit.
        </p>
        <Grid columns={3} stackable>
          {eventTypes.map(event => (
            <Grid.Column key={event}>
              <Segment textAlign="center" className="event-chip">
                <Icon name="star" color="yellow" /> {event}
              </Segment>
            </Grid.Column>
          ))}
        </Grid>
        <Divider hidden />
        <Button as="a" href="mailto:BuzzlesEvents@gmail.com" size="large" primary>
          Request Event Pricing
        </Button>
      </Container>
    </Segment>

    <Segment inverted vertical className="footer">
      <Container>
        <Grid stackable columns={3}>
          <Grid.Column>
            <Header inverted as="h4">
              Contact
            </Header>
            <List link inverted>
              <List.Item as="a" href="tel:+18322764603">
                832-276-4603
              </List.Item>
              <List.Item as="a" href="mailto:buzzlesshavedice@gmail.com">
                buzzlesshavedice@gmail.com
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <Header inverted as="h4">
              Links
            </Header>
            <List link inverted>
              <List.Item as="a" href="https://www.facebook.com/buzzlesshavedice" target="_blank" rel="noopener noreferrer">
                Facebook
              </List.Item>
              <List.Item as="a" href="https://www.yelp.com/biz/buzzles-shaved-ice-spring" target="_blank" rel="noopener noreferrer">
                Yelp
              </List.Item>
              <List.Item as="a" href="https://squareup.com/gift/ML5EH2V78EPCW/order" target="_blank" rel="noopener noreferrer">
                Gift Cards
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <Header inverted as="h4">
              Buzzles Promise
            </Header>
            <p>
              Friendly service, great texture, and bold flavors every visit. Thanks for supporting local shaved ice in
              Spring, Texas.
            </p>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  </React.Fragment>
);

const HomepageLayout = () => (
  <div>
    <Responsive minWidth={Responsive.onlyTablet.minWidth}>
      <Segment inverted textAlign="center" vertical className="hero-segment">
        <DesktopNavigation />
        <HomepageHeading />
      </Segment>
      <MainContent />
    </Responsive>

    <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
      <MobileNavigation />
    </Responsive>
  </div>
);

export default HomepageLayout;
