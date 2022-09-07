import { Button, Card, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PostCard = ({ postMetaData }) => {
  return (
    <Row>
      {postMetaData?.map((metaData) => (
        <Col span={8}>
          <Card
            hoverable
            style={{
              margin: "0 20px",
              minHeight: 500,
            }}
            cover={
              <Image
                alt="example"
                src={metaData?.metadata?.imgName}
                width={180}
                height={100}
                layout="responsive"
              />
            }
          >
            <Link href={`/post/${metaData?.metadata.id}`}>
              <h3 className="postcard__title">{metaData?.metadata.title}</h3>
            </Link>
            <p>{metaData?.metadata.description}</p>

            <div className="tags-container-tag">
              {metaData.metadata.tags.map((tag_name, index) => {
                return (
                  <Link href={`/post/${metaData.metadata.id}`} key={tag_name}>
                    <a className="tag-link">{"#" + tag_name}</a>
                  </Link>
                );
              })}
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default PostCard;
