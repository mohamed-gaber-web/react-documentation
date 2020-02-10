import React from 'react';
import Button from '@material-ui/core/Button';


export const ButtonUI = (props) => { 

    return (
        <Button variant="contained" color={props.color}> {props.children} </Button>
    );
}

