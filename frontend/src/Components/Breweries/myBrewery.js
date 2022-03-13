import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { withRouter, Link, NavLink } from "react-router-dom";
import { baseUrl } from "../../Shared/baseUrl";
import { Layout, Typography, Row, Col, Avatar, Card } from "antd";

const { Text, Title } = Typography;
const { Content } = Layout;

function RenderBreweryCard({
  brewery,
  breweryId,
  name,
  address,
  description,
  breweryLogoUrl,
  website,
}) {
  return (
    <Card hoverable className="news-card">
      <Link
        to={{
          pathname: `/breweries/${breweryId}`,
          state: {
            brewery: brewery,
          },
        }}
      >
        <div className="news-image-container">
          <Title className="news-title" level={4}>
            {name}
          </Title>
          <img
            width={200}
            src={breweryLogoUrl}
            alt={"brewerId: " + breweryId}
          />
        </div>
        <p>{description}</p>
      </Link>
      <a href={website} target="_blank" rel="noreferrer">
        <div className="provider-container">
          <div>
            <Avatar src={breweryLogoUrl} alt={"brewerId: " + breweryId} />
            <Text className="provider-name">{name}</Text>
          </div>
          <Text>{address}</Text>
        </div>
      </a>
    </Card>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
    user: state.user,
  };
};

class MyBrewery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breweries: [],
    };
  }

  componentDidMount() {
    fetch(baseUrl + `/users/${this.props.user.userId}` + "/breweries")
      .then((res) => res.json())
      .then((res) => this.setState({ breweries: res }));
  }

  render() {
    console.log(this.state.breweries);

    const brewerMap = this.state.breweries.map((brewer) => {
      return (
        <Col
          xs={24}
          sm={12}
          lg={8}
          className="crypto-card"
          key={brewer.breweryId}
        >
          <RenderBreweryCard
            brewery={brewer}
            key={brewer.breweryId}
            breweryId={brewer.breweryId}
            breweryLogoUrl={brewer.breweryLogoUrl}
            name={brewer.name}
            address={brewer.address}
            description={brewer.description}
            website={brewer.websiteUrl}
          />
        </Col>
      );
    });
    return (
      <div>
        <h1>My Breweries</h1>
        <div className="crypto-card">
          <Row gutter={[32, 32]} className="crypto-card-container">
            {" "}
            {brewerMap}{" "}
          </Row>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(MyBrewery));
