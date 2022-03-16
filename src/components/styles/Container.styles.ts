import styled from "styled-components";

export const Reset = styled.body;

export const Container = styled.div<{
  w?: string;
  h?: string;
  p?: string;
  m?: string;
  bgc?: string;
}>`
  height: ${(props) => props.h};
  width: ${(props) => props.w};
  max-width: 100%;
  padding: ${(props) => props.p};
  margin: ${(props) => props.m};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bgc};
`;

export const Text = styled.p<{
  color?: string;
  size?: string;
  weight?: string;
}>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
`;
