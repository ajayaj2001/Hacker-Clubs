import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer id="footer-head here" class="bg-dark ">
                <div class="container text-white">
                    <div class="row">
                        <div class="col text-center py-4">
                            <h1>Hacker Club</h1>
                            <h4 class="font-italic">Founder :<a href="#here" > AJAY</a></h4>
                            <p>Copy-Rights &copy; 2020</p>
                            <button class="btn btn-primary" data-toggle="modal" data-target="#contactmodal">Contact</button>
                        </div>
                    </div>
                </div>
            </footer>
            <div class="modal fade text-dark" id="contactmodal">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title" id="contactModalTitle">Contact Us</h1>
                            <button class="close" data-dismiss="modal"><span>&times;</span></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label for="name"> Name</label>
                                    <input type="text" class="form-control"></input>
                                </div>
                                <div class="form-group">
                                    <label for="email"> Email</label>
                                    <input type="email" class="form-control"></input>
                                </div>
                                <div class="form-group">
                                    <label for="name"> Message</label>
                                    <textarea class="form-control"></textarea>
                                </div>
                            </form>
                        </div>
                        <div class="model-footer">
                            <button class="btn btn-primary btn-block" >Submit</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer
