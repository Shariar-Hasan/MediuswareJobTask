import React, { useEffect, useState } from 'react';
import { getItems, pushItem } from '../utils/localStorage';
import { stringMatch } from '../utils/utilityFunctions';

const Problem1 = () => {
    const [show, setShow] = useState('all');
    const [data, setData] = useState({});
    const [list, setList] = useState([]);
    useEffect(() => {
        getNewDataList()
    }, [show])
    // call new data
    const getNewDataList = () => {
        const newDataList = getItems(show) || []
        const sortedDatalist = [
            // active in first
            ...newDataList.filter(
                (item) =>
                    stringMatch(item.status, "Active")
            ),
            // completed in second
            ...newDataList.filter(
                (item) =>
                    stringMatch(item.status, "Completed")
            ),
            // rest in last
            ...newDataList.filter(
                (item) =>
                    !stringMatch(item.status, "Active") && !stringMatch(item.status, "Completed")
            ),
        ]
        setList(sortedDatalist)
        // console.log("new data arrived", { list, newDataList })
    }

    const handleClick = (val) => {
        setShow(val);
    }
    const handleInputChange = (e) => {
        // gettting all data on change events
        setData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    // after submit actoion
    const handleSubmit = (e) => {
        e.preventDefault()
        pushItem(data)
        getNewDataList()
        e.target.reset()
    }
    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form className="row gy-2 gx-3 align-items-center mb-4" onSubmit={handleSubmit}>
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Name" name='name' onChange={handleInputChange} />
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Status" name="status" onChange={handleInputChange} />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'all' && 'active'}`} type="button" onClick={() => handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'active' && 'active'}`} type="button" onClick={() => handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'completed' && 'active'}`} type="button" onClick={() => handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                list && list.map(({ name, status }, index) => <tr key={index}>
                                    <td scope="col">{name}</td>
                                    <td scope="col">{status}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;