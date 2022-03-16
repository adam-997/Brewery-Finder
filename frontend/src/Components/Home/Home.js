import React, { Component } from "react";
import { Breadcrumb } from "antd";
import { Link, withRouter } from "react-router-dom";
import { RenderBreweryCard } from "../Breweries/Breweries";
import { Layout, Typography, Row, Col, Avatar, Card } from "antd";
import { baseUrl } from "../../Shared/baseUrl";
import avatar from "../../image/avatar.png";

const { Text, Title } = Typography;
const { Content } = Layout;

function RenderNewBeerCard({ beer, beerId, imgUrl, name, description, type }) {
  return (
    <Card hoverable className="brewery-card">
      <Link
        to={{
          pathname: `/beers/${beerId}`,
          state: {
            beer: beer,
          },
        }}
      >
        <div className="brewery-image-container">
          <Title className="brewery-title" level={4}>
            {name}
          </Title>
          <img width={200} src={imgUrl} alt={"beerId: " + beerId} />
        </div>
        <p>{description}</p>
        <div className="footer-container">
          <div>
            <Avatar src={avatar} alt={"brewerName: " + beerId} />
            <Text className="footer-name">NEW</Text>
          </div>
          <Text>{type}</Text>
        </div>
      </Link>
    </Card>
  );
}

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      breweries: [],
      beers: [],
    };
  }

  componentDidMount() {
    fetch(baseUrl + "/breweries")
      .then((res) => res.json())
      .then((res) => this.setState({ breweries: res }));
    fetch(baseUrl + "/beers")
      .then((res) => res.json())
      .then((res) => this.setState({ beers: res }));
  }

  render() {
    const newBeers = this.state.beers.slice(-3);
    const newBreweries = this.state.breweries.slice(-3);
    const breweryMap = newBreweries.map((brewery) => {
      return (
        <Col
          xs={24}
          sm={12}
          lg={8}
          className="brewery-card"
          key={brewery.breweryId}
        >
          <RenderBreweryCard
            brewery={brewery}
            key={brewery.breweryId}
            breweryId={brewery.breweryId}
            breweryLogoUrl={brewery.breweryLogoUrl}
            name={brewery.name}
            address={brewery.address}
            description={brewery.description}
            website={brewery.websiteUrl}
          />
        </Col>
      );
    });
    const beerMap = newBeers.map((beer) => {
      return (
        <Col xs={24} sm={12} lg={8} className="brewery-card" key={beer.id}>
          <RenderNewBeerCard
            beer={beer}
            beerId={beer.beerId}
            imgUrl={beer.imgUrl}
            name={beer.name}
            description={beer.info}
            type={beer.type}
          />
        </Col>
      );
    });

    return (
      <>
        <div>
          <Layout>
            <Content
              className="site-layout"
              style={{ padding: "0 50px", marginTop: 30 }}
            >
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
              </Breadcrumb>
            </Content>
          </Layout>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {" "}
        </div>
        <Title
          level={2}
          className="heading"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          New Breweries
        </Title>
        <div className="brewery-card">
          <Row gutter={[32, 32]} className="brewery-card-container">
            {" "}
            {breweryMap}{" "}
          </Row>
        </div>
        <Title
          level={2}
          className="heading"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          New Beers
        </Title>
        <div className="brewery-card">
          <Row gutter={[32, 32]} className="brewery-card-container">
            {" "}
            {beerMap}{" "}
          </Row>
        </div>
      </>
    );
  }
}

export default withRouter(Home);
