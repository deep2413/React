import React from "react";
import './Login.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'


const loginSchema = Yup.object({
 name: Yup.string().min(2).max(25).required("Enter your full name"),
 email: Yup.string().email().required("Enter your email"),
 password: Yup.string().min(6).required('Enter password'),
 confirm_password: Yup.string().required().oneOf([Yup.ref('password'),null],"Enter the same password")
});

const initialValues = {

  name : "",
  email : "",
  password : "",
  confirm_password : "",
};

const Login = () => {

 const {values, errors,touched, handleBlur, handleChange, handleSubmit} =  useFormik({
  validationSchema : loginSchema,
    initialValues: initialValues,
    onSubmit : (values , action) => {
      console.log(values);
      action.resetForm();
      
    },
  });

 
 

    return(
             
        <div className="container">

             
              <div className="row mt-3 for_image p-3">
                 <div className="col-md-12 d-flex justify-content-center">
                    <div className="card shadow w-50 rounded">
                        <div className="card-body   p-5">

                        <form onSubmit={handleSubmit}>

                            <div className="mb-5 text-center">
                            <h1><i class="fa-solid fa-lock icon-class"></i>Login Form</h1>
                            </div>
  

  
   <div className="mb-3">
   <label htmlFor="name" className="input-label">
      Full Name
    </label>
    <input
      type="name"
      name="name"
      className="form-control"
      id="name"

      value={values.name}
      onChange={handleChange}
      onBlur={handleBlur}

    />

   { errors.name && touched.name ? ( <p className="form-error">{errors.name}</p> ) : null}
  
   </div>

        <div className="mb-3">
        <label htmlFor="email" className="input-label">
      Email address
    </label>
    <input
      type="email"
      className="form-control"
      id="email"
      name="email"

      value={values.email}
      onChange={handleChange}
      onBlur={handleBlur}
    />

{ errors.email && touched.email ? ( <p className="form-error">{errors.email}</p> ) : null}
        </div>
    
  
  <div className="mb-3">
    <label htmlFor="password" className="input-label">
      Password
    </label>
    <input
      type="password"
      className="form-control"
      id="password"
      name="password"
      value={values.password}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    { errors.password && touched.password ? ( <p className="form-error">{errors.password}</p> ) : null}
  </div>


  <div className="mb-3">
    <label htmlFor="confirm_password" className="input-label">
      Confirm Password
    </label>
    <input
      type="password"
      className="form-control"
      id="confirm_password"
      name="confirm_password"

      value={values.confirm_password}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    { errors.confirm_password && touched.confirm_password ? ( <p className="form-error">{errors.confirm_password}</p> ) : null}
  </div>



  <div className="mb-3 form-check">
   
   
  </div>
  <div>
  <button type="submit" className="btn btn-primary input-button">
    Submit
  </button>
  
  </div>
</form>
                        </div>
                    </div>
                 </div>
              </div>
        </div>
    )
};

export default Login;