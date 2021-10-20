import MuiBox from '@mui/material/Box';
import styled from 'styled-components';

const Box = styled(MuiBox)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  width: 520,
  minHeight: 600,
  background: '#161a2b',
  textAlign: 'center',
  margin: '128px auto',
  borderRadius: 10,
  paddingBottom: 32
});

export default Box;
