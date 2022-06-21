import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createData(name, n_ques, type_quest,  protein, price) {
  return {
    name,
    n_ques,
    type_quest,
 
    protein,
    price,
    answers: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.n_ques}</TableCell>
        <TableCell align="right">{row.type_quest}</TableCell>
       
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
              Answers
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Answer</TableCell>
                    <TableCell align="right">Correct (T/F)</TableCell>
                    <TableCell align="right">Actions</TableCell>
                    
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.answers.map((answersRow) => (
                    <TableRow key={answersRow.date}>
                      <TableCell component="th" scope="row">
                        {answersRow.date}
                      </TableCell>
                      <TableCell>{answersRow.customerId}</TableCell>
                      <TableCell align="right">{answersRow.amount}</TableCell>
                      <TableCell align="right">
                        
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    n_ques: PropTypes.number.isRequired,
    type_quest: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData('What does HTML stand for?', 159, 'Multi', 24, 4.0, 3.99),
  createData('Choose the correct HTML element for the largest heading:', 237, 9.0, 37, 4.3, 4.99),

];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Question</TableCell>
            <TableCell align="right">N° of answers</TableCell>
            <TableCell align="right">Answers type</TableCell>
            <TableCell align="right">Action</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row align="right" key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
