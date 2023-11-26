export interface IconProps extends React.SVGAttributes<SVGElement> {
  children?: never;
  color?: string;
  size?: number;
}

export interface IconMetadata {
  description?: string;
  keywords?: string[];
  authors?: string[];
  package?: string;
}
