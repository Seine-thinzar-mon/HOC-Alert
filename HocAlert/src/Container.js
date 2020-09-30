import React from 'react'
import Button from './Button'
import Hoc from './Hoc'
import { withRouter } from 'react-router-dom';
const Container = props => {
    console.log(props)
    const NextClick = () => {
        props.history.push('/toastiy')
    }
  
    return (
        <div className="container-class">
            <h4>This is container</h4>
            <Button Click={props.notify}>Toastiy</Button>
            <Button Click={NextClick}>NextPage</Button>
        </div>
    )
}

export default Hoc(Container)