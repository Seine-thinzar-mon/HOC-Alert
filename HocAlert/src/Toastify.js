import React from 'react'
import Button from './Button'
import Hoc from './Hoc'
const Toastify = props => {

    const PrevPage = () => {
        props.history.push('/dashboard')
    }
    return (
        <div className="Toastify">
            <h1>This is Toastify page</h1>
            <Button Click={props.notify}>Tostify</Button>
            <Button Click={PrevPage}>PrevPage</Button>
        </div>
    )
}
export default Hoc(Toastify)