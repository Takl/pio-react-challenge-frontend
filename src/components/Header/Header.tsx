import React from "react";
import { subTestidInit } from "../../utils";
import styled from "styled-components";
import {
  Router,
  Link,
  RouteComponentProps,
  withRouter
} from "react-router-dom";

const HeaderContainer = styled.div`
  grid-template-areas: "logo links";
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 1rem 2rem;
  align-items: center;
  background: #444;
`;

const Logo = styled(Link)`
  grid-area: logo;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
`;

const LinksContainer = styled.div`
  grid-area: links;

  & a {
    color: #fff;
    text-decoration: none;

    :hover {
      color: #ddf;
      text-decoration: underline;
    }
  }

  & a:not(:last-child) {
    margin-right: 1rem;
  }
`;

const Header: React.FC<RouteComponentProps & Testable> = ({
  history,
  testid = "Header"
}) => {
  const subTestid = subTestidInit(testid);

  return (
    <HeaderContainer data-testid={testid}>
      <Logo data-testid={subTestid("Logo")} to="/">
        Taql
      </Logo>
      <LinksContainer data-testid={subTestid("Links")}>
        <Router history={history}>
          <Link to="/appointments">Appointments</Link>
        </Router>
      </LinksContainer>
    </HeaderContainer>
  );
};

export default withRouter(Header);
