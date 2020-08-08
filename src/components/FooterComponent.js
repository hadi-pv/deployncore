import React from 'react';
import tensorlogo from "../assets/images/logof2.png" ;

function Footer(props) {
    return(
    <div className="footer">
        <div className="container-fluid">
            <div className="row justify-content-center">             
                <div className="col-12 col-sm-4">
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.853999340548!2d75.83495611462733!3d11.272140891986298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65c761ec9e5ed%3A0x451b0ee9d6098b36!2sCalicut%20Medical%20College%2C%20SH24%2C%20Government%20Medical%20College%20Campus%2C%20Kozhikode%2C%20Kerala%20673008%2C%20India!5e0!3m2!1sen!2sus!4v1592896212102!5m2!1sen!2sus"
                            frameborder="0" allowfullscreen width="100%"></iframe>
                    </div><br/>            
                    <div className="text-center">
                        <ul className="list-unstyled list-inline row">
                            <li className="list-inline-item col-3">
                                <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>&emsp;
                            </li>
                            <li className="list-inline-item col-3">
                                <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>&emsp;
                            </li>
                            <li className="list-inline-item col-3">
                                <a className="btn btn-social-icon btn-twitter" href="mailto:Ncoreneetexam@gmail.com"><i className="fa fa-envelope-o"></i></a>&emsp;
                            </li>
                        </ul>
                    </div>        
                </div>
                <div className="col-12 col-sm-4">
                    <h5>Our Address</h5>
                    <address>
                        <p>Government Medical College Campus Kozhikode, Kerala 673008 India</p>    
		                <i className="fa fa-phone fa-lg"></i> :<p>Ummar Faris : 9207555913</p><p>Nadha Shafi : 8078009608</p>
		                <i className="fa fa-envelope fa-lg"></i> :<a href="mailto:Ncoreneetexam@gmail.com"><p>ncoreneetexam@gmail.com</p></a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <img className="img-fluid float-left" src={tensorlogo} height="100px"/>
                        <h3 className="float-right" style={{color: "rgb(22, 160, 132)"}}>Social Campaign Initiative</h3>
                    </div>
                    <div className="float-right row">
                    <p >
                        <a href="https://www.instagram.com/tensors_official/" id="facebook_button" target="_blank"><i class="fa fa-instagram fa-2x"></i></a>&emsp;&emsp;
                        <a href="https://www.facebook.com/tensorsofficial" id="facebook_button" target="_blank"><i class="fa fa-facebook fa-2x"></i></a>&emsp;&emsp;
                        <a href="https://www.linkedin.com/company/53201198" id="facebook_button" target="_blank"><i class="fa fa-linkedin fa-2x"></i></a>&emsp;&emsp;                  
                        <a href="mailto:tensorsofficial@gmail.com" id="facebook_button" target="_blank"><i class="fa fa-envelope-square fa-2x"></i></a>
                    </p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>POWERED BY TENSORSCI</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;
