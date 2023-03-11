import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
`;

const Comment = () => {
  return (
    <Container>
      <Avatar src="https://yt3.ggpht.com/ytc/AL5GRJXG_ZE3ilyPRTEzx4zXmRiAdMJsNY58Py_7IG0OMw=s600-c-k-c0x00ffffff-no-rj-rp-mo" />
      <Details>
        <Name>
          Walter Silva <Date>March 5, 2023</Date>{" "}
        </Name>

        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
          eligendi velit sint. Lorem ipsum dolor sit amet.
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;
