import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Axios from "axios"
import {displayUser} from "../../Actions/action"
import {connect} from "react-redux"
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

 function ListUsers(props) {
  useEffect(()=>{
    async function getGamers()
    {
     const response = await Axios.get("http://localhost:5000/");
     props.displayUser(response.data)
    } 
     getGamers()
  
   },[props.users])
  const classes = useStyles();

  return (
    
    <TableContainer component={Paper}>
          <h2> All Users</h2>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>UserName</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Able / Disable</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {props.users.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.username}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">
                <Button variant="danger" style={{"color":"white","backgroundColor":"red"}}>Disable</Button>
              </TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
const mapStatetoProps = state => ({
  users: state.users.users,
});
export default  connect(mapStatetoProps,{displayUser})(ListUsers)