import styled from 'styled-components';
import picture from './hero.png';

export const AppContainer = styled.div`
  width: 300px;
  padding: 20px;

  background-image: linear-gradient(
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${picture});
  background-size: cover;
`;

export const Doyoulike = styled.p`
  color: antiquewhite;
  font-style: italic;
  font-size: 20px;
`;
