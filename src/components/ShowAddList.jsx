import { useState } from "react";

const ShowAddList = () => {
    // State for storing the list
    const [mutualList, setObject] = useState([
        { }
    ]);

    // State for a new person
    const [newPerson, setPerson] = useState({ firstName: "", lastName: "" });

    // Handle input changes
    const handleInputChange = (e) => {
        setPerson({ ...newPerson, [e.target.name]: e.target.value });
    };

    // Add new person to the list
    const addPerson = () => {
        if (newPerson.firstName.trim() !== "" && newPerson.lastName.trim() !== "") {
            setObject([...mutualList, { id: mutualList.length + 1, ...newPerson }]);
            setPerson({ firstName: "", lastName: "" }); // Reset input fields
        } else {
            alert("Please enter both first and last name!");
        }
    };

    return (
        <div>
            <h2>Your mutual list</h2>

            <input
                type="text"
                name="firstName"
                value={newPerson.firstName}
                placeholder="Enter first name..."
                onChange={handleInputChange}
            />

            <input
                type="text"
                name="lastName"
                value={newPerson.lastName}
                placeholder="Enter last name..."
                onChange={handleInputChange}
            />

            <button onClick={addPerson}>PUSH ADD</button>

            <ul>
                {mutualList.map((item, index) => (
                    <li key={index}>{index+1} {item.firstName} {item.lastName}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShowAddList;
