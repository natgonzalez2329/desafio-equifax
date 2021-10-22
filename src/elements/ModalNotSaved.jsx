import React from 'react';

const ModalNotSaved = ({closeModal}) => {
  return (
    <div className="modalBackground">
      <div className="modal-container">
        <div className='container__modal'>
          <div className='content__modal'>
            <span className='close__modal d-flex justify-content-end' onClick={() => closeModal(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
              </svg>
            </span>
            <h3 className="text-center">Unsaved changes!</h3>
            <div className='modal__footer d-flex justify-content-center'>
                <button className="btn bg-warning bg-gradient m-2 text-white" onClick={() => closeModal(false)}>OK</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalNotSaved
