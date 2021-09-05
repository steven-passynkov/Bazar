import styled from "styled-components";

export const Box = styled.div`
  padding: 80px 40px;
  background: #00008b;
  position: absolute;
  bottom: 0;
  width: 100%;
  transform: translateY(100%);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  max-width: 1000px;
  margin: 0 auto;
  /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: -150px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

}
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;
