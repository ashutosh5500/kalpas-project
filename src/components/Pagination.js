import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './Component.scss'

const Pagination = ({posts, onPaginationChange, pagination}) => {
    return (
        <div className={"Pagination"}>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {
                        pagination !== 1 && <li className="page-item"
                                                onClick={() => {
                                                    onPaginationChange(pagination - 1)
                                                }}>
                            <a className="page-link" href="#"
                               aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                    }
                    {
                        [...Array((posts.length/5)).keys()].map(item => {
                            return <li className={`page-item ${(pagination === item + 1) ? 'active' : ''}`}
                                       onClick={() => onPaginationChange(item + 1)}
                            ><a className="page-link" href="#">{item + 1}</a></li>
                        })
                    }
                    {
                        (posts.length/5) !== pagination &&  <li className="page-item" onClick={() => {
                            onPaginationChange(pagination + 1)
                        }}>
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;