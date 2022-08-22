import React, {useEffect} from "react";
import {Link} from "react-router-dom";

export const Modal = ({isModal, setModal, title}) => {

    useEffect(() => {
        const modal = document.querySelector('.modal')
        if (isModal) {
            console.log({isModal})
            modal.style.display = "block";
        }


    }, [])
    const onClose = () => setModal(false)

    return (
        <div className="modal" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <Link to={"/"} className="btn-close" onClick={onClose}></Link>
                    </div>

                    <div className="modal-footer">
                        <Link to={"/"} className="btn btn-primary" onClick={onClose}>Закрыть</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}