import {useState} from "react"; 


const ReminderList = () => {  // defining components
    const[reminder, setReminder] = useState(""); // declaring one reminder 
    const[reminders, setReminders] = useState([]); // declaring container for saving reminders as array



    const addReminder = () => {
        if (reminder.trim() !=="") {
            setReminders([...reminders,reminder]); // Updates Are Done in One Step
            setReminder("");
        }
    };

    const removeReminder = (index) => {
        setReminders(reminders.filter((_, i) => i !== index)); // Keeps all reminders except the one with the matching index.
    };

    return (
        <>
            <h2>Reminder List</h2>
            <input
                    type="text"
                    value={reminder}
                    placeholder="Enter reminder ..."
                    onChange={(e) => setReminder(e.target.value)} // Updates the state every time the user types.
            />

            <button onClick={addReminder}>Add</button>

            <ul>
        {reminders.map((item, index) => (  // Loops over reminders using .map()
          <li key={index}>
            {item} <button onClick={() => removeReminder(index)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ReminderList;