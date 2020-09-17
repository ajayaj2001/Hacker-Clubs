import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer id="footer-head here" className="bg-dark ">
                <div className="container text-white">
                    <div className="row">
                        <div className="col text-center py-4">
                            <h1>Hacker Club</h1>
                            <h4 className="font-italic">Founder :<a href="#here" > AJAY</a></h4>
                            <p>Copy-Rights &copy; 2020</p>
                            <button className="btn btn-primary" data-toggle="modal" data-target="#contactmodal">Contact</button>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="modal fade text-dark" id="contactmodal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title" id="contactModalTitle">Contact Us</h1>
                            <button className="close" data-dismiss="modal"><span>&times;</span></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name"> Name</label>
                                    <input type="text" className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email"> Email</label>
                                    <input type="email" className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name"> Message</label>
                                    <textarea className="form-control"></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="model-footer">
                            <button className="btn btn-primary btn-block" >Submit</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer
