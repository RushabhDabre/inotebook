import React, { useContext } from 'react'
import noteContext from "../context/notes/noteContext"

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


const NoteItem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, showAlert, updateNote } = props;

    const handleDelete = () => {
        confirmAlert({
          title: 'Confirm to Delete',
          message: 'Are you sure you want to delete this note?',
          buttons: [
            {
              label: 'Yes',
              onClick: () => {
                deleteNote(note._id);
                showAlert('Note deleted successfully', 'success');
              }
            },
            {
              label: 'No'
            }
          ]
        });
      };

    return (
        <div className="col-md-3">
            <div className="card my-3" >
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>

                    <i className="fa-solid fa-trash mx-2" onClick={() => { handleDelete(); }}></i>
                    <i className="fa-solid fa-pen-to-square mx-2" onClick={() => { updateNote(note);  }}></i>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
