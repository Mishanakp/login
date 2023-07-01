import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import CustomCard from "../../components/CustomCard/CustomCard";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchFlagList } from "../../store/slice/FlagListSlice";
import Loading from "../../components/loading/Loading";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFlagList());
  }, []);

  const { FlagList, FlagListFetching } = useSelector(
    (state) => state.FlagListSlice
  );
  console.log("flagData", FlagList);
  return (
    <div>
      <Header />
      <Container>
        {FlagListFetching ? (
          <div
            style={{
              width: "100%",
              height: "70vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Loading />
          </div>
        ) : (
          <Row className="m-0 p-0">
            {FlagList.map((item, idx) => {
              return (
                <Col key={idx} md={4}>
                  <div style={{ width: "100%" }}>
                    <CustomCard
                      image={item.flag}
                      country={item.name}
                      continent={item.region}
                    />
                  </div>
                </Col>
              );
            })}
          </Row>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
