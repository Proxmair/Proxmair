import React from 'react'

const Modal = ({ modalBtn, modalId, isModalTop, children }) => {
  return (
    <>{modalBtn}
      <dialog id={`${modalId}`} className={`modal ${isModalTop ? " modal-top " : " modal-middle "}`}>
        <div className="modal-box overflow-y-hidden">
          {children}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog></>
  )
}

export default Modal