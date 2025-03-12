declare module 'react-card-parallax' {
  import { ReactNode } from 'react';

  export interface ParallaxCardProps {
    children?: ReactNode;
    tiltMaxAngleX?: number;
    tiltMaxAngleY?: number;
    offset?: number;
    [key: string]: any; 
  }

  export const ParallaxCard: React.FC<ParallaxCardProps>;
  export const ParallaxCardContainer: React.FC<any>;
}