import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { Layout, Typography, Row, Col, Avatar, Card } from "antd";
import { baseUrl } from "../../Shared/baseUrl";
import { Breadcrumb } from "antd";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PostBeer from "../PostForms/PostBeer";

const { Text, Title } = Typography;
const { Content } = Layout;

const mapStateToProps = (state) => {
  return {
    token: state.token,
    user: state.user,
  };
};

const isDeleted = false;

const deleteHandler = (beerId) => {
  fetch(baseUrl + `/reviews/${beerId}`, { method: "DELETE" }).then((res) => {
    console.log(res);
    secondDelete(beerId);
  });
};

const secondDelete = (beerId) => {
  fetch(baseUrl + `/beers/${beerId}`, { method: "DELETE" }).then((res) => {
    console.log(res);
  });
};

function RenderBeerCard({
  beer,
  breweryUserId,
  beerId,
  imgUrl,
  name,
  description,
  breweryImgUrl,
  breweryName,
  type,
  userId,
}) {
  return (
    <Card hoverable className="news-card">
      <div className={userId !== breweryUserId ? "hidden" : ""}>
        <span
          className="delete-btn"
          onClick={(e) => {
            deleteHandler(beerId);
          }}
        >
          &times;
        </span>
      </div>
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

  updateBeer = (beer) => {
    this.setState({
      beers: [...this.state.beers, beer],
    });
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
            breweryUserId={brewery.userId}
            userId={this.props.user.userId}
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
          <Title level={2}>{brewery.name}</Title>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <img
            src={brewery.breweryLogoUrl}
            alt={"brewery: " + brewery.breweryId}
            height="200"
            padding="200"
            style={{ justifyContent: "left" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {brewery.description}
          <br />
          {brewery.address}, {brewery.city}
          <br />
          {brewery.phoneNumber}
          <br />
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
          <div className="crypto-card">
            <PostBeer
              breweryId={brewery.breweryId}
              updateBeer={this.updateBeer}
              breweryOwnerId={brewery.userId}
            />
            <Row gutter={[32, 32]} className="crypto-card-container">
              {" "}
              {beerMap}
            </Row>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Brewer));
