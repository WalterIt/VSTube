import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "260px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;

const Title = styled.h1`
  margin-top: -2px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type }) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image
          type={type}
          src="https://i.ytimg.com/vi/CCF-xV3RSSs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA6XpT2ghnHdbV5exympMbpSBPFag"
        />
        <Details type={type}>
          <ChannelImage
            type={type}
            src="https://yt3.ggpht.com/ytc/AL5GRJXG_ZE3ilyPRTEzx4zXmRiAdMJsNY58Py_7IG0OMw=s600-c-k-c0x00ffffff-no-rj-rp-mo"
          />
          <Texts type={type}>
            <Title>Test Video</Title>
            <ChannelName>My Channel</ChannelName>
            <Info>65,333 views Jun 30, 2022</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
