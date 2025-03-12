declare module 'react-card-parallax' {
  import { ReactNode } from 'react';

  export interface ParallaxCardProps {
    children?: ReactNode;
    tiltMaxAngleX?: number;
    tiltMaxAngleY?: number;
    offset?: number;
    [key: string]: any; // වෙනත් ප්‍රොප්ස් එකතු කරන්න ඕනෙනම්
  }

  export const ParallaxCard: React.FC<ParallaxCardProps>;
  export const ParallaxCardContainer: React.FC<any>;
}