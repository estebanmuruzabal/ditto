import React from 'react';
import BoxWrapper, { BoxContentWrapper, BoxHeading, TitleWrapper } from './box.style';


type BoxTitleProps = {
  title: string;
};

type BoxProps = {
  children: React.ReactNode;
  style?: any;
};

export const BoxTitleWrapper: React.FC<BoxProps> = ({ children, style }) => {
  return <TitleWrapper style={style}>{children}</TitleWrapper>;
};

export const BoxTitle: React.FC<BoxTitleProps> = ({ title }) => {
  return <BoxHeading>{title}</BoxHeading>;
};

export const Box = ({ children }: any) => {
  return <BoxWrapper>{children}</BoxWrapper>;
};

export const BoxContent: React.FC<BoxProps> = ({ children, style }) => {
  return <BoxContentWrapper style={style}>{children}</BoxContentWrapper>;
};
