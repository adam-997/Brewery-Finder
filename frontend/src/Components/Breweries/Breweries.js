import React, { Component } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import { baseUrl } from "../../Shared/baseUrl";

const { Text, Title } = Typography;

function RenderBreweryCard({
  breweryId,
  name,
  address,
  description,
  brewerLogoUrl,
}) {
  return (
    <Col xs={24} sm={12} lg={8} key={breweryId}>
      <Card hoverable className="news-card">
        <div className="news-image-container">
          <Title className="news-title" level={4}>
            {name}
          </Title>
          <img width={200} src={brewerLogoUrl} alt={"brewerId: " + breweryId} />
        </div>
        <p>{description}</p>
        <div className="provider-container">
          <div>
            <Avatar src={brewerLogoUrl} alt={"brewerId: " + breweryId} />
            <Text className="provider-name">{name}</Text>
          </div>
          <Text>{address}</Text>
        </div>
      </Card>
    </Col>
  );
}

class BreweryCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      breweries: [],
    };
  }
  componentDidMount() {
    fetch(baseUrl + "/breweries")
      .then((res) => res.json())
      .then((res) => this.setState({ breweries: res }));
  }

  render() {
    const brewerMap = this.state.breweries.map((brewer) => {
      return (
        <RenderBreweryCard
          key={brewer.breweryId}
          id={brewer.breweryId}
          brewerLogoUrl={brewer.brewerLogoUrl}
          name={brewer.name}
          address={brewer.address}
          description={brewer.description}
        />
      );
    });
    return <div> {brewerMap} </div>;
  }
}
export default BreweryCard;
