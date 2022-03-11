import React, { Component, createElement, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import moment from "moment";
import { baseUrl } from "../../Shared/baseUrl";
import {
  Breadcrumb,
  Comment,
  Tooltip,
  Layout,
  Typography,
  Row,
  Col,
  Avatar,
  Card,
} from "antd";
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
} from "@ant-design/icons";

const { Text, Title } = Typography;
const { Content } = Layout;

function RenderReviewCard({
  review,
  reviewTitle,
  reviewId,
  imgUrl,
  name,
  description,
  rating,
}) {
  return (
    <Comment
      author={<a>Beer Lover</a>}
      avatar={
        <Avatar
          src={
            "https://cdn.icon-icons.com/icons2/2510/PNG/512/party_happy_alcohol_cheers_beer_drink_celebration_icon_150768.png"
          }
          alt="Beer Lover"
        />
      }
      content={<p>{description}</p>}
      datetime={<Text style={{ fontWeight: "bold" }}> {rating + " / 10"}</Text>}
    />
  );
}

class Beer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beer: this.props.location.state,
      reviews: [],
    };
  }

  componentDidMount() {
    const id = this.state.beer.beer.beerId;
    fetch(baseUrl + `/reviews/${id}`)
      .then((res) => res.json())
      .then((res) => this.setState({ reviews: res }));
  }
  render() {
    const { beer } = this.state.beer;
    const reviewsMap = this.state.reviews.map((review) => {
      return (
        <RenderReviewCard
          review={review}
          reviewTitle={review.name}
          reviewId={review.reviewsId}
          imgUrl={beer.imgUrl}
          name={beer.name}
          description={review.description}
          rating={review.rating}
        />
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
              <Breadcrumb.Item>{beer.name}</Breadcrumb.Item>
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
          <Title level={2}>Beer Details </Title>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          beer Id is: {beer.beerId}
          <br />
          beer name is: {beer.name} <br />
          beer info is: {beer.info} <br />
          beer type is: {beer.type}{" "}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Title level={2}>Reviews for {beer.name} </Title>
        </div>
        <div
          className="crypto-card"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div> {reviewsMap} </div>
        </div>
      </>
    );
  }
}

export default Beer;
