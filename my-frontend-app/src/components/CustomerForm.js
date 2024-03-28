import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams instead of useHistory

const CustomerForm = () => {
    const [formData, setFormData] = useState({
        cust_name: '',
        cust_phone: '',
        venue: '',
        occasion: '',
        func_date: '',
        numberofperson: ''
    });

    // Get the history object using useParams
    const { history } = useParams();

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/customer', formData);
            history.push('/menu'); // Use history.push for navigation
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    }

    return (
        <div>
            <h1>Customer Details Form</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="cust_name" placeholder="Name" onChange={handleChange} />
                <input type="text" name="cust_phone" placeholder="Phone" onChange={handleChange} />
                <input type="text" name="venue" placeholder="Venue" onChange={handleChange} />
                <input type="text" name="occasion" placeholder="Occasion" onChange={handleChange} />
                <input type="date" name="func_date" onChange={handleChange} />
                <input type="number" name="numberofperson" placeholder="Number of Persons" onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CustomerForm;
