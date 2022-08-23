import React, {useEffect} from "react";
import {Link} from "react-router-dom";

export const Modal = ({isModal, closeModal, title}) => {

    useEffect(() => {
        const modal = document.querySelector('.modal')
        if (isModal) {
            modal.style.display = "block";
            modal.style.backgroundColor = "sRGB(0,0,0)"
        }
    }, [])

    return (
        <div className="modal" style={{backgroundColor:"rgba(0, 0, 0,0.5)"}} tabIndex="-1">
            <div className="modal-dialog " style={{top:"44%"}}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <Link to={"/"} className="btn-close" onClick={closeModal}></Link>
                    </div>

                    <div className="modal-footer">
                        <Link to={"/"} className="btn btn-primary" onClick={closeModal}>Закрыть</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}