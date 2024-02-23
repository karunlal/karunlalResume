import { createPortal } from 'react-dom'
import { forwardRef, useImperativeHandle, useRef } from 'react'

const Modal = forwardRef(function Modal(
  { children, onClose, buttonCaption },
  ref
) {
  const dialog = useRef()
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal()
      },
    }
  })

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog">
        <button
          onClick={() => onClose()}
          className="absolute top-0 right-0 m-4 text-3xl text-blue-700"
        >
          {buttonCaption}
        </button>
      </form>
    </dialog>,
    document.getElementById('modal-root')
  )
})

export default Modal
