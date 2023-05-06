import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

    const notesInitial = [
        {
            "_id": {
                "$oid": "644e179cc9958718998fc0fc"
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
                "$oid": "644e179cc9958718998fc0fc"
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
                "$oid": "644e179cc9958718998fc0fc"
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
                "$oid": "644e179cc9958718998fc0fc"
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
                "$oid": "644e179cc9958718998fc0fc"
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
                "$oid": "644e179cc9958718998fc0fc"
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

