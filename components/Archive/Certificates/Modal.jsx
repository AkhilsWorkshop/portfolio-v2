import { useState, Fragment } from "react"
import { Dialog, Transition } from '@headlessui/react'

const Modal = () => {
    let [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <button onClick={() => setIsOpen(true)}>Click</button>
            <Transition
                show={isOpen}
                enter="transition duration-500 ease-out"
                enterFrom="transform scale-50 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
                as={Fragment}
            >
                <Dialog
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    className="relative top-0 z-50"
                >
                    {/* The backdrop, rendered as a fixed sibling to the panel container */}
                    <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

                    {/* Full-screen container to center the panel */}
                    <div className="fixed inset-0 flex items-center justify-center p-4">
                        {/* The actual dialog panel  */}
                        <Dialog.Panel className="mx-auto max-w-sm rounded bg-primary">
                            <Dialog.Title>Deactivate account</Dialog.Title>
                            <Dialog.Description>
                                This will permanently deactivate your account
                            </Dialog.Description>

                            <p>
                                Are you sure you want to deactivate your account? All of your data
                                will be permanently removed. This action cannot be undone.
                            </p>
                            <button onClick={() => setIsOpen(false)}>Cancel</button>
                        </Dialog.Panel>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default Modal