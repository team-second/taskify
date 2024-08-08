import React from 'react'
import Modal from 'react-modal'
import AddTaskForm from './AddTaskForm'

//Modal.setAppElement('#root') // 접근성을 위한 설정

interface AddTaskModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export default function AddTaskModal({
  isOpen,
  onRequestClose,
}: AddTaskModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel='Add Task Modal'
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          padding: 0,
          border: 'none',
          borderRadius: '12px',
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      }}
    >
      <AddTaskForm />
    </Modal>
  )
}
