import styled from "styled-components";
import Link from "next/link";

const Container = styled.li`
  padding-left: 20px;
`;

const Title = styled.a`
  cursor: pointer;
  &:hover {
    color: #1ebba3 !important;
  }
`;

function NavLink({ link, title }) {
  return (
    <Container className="nav-item">
      <Link href={link}>
        <Title className="nav-link">{title}</Title>
      </Link>
    </Container>
  );
}

export default NavLink;
