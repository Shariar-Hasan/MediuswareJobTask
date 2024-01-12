import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import TempModal from './TempModal';

const Problem2 = () => {
    const [showModal, setShowModal] = useState(false)
    const modalref = useRef(null)
    const [contactList, setContactList] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    useEffect(() => {
        // having problem while fetching data, no cors also not working
        // fetch("https://contact.mediusware.com/api/contacts", { mode: 'no-cors'})
        //     .then(res => res.json())
        //     .then(data => console.log(data))
        //     .catch(err => console.log(err))
        setContactList([
            {
                id: 1,
                phone: "02840214",
                country: "USA"
            },
            {
                id: 2,
                phone: "02840214",
                country: "USA"
            },
            {
                id: 3,
                phone: "02840214",
                country: "USA"
            },
            {
                id: 4,
                phone: "02840214",
                country: "USA"
            },
        ])
        setShowModal()
    }, [searchParams])
    const handleCloseModal = () => {
        setShowModal(false)
        setSearchParams({})
    }
    const modalShow = () => {
        setShowModal(true)
    }
    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                <div className="d-flex justify-content-center gap-3">

                    <button className="btn btn-lg btn-outline-primary" type="button" onClick={() => {
                        modalShow()
                    }}>All Contacts</button>
                    <button className="btn btn-lg btn-outline-primary" type="button" onClick={() => {
                        setSearchParams({
                            contactTitle: "all"
                        })
                    }}>All Contacts</button>
                    <button className="btn btn-lg btn-outline-warning" type="button" onClick={() => {
                        setSearchParams({
                            contactTitle: "usa"
                        })
                    }}>US Contacts</button>
                </div>
                <TempModal
                    modalref={modalref}
                    title="US COntact"
                    show={showModal}
                    onHide={() => setShowModal(false)}
                >
                    <div>
                        {contactList?.map(({ id, phone, country }) => <div key={id} className='d-flex justify-between'>
                            <span>{phone}</span>
                            <span>{country}</span>
                        </div>)}
                    </div>
                </TempModal>
            </div>
        </div>
    );
};

export default Problem2;