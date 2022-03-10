import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { Layout, Typography, Row, Col, Avatar, Card } from "antd";
import { baseUrl } from "../../Shared/baseUrl";
import { Breadcrumb } from "antd";

const { Text, Title } = Typography;
const { Content } = Layout;

function RenderBeerCard({
  beer,
  beerId,
  imgUrl,
  name,
  description,
  breweryImgUrl,
  breweryName,
  type,
}) {
  return (
    <Card hoverable className="news-card">
      <Link
        to={{
          pathname: `/beer/${beerId}`,
          state: {
            beer: beer,
          },
        }}
      >
        <div className="news-image-container">
          <Title className="news-title" level={4}>
            {name}
          </Title>
          <img width={200} src={imgUrl} alt={"beerId: " + beerId} />
        </div>
        <p>{description}</p>
        <div className="provider-container">
          <div>
            <Avatar src={breweryImgUrl} alt={"brewerName: " + breweryName} />
            <Text className="provider-name">{breweryName}</Text>
          </div>
          <Text>{type}</Text>
        </div>
      </Link>
    </Card>
  );
}

class Brewer extends Component {
  state = {
    brewery: this.props.location.state,
    beers: [],
  };
  componentDidMount() {
    const id = this.state.brewery.brewery.breweryId;
    fetch(baseUrl + `/breweries/${id}` + "/beers")
      .then((res) => res.json())
      .then((res) => this.setState({ beers: res }));
  }
  render() {
    const { brewery } = this.state.brewery;
    const beerMap = this.state.beers.map((beer) => {
      return (
        <Col xs={24} sm={12} lg={8} className="crypto-card" key={beer.id}>
          <RenderBeerCard
            beer={beer}
            breweryName={brewery.name}
            beerId={beer.id}
            imgUrl={beer.imgUrl}
            name={beer.name}
            description={beer.info}
            breweryImgUrl={brewery.breweryLogoUrl}
            type={beer.type}
          />
        </Col>
      );
    });

    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Brewery Details</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          Brewery Id is: {this.state.brewery.brewery.breweryId}
          <br />
          Brewery name is: {this.state.brewery.brewery.name}
          <br />
          Brewery city is: {this.state.brewery.brewery.city}
          <br />
          Brewery address is: {this.state.brewery.brewery.address}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Selection of Beers</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          {beerMap}
        </div>
      </>
    );
  }
}

export default Brewer;
