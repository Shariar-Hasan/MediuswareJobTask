import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import TempModal from './TempModal';

const Problem2 = () => {
    const [countryTitle, setCountryTitle] = useState("contacts")
    const [showModal, setShowModal] = useState(false)
    const [showDetailModal, setShowDetailModal] = useState(false)
    const [details, setDetails] = useState('')
    const [contactList, setContactList] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    useEffect(() => {
        // having problem while fetching data, no cors also not working, couldnt solve it
        fetch(`https://contact.mediusware.com/api/${countryTitle}`, {
            method: "GET",
            mode: "no-cors",
        }).then(res => {
            console.log(res)
            return res.json()
        })
            .then(data => console.log({ data }))
            .catch(err => console.log({ err }))
        setContactList([
            {
                id: 1,
                phone: "+1-202-555-0115",
                country: {
                    id: 2,
                    name: "United States",
                },
            },
            {
                id: 2,
                phone: "+1-202-555-0145",
                country: {
                    id: 2,
                    name: "United States",
                },
            },
            {
                id: 3,
                phone: "+1-202-555-0127",
                country: {
                    id: 2,
                    name: "United States",
                },
            },
            {
                id: 4,
                phone: "+1-202-555-0168",
                country: {
                    id: 2,
                    name: "United States",
                },
            },
            {
                id: 5,
                phone: "+880-165-552-5408",
                country: {
                    id: 1,
                    name: "Bangladesh",
                },
            },
            {
                id: 6,
                phone: "+880-115-553-7167",
                country: {
                    id: 1,
                    name: "Bangladesh",
                },
            },
            {
                id: 7,
                phone: "+880-115-553-7168",
                country: {
                    id: 1,
                    name: "Bangladesh",
                },
            },
            {
                id: 8,
                phone: "+880-115-553-7112",
                country: {
                    id: 1,
                    name: "Bangladesh",
                },
            },
            {
                id: 9,
                phone: "+880-115-553-7656",
                country: {
                    id: 1,
                    name: "Bangladesh",
                },
            },
            {
                id: 10,
                phone: "+880-115-553-4656",
                country: {
                    id: 1,
                    name: "Bangladesh",
                },
            },
            {
                id: 11,
                phone: "+880-115-553-7864",
                country: {
                    id: 1,
                    name: "Bangladesh",
                },
            },
            {
                id: 12,
                phone: "+880-115-551-0862",
                country: {
                    id: 1,
                    name: "Bangladesh",
                },
            },
            {
                id: 13,
                phone: "+880-175-559-9376",
                country: {
                    id: 1,
                    name: "Bangladesh",
                },
            },
            {
                id: 14,
                phone: "+880-115-556-5556",
                country: {
                    id: 1,
                    name: "Bangladesh",
                },
            },
            {
                id: 15,
                phone: "+880-175-553-2049",
                country: {
                    id: 1,
                    name: "Bangladesh",
                },
            },
            {
                id: 16,
                phone: "+880-115-553-822",
                country: {
                    id: 1,
                    name: "Bangladesh",
                },
            },
            {
                id: 17,
                phone: "+880-115-558-7860",
                country: {
                    id: 1,
                    name: "Bangladesh",
                },
            },
            {
                id: 18,
                phone: "+880-115-553-9404",
                country: {
                    id: 1,
                    name: "Bangladesh",
                },
            },
            {
                id: 19,
                phone: "+880-165-559-4793",
                country: {
                    id: 1,
                    name: "Bangladesh",
                },
            },
            {
                id: 20,
                phone: "+880-165-558-5109",
                country: {
                    id: 1,
                    name: "Bangladesh",
                },
            },
        ])

    }, [searchParams])
    const handleCloseModal = () => {
        setShowModal(false)
        setSearchParams({})
    }
    const modalShow = (showTitle) => {
        setSearchParams({
            contactTitle: showTitle
        })
        setCountryTitle(showTitle === "all" ? "contact" : "country-contacts/united%20states")
        setShowModal(true)
    }
    const showDetails = (data) => {
        setDetails(data)
        setShowDetailModal(true)
    }
    const hideDetails = () => {
        setDetails('')
        setShowDetailModal(false)
    }
    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-lg btn-outline-primary" type="button" onClick={() => {
                        modalShow("all")

                    }}>All Contacts</button>
                    <button className="btn btn-lg btn-outline-warning" type="button" onClick={() => {
                        modalShow("usa")
                    }}>US Contacts</button>
                </div>
                <TempModal
                    title={"Contact List"}
                    show={showModal}
                    onHide={() => handleCloseModal()}
                    restButtons={<>
                        <button type="button" className="btn btn-primary btn-a" onClick={() => {
                            modalShow("usa")
                        }}>US Contact</button>
                        <button type="button" className="btn btn-primary btn-b" onClick={() => {
                            modalShow("all")
                        }}>All Contact</button>
                    </>}
                >
                    <div className=' overflow-y-scroll mx-h-100'>
                        {contactList?.map(({ id, phone, country }) => <div
                            key={id}
                            className='d-flex justify-content-between my-1'
                        >
                            <span>{phone}</span>
                            <span>{country?.name}</span>
                            <button className='btn btn-primary' onClick={() => showDetails(phone)}>view</button>
                        </div>)}
                    </div>
                </TempModal>
                <TempModal
                    title={"Details"}
                    show={showDetailModal}
                    onHide={() => hideDetails()}
                >
                    <div className=''>
                        This is contact detail : {details} 
                    </div>
                </TempModal>
            </div>
        </div>
    );
};

export default Problem2;