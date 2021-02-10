import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  }
}