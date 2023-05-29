import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";
import index from "../index.css";

const Notes = (props) => {
    const context = useContext(noteContext);
    let navigate = useNavigate();
    const { notes, getNotes, editNote, addNote } = context;
    useEffect(() => {
        if (localStorage.getItem("token")) {
            getNotes();
        } else {
            navigate("/login");
        }
        // eslint-disable-next-line
    }, []);

    const ref = useRef(null);
    const refClose = useRef(null);
    const [note, setNote] = useState({
        id: "", etitle: "", edescription: "", etag: "",
    });

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({
            id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag,
        });
    };

    const handleClick = (e) => {
        editNote(note.id, note.etitle, note.edescription, note.etag);
        refClose.current.click();
        props.showAlert("Updated successfully", "success");
    };

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };

    const handleAddNote = (title, description, tag) => {
        addNote(title, description, tag);
        refClose.current.click();
        props.showAlert("Added Note Successfully", "success");

    };

    return (
        <>
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel"> Edit Note </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label"> Title </label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label"> Tag </label>
                                    <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label"> Description </label>
                                    <textarea rows={5} type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} minLength={5} required />
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">  Close </button>
                            <button disabled={note.etitle.length < 5 || note.edescription.length < 5} onClick={handleClick} type="button" className="btn btn-primary" > Update Note </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-3">
                <div className="col-md-3">
                    <div className="card my-3 h-75" style={{ cursor: "pointer" }} data-bs-toggle="modal" data-bs-target="#addNoteModal" >
                        <div className="card-body mx-auto">
                            <i className="fa-solid fa-plus fa-2xl" style={{ verticalAlign: "-1.1875em" }} ></i>
                        </div>
                    </div>
                </div>

                {[...notes].reverse().map((note) => (
                    <NoteItem updateNote={updateNote} key={note._id} showAlert={props.showAlert} note={note} />
                ))}
            </div>

            <div className="modal fade" id="addNoteModal" tabIndex="-1" aria-labelledby="addNoteModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addNoteModalLabel">  Add Note </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <AddNote handleAddNote={handleAddNote} showAlert={props.showAlert} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Notes;