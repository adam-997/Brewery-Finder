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
          pathname: `/beers/${beerId}`,
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
    console.log(this.state.beers);
    const { brewery } = this.state.brewery;
    const beerMap = this.state.beers.map((beer) => {
      return (
        <Col xs={24} sm={12} lg={8} className="crypto-card" key={beer.id}>
          <RenderBeerCard
            beer={beer}
            breweryName={brewery.name}
            beerId={beer.beerId}
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
        <Layout>
          <Content
            className="site-layout"
            style={{ padding: "0 50px", marginTop: 30 }}
          >
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>
                <NavLink to="/home">Home</NavLink>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <NavLink to="/breweries">Breweries</NavLink>
              </Breadcrumb.Item>
              <Breadcrumb.Item>{brewery.name}</Breadcrumb.Item>
            </Breadcrumb>
          </Content>{" "}
        </Layout>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Title level={2}>Brewery Details </Title>
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
          <Title level={2}>Selection of Beers </Title>
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
