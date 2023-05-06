import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

    const notesInitial = [
        {
            "_id": {
                "$oid": "644e179cc69958718998fc0fc1"
            },
            "user": {
                "$oid": "644d38a569cb2204ffcb5f56"
            },
            "title": "New note updated",
            "description": "Please Wake up Early in the Morning (updated)",
            "tag": "personal",
            "date": {
                "$date": "2023-04-30T07:24:12.114Z"
            },
            "__v": 0
        },
        {
            "_id": {
                "$oid": "644e179cc59958718998fc0fc2"
            },
            "user": {
                "$oid": "644d38a569cb2204ffcb5f56"
            },
            "title": "New note updated",
            "description": "Please Wake up Early in the Morning (updated)",
            "tag": "personal",
            "date": {
                "$date": "2023-04-30T07:24:12.114Z"
            },
            "__v": 0
        },
        {
            "_id": {
                "$oid": "644e179cc49958718998fc0fc3"
            },
            "user": {
                "$oid": "644d38a569cb2204ffcb5f56"
            },
            "title": "New note updated",
            "description": "Please Wake up Early in the Morning (updated)",
            "tag": "personal",
            "date": {
                "$date": "2023-04-30T07:24:12.114Z"
            },
            "__v": 0
        },
        {
            "_id": {
                "$oid": "644e179cc39958718998fc0fc4"
            },
            "user": {
                "$oid": "644d38a569cb2204ffcb5f56"
            },
            "title": "New note updated",
            "description": "Please Wake up Early in the Morning (updated)",
            "tag": "personal",
            "date": {
                "$date": "2023-04-30T07:24:12.114Z"
            },
            "__v": 0
        },
        {
            "_id": {
                "$oid": "644e1729cc29958718998fc0fc5"
            },
            "user": {
                "$oid": "644d38a569cb2204ffcb5f56"
            },
            "title": "New note updated",
            "description": "Please Wake up Early in the Morning (updated)",
            "tag": "personal",
            "date": {
                "$date": "2023-04-30T07:24:12.114Z"
            },
            "__v": 0
        },
        {
            "_id": {
                "$oid": "644e179c1c19958718998fc0fc6"
            },
            "user": {
                "$oid": "644d38a569cb2204ffcb5f56"
            },
            "title": "New note updated",
            "description": "Please Wake up Early in the Morning (updated)",
            "tag": "personal",
            "date": {
                "$date": "2023-04-30T07:24:12.114Z"
            },
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(notesInitial)

    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;

