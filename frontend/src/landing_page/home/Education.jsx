import React from 'react';

function Education() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src="media/images/education.svg" alt="Education Image" style={{width:"70%"}} />
                </div>
                <div className='col-6'>
                    <h1 className='mb-3 fs-2'>Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world <br /> 
                        covering everything from the basics to advanced trading. 
                    </p>
                    <a href="" style={{textDecoration:"none"}}>Versity <i className="fa-solid fa-arrow-right-long"></i></a>
                    <p className='mt-5'>TardingQ&A, the most active trading and investment community in <br /> 
                        India for all your market related queries.
                    </p>
                    <a href="" style={{textDecoration:"none"}}>TardingQ&A <i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;