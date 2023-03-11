import styled from "styled-components";
import Comment from "./Comment";

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  background-color: transparent;
  width: 100%;
  padding: 10px 20px;
  outline: none;
  color: ${({ theme }) => theme.text};
`;

const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src="https://yt3.ggpht.com/ytc/AL5GRJXG_ZE3ilyPRTEzx4zXmRiAdMJsNY58Py_7IG0OMw=s600-c-k-c0x00ffffff-no-rj-rp-mo" />
        <Input placeholder="Add a comment..." />
      </NewComment>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  );
};

export default Comments;
