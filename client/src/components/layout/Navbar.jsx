import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Brightness6OutlinedIcon from "@mui/icons-material/Brightness6Outlined";

import styled from "styled-components";
import { Item } from "./Menu";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  height: 56px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;

const Search = styled.div`
  left: 0;
  right: 0;
  margin: auto;
  position: absolute;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
const Input = styled.input`
  border: none;
  padding: 5px;
  width: 100%;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-left: 25px;
`;

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search..." />
          <SearchOutlinedIcon />
        </Search>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <Brightness6OutlinedIcon />
        </Item>
        <Link to="signin" style={{ textDecoration: "none", color: "inherit" }}>
          <Button>
            <AccountCircleOutlinedIcon />
            SIGN IN
          </Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
