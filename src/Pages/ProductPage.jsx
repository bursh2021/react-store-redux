import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const WrapperFlex = styled.div`
  min-height: 100vh;
`;
const FlexBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 20px;
  padding: 10px 0px;
  justify-content: center;
  .block {
    width: 250px;
    background: gray;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 5px 4px 10px 6px rgba(71, 71, 71, 0.386);
    .description {
      display: grid;
      justify-content: center;
      button {
        width: 250px;
      }
    }
    p {
      padding: 10px;
      font-size: 1rem;
    }
  }
`;
const Img = styled.div`
  height: 200px;
  img {
    height: 100%;
    width: 100%;
  }
`;

const ProductPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <WrapperFlex>
      <FlexBlock>
        {posts.map((p) => (
          <div className="block">
            <div>
              <Img>
                <img
                  src={
                    "https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVkaXRhdGlvbnxlbnwwfHwwfHw%3D&w=1000&q=80"
                  }
                  alt="img"
                />
              </Img>
              {/* <div className="description">
                <Description title={p.title} />
              </div> */}
            </div>
            <Link to={`/posts/${p.id}`}>
              <h5 style={{ padding: "0px 10px" }}>описание</h5>
              <p>цена{Math.floor(Math.random() * (10 - 100))}рублей</p>
            </Link>
          </div>
        ))}
      </FlexBlock>
    </WrapperFlex>
  );
};

export { ProductPage };

const Description = ({ title }) => {
  const [togle, setTogle] = useState(false);
  return (
    <>
      <button onClick={() => setTogle(!togle)}>desciption</button>
      <p className={togle ? "descr_togle" : ""}>{togle ? title : null}</p>
    </>
  );
};
