import React from 'react';
import { useLoaderData } from 'react-router-dom';

import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { Button } from 'react-bootstrap';

const News = () => {
const news = useLoaderData();

const { _id, title, details, image_url, author,rating,category_id, total_view } = news;
return (
  <Card className="mb-5 ">
    <Card.Header className="d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">
        <div className="me-2">
          <Image
      
            src={author?.img}
            roundedCircle
            style={{ height: "50px" }}
          ></Image>
        </div>
        <div >
          <h5 className="m-0">{author?.name}</h5>
          <p className="m-0">{author?.published_date}</p>
        </div>
      </div>
      <div>
          <FaRegBookmark></FaRegBookmark>
          <FaShareAlt></FaShareAlt>
      </div>
    </Card.Header>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Img variant="top" src={image_url} />
      <Card.Text>
        {
          <p>{details}</p>
        }
        <Link to={`/category/${category_id}`}><Button>All news category</Button></Link>
      </Card.Text>
    </Card.Body>
    <Card.Footer className=" d-flex justify-content-between">
      <div>
          <FaStar className="text-warning me-2"></FaStar><span>{rating?.number}</span>
      </div>
      <div><FaEye className="me-2"></FaEye><span>{total_view}</span></div>
    </Card.Footer>
  </Card>
);
};

export default News;