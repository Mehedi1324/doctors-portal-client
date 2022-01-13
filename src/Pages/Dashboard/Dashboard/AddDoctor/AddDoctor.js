import { Button, Input, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';

const AddDoctor = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);
    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            return
        };
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("image", image);
        fetch('http://localhost:5000/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess("Doctor added successfully");
                    console.log("doctor added successfully")
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="standard-basic"
                    label="Name"
                    required
                    onChange={e => setName(e.target.value)}
                    type="name"
                    variant="standard"
                />
                <br />
                <TextField
                    id="standard-basic"
                    label="Email"
                    required
                    onChange={e => setEmail(e.target.value)}
                    type="email"
                    variant="standard"
                />
                <br />
                <Input
                    accept="image/*"
                    type="file"
                    onChange={e => setImage(e.target.files[0])}
                />

                <br />
                <Button
                    variant='contained'
                    type="submit"
                >Submit</Button>
            </form >

            {success && <p style={{ color: "green" }}>{success}</p>}

        </div>

    )
};

export default AddDoctor;