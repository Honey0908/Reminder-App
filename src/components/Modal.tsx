import React from 'react';

const Modal: React.FC<ModalProps> = ({ children, modalButtonName, heading, isOpen, setIsOpen }) => {

    return (
        <>
            <button className='px-6 py-2.5 w-full md:text-2xl border-primary border text-primary font-medium md:font-normal mt-3 uppercase rounded hover:bg-primary hover:shadow-lg hover:text-white transition duration-200 ease-in-out' onClick={() => setIsOpen(!isOpen)}>{modalButtonName}</button>
            {
                isOpen && (
                    <div className='p-3 items-center  bg-gray-600 bg-opacity-60 flex flex-col overflow-x-hidden overflow-y-auto fixed inset-0 z-50 focus:outline-none'>
                        <div className="w-full shadow-sm flex flex-col justify-between p-3 max-w-xl border  bg-white rounded-md">
                            <div className='w-full flex justify-between'>
                                <h5 className='text-xl text-gray-700 font-semibold'>{heading}</h5>
                                <button className="ms-auto" onClick={() => setIsOpen(false)} >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            {children}
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default Modal;
