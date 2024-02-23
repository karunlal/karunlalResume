import { createPortal } from 'react-dom'
import { forwardRef, useImperativeHandle, useRef } from 'react'

const Modal = forwardRef(function Modal({ children, onClose }, ref) {
  const dialog = useRef()
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal()
        console.log(dialog.current)
      },
    }
  })

  return createPortal(
    <dialog ref={dialog}>
      {children}
      <form method="dialog">
        <button onClick={() => onClose()}>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal-root')
  )
})

export default Modal
