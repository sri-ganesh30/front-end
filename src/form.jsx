import { useState, useEffect } from "react";

const Form = () => {
    const [formData, setFormData] = useState({ name: "", email: "" });
    const [savedData, setSavedData] = useState([]);

    useEffect(() => {
        // Load existing data from localStorage
        const data = JSON.parse(localStorage.getItem("userData")) || [];
        setSavedData(data);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedData = [...savedData, formData];

        // Save to localStorage
        localStorage.setItem("userData", JSON.stringify(updatedData));
        setSavedData(updatedData);
        alert("Data Saved!");
    };

    return (
        <>
            <h2>User Form</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <button type="submit">Submit</button>
            </form>

            <h3>Stored Data</h3>
            <ul>
                {savedData.map((user, index) => (
                    <li key={index}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </>
    );
};

export default Form;
