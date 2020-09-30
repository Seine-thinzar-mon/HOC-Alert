import React from 'react';
import { toast } from 'react-toastify';
const Hoc = Comp => {
    const notify = () => {
        toast.success("Success Notification !", {
            position: toast.POSITION.TOP_CENTER
        });
    }
    return (props) => {
        return (<Comp {...props} notify={notify} />)
    }
}
export default Hoc