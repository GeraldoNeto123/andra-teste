import { styled } from "@mui/material";
import { grey } from '@mui/material/colors';

export const FooterContainer = styled("footer")`
  background-color: ${grey[200]};
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  p{
    position: relative;
    z-index: 1;
  }
`;
