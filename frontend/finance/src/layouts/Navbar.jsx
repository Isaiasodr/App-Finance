import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #124368;
  padding: 15px;
  justify-content: space-between;
`;
const Logo = styled.h1`
  color: white;
`;
const Lista = styled.ul`
  display: flex;
`;
const List = styled.li`
  text-decoration: none;
  list-style: none;
  padding: 5px;
  color: white;
`;

const Navbar = () => {
  return (
    <Container>
      <Logo>Finance</Logo>
      <Lista>
        <List as="a" href="/dashboard">
          Dashboard
        </List>
        <List as="a" href="#">
          Login
        </List>
      </Lista>
    </Container>
  );
};

export default Navbar;
