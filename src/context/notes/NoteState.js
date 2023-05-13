import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000"

    const notesInitial = []

    const [notes, setNotes] = useState(notesInitial)

    //Get all Notes
    const getNotes = async () => {
        //API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0ZDM4YTU2OWNiMjIwNGZmY2I1ZjU2In0sImlhdCI6MTY4MjgzNTIxMn0.eSWfoEtA7YhyVWOZGh6IRJ9hOA502XkMtY5qQa576H8"
            }
        });
        const json = await response.json()
        setNotes(json);
    }

    //Add a Note
    const addNote = async (title, description, tag) => {
        //API Call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0ZDM4YTU2OWNiMjIwNGZmY2I1ZjU2In0sImlhdCI6MTY4MjgzNTIxMn0.eSWfoEtA7YhyVWOZGh6IRJ9hOA502XkMtY5qQa576H8"
            },
            body: JSON.stringify({ title, description, tag })
        });

        const note = {
            "_id": "61322f119553781a8ca8d0e08",
            "user": "6131dc5e3e4037cd4734a0664",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
        };
        setNotes(notes.concat(note))
    }

    //Delete a Note
    const deleteNote = async (id) => {
        //API Call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0ZDM4YTU2OWNiMjIwNGZmY2I1ZjU2In0sImlhdCI6MTY4MjgzNTIxMn0.eSWfoEtA7YhyVWOZGh6IRJ9hOA502XkMtY5qQa576H8"
            }
        });
        const json = response.json();
        console.log(json);

        const newNotes = notes.filter((note) => { return note._id !== id });
        setNotes(newNotes);
    }

    //Edit a Note
    const editNote = async (id, title, description, tag) => {
        //API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0ZDM4YTU2OWNiMjIwNGZmY2I1ZjU2In0sImlhdCI6MTY4MjgzNTIxMn0.eSWfoEtA7YhyVWOZGh6IRJ9hOA502XkMtY5qQa576H8"
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = response.json();

        //Logic to edit in client
        for (let index = notes; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }

        }
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;

