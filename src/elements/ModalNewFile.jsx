import React from 'react';

const ModalNewFile = ({ closeModal, setListPlugin, setPlugin, setOrchestration, setPreview }) => {

  const newOrchestration = () => {
    setListPlugin([]);
    setPlugin(0);
    setOrchestration([]);
    setPreview(true);
    closeModal(false)
  };

  return (
    <div className="modalBackground">
      <div className="modal-container newFile">
        <div className='container__modal'>
          <div className='content__modal'>
            <span className='close__modal d-flex justify-content-end' onClick={() => closeModal(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
              </svg>
            </span>
            <h4 className="text-center">This orchestration will be permanently deleted!</h4>
            <medium className="text-center d-flex justify-content-center">Are you sure to continue?</medium>
            <div className='modal__footer d-flex justify-content-center'>
              <button className="btn btn-outline-light me-md-2" onClick={() => closeModal(false)}>CANCEL</button>
              <button className="btn buttonNewFile" onClick={() => newOrchestration()}>NEW FILE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalNewFile
