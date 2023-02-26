import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from '@mui/material/TablePagination';
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";
import { useState, useEffect} from "react";
import { border } from "@mui/system";


const makeStyle=(status)=>{
  if(status === 'OK')
  {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  else if(status === 'Alert')
  {
    return{
      background: '#ffadad8f',
      color: 'red',
    }
  }
  else{
    return{
      background: '#59bfff',
      color: 'white',
    }
  }
}
function BasicTable(props) {

  const [state, setData] = useState([]);
  const [value, setValue] = useState(false);
  const [list, setList] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);


  useEffect(()=>{
    const fetchData = async () => {
      try {
        let data = await fetch('http://localhost:3005/data?id='+ props.id)
        let JsonData = await data.json()
        setData(JsonData[0]);
        setValue(true);       
      } catch (error) {
        console.log("error", error);
      }
    }

    fetchData();
  }, [props.id]) 

    useEffect(()=>{
      if(value){
      const tableData = [];
      const fetchData1 = async () => {
      if(typeof state.monitor_ids === 'object' )
      for(let i=0;i<state.monitor_ids.length;i++){
        const url='http://localhost:3003/monitors?id='+ state.monitor_ids[i];
        const response = await fetch(url)
        const json = await response.json()  
    
        tableData.push(json[0]);
      }
      
      setPage(0)
      setList(tableData)
      setValue(false)
    }
    fetchData1();
    }
    },[value])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
      <div className="Table" style={{width:"100%", zIndex:"1"}}>
      <h2 className='tableHeader' style={{marginBottom:"1rem", zIndex:"2"}}>Associated Monitors</h2>
        
      <Paper sx={{ width: '100%', overflow: 'hidden' }}  style={{ borderRadius: "1rem" , border:"2rem black" }}>
      <TableContainer sx={{ minheight: 440}}>
        <Table stickyHeader aria-label="sticky table" sx={{height: "max-content"}}>
            <TableHead>
              <TableRow>
                <TableCell align="center">Monitor Name</TableCell>
                <TableCell align="center">Monitor Id</TableCell>
                <TableCell align="center">Type</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Creator</TableCell>
              </TableRow>
            </TableHead>


            <TableBody style={{ color: "white", border:"black" }}>
              {list.slice(page*rowsPerPage, page * rowsPerPage + rowsPerPage).map((list) => { 
                return(
                <TableRow hover role="checkbox" tabIndex={-1} key={list.id}>
                  <TableCell component="th" scope="row">{list.name}</TableCell>
                  <TableCell align="center">{list.id}</TableCell>
                  <TableCell align="center">{list.type}</TableCell>
                  <TableCell align="center"><span className="status" style={makeStyle(list.overall_state)}>{list.overall_state}</span></TableCell>
                  <TableCell align="center" className="Creator">{list.creator.name}</TableCell>
                </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
        className="pagination"
        rowsPerPageOptions={[5,10,15]}
        component="div"
        count={list.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
      </div>
  );
}

export default BasicTable;
