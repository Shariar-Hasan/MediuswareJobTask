import React from 'react'

const TempModal = ({ title = "", children, show, modalref, onHide, restButtons = <div></div> }) => {
    return (
        <div ref={modalref} className={`modal fade ${show ? "show" : ""}`} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" style={{ display: show ? "block" : "none" }} aria-hidden={!show}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">{title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onHide}></button>
                    </div>
                    <div className="modal-body ">
                        {children}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onHide}>Close</button>
                        {restButtons}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TempModal