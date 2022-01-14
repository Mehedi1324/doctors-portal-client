import { Alert, Button, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = React.useState("");
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();


    const handleOnblur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email }
        fetch("https://shrouded-inlet-34777.herokuapp.com/users/admin", {
            method: "PUT",
            headers: {
                "authorization": `Bearer${token}`,
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setEmail("");
                    setSuccess(true)
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    id="standard-basic"
                    label="Standard"
                    variant="standard"
                    onBlur={handleOnblur}
                    type="email"
                />
                <Button type='submit' variant='contained'>Make Admin</Button>
            </form>
            {success && <Alert severity='success'>New Admin Successfully added</Alert>}
        </div>
    );
};

export default MakeAdmin;