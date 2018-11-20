import styled, { ThemeProvider, injectGlobal } from 'styled-components';

import Header from './Header';
import Meta from './Meta';

const theme = {
  red: '#f00',
  black: '#393939',
  grey: '#3a3a3a',
  lightGrey: '#e1e1e1',
  offWhite: '#ededed',
  maxWidth: '100px',
  // box-shadow
  bs: '0 12px 24px 0 #0001',
};

const StyledPage = styled.div`
  background: #fff;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidths};
  margin: 0 auto;
  padding: 2rem;
`;

export default function Page(props) {
  return (
    <ThemeProvider theme={theme}>
      <StyledPage>
        <Meta />
        <Header />
        <Inner>{props.children}</Inner>
      </StyledPage>
    </ThemeProvider>
  );
}
