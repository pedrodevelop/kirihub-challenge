import { styled } from '@mui/material/styles';
import MuiOutlinedInput from '@mui/material/OutlinedInput';
import MuiBox from '@mui/material/Box';
import MuiButton from '@mui/material/Button';
import MuiListItem from '@mui/material/ListItem';
import MuiList from '@mui/material/List';
import MuiIconButton from '@mui/material/IconButton';

export const OutlinedInput = styled(MuiOutlinedInput)({
  padding: '14px 32px 14px 16px',
  borderRadius: '4px 0 0 4px',
  border: '0.5px solid #1976d2',
  outline: 'none',
  height: 50,
  width: 320,
  background: 'transparent',
  color: '#fff'
});

export const Typography = styled(MuiBox)({
  margin: '32px 0',
  color: '#fff',
  fontSize: '24px'
});

export const Button = styled(MuiButton)({
  padding: 16,
  height: 50,
  border: 'none',
  borderRadius: '0 4px 4px 0',
  cursor: 'pointer',
  outline: 'none',
  background: '#1976d2',
  color: '#fff',
  textTransform: 'capitalize',
  '&:hover': {
    background: '#1976d2'
  }
});

export const Form = styled('form')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

export const ListItem = styled(MuiListItem)({
  display: 'flex',
  justifyContent: 'space-between',
  aligItems: 'center',
  margin: '4px auto',
  color: '#fff',
  backgroundColor:
    'linear-gradient(90deg,rgba(255, 118, 20, 1) 0%,rgba(255, 84, 17, 1) 100%);',
  padding: 16,
  borderRadius: 5,
  width: '90%',
  height: 50,
  marginBottom: 10,
  '&:nth-child(4n + 1)': {
    background:
      'linear-gradient(90deg,rgba(93, 12, 255, 1) 0%,rgba(155, 0, 250, 1) 100%)'
  },
  '&:nth-child(4n + 2)': {
    background:
      'linear-gradient(90deg,rgba(255, 12, 241, 1) 0%,rgba(250, 0, 135, 1) 100%)'
  },
  '&:nth-child(4n + 3)': {
    background:
      'linear-gradient(90deg,rgba(20, 159, 255, 1) 0%,rgba(17, 122, 255, 1) 100%)'
  }
});

export const List = styled(MuiList)({
  height: '90%',
  maxHeight: '90%'
});

export const IconButton = styled(MuiIconButton)({
  fontSize: 24,
  color: '#fff',
  '&:hover': {
    backgroundColor: 'transparent'
  }
});
