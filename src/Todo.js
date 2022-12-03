import { Button, List, ListItem, ListItemText, Modal } from '@material-ui/core'
import React, { useState } from 'react'
import './Todo.css'
import db from './firebase';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import styled from '@emotion/styled';

const useStyles = styled((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border:'10px solid #010',
    boxShadow:theme.shadows[5],
    padding: theme.spacing(2, 4,3),
  },
}));

function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState();

  const handleOpen = () => {
    setOpen(true);
  };
const updateTodo = () => {
  db.collection('todos').doc(props.todo.id).set({

  }, {merge: true});

  setOpen(false);
};
  return (
       
    <List className='lists'>
        <ListItem className='content'>
            <ListItemText primary ={props.todo.todo}/>
            <DeleteForeverIcon className='button' onClick={event =>db.collection('todos').doc(props.todo.id).delete()}>Delete me</DeleteForeverIcon>
        </ListItem>
        
        
    </List>
   
    
  )
}

export default Todo