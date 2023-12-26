// import ProtectedRoute from "../context/protected.route";
import { logOut, signInWithGoogle } from '../../firebase/firebase';

import { useContext } from 'react';
import styles from '../../styles/login.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { AuthContext } from '../../context/auth.context';

export default function Login() {
  const { isAuthenticated } = useContext(AuthContext);
  
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: values => {
      console.log('Form submitted with values:', values);
    },
  });
  return (
    <div className={styles.login_container}>


      <form onSubmit={formik.handleSubmit}>
        <div>
          <input
            type="text"
            id="email"
            name="email"
            placeholder='Enter your email'
            className={styles.login_input}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>

        <div>
          <input
            className={styles.login_input}
            type="password"
            id="password"
            name="password"
            placeholder='Enter your password.'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </div>

        <div className={styles.login_button}>
          <button type="submit">Log In</button>
        </div>
        <div className={styles.signinwithgoogle_button}>
          <picture>
            <img className={styles.gicon} src={"https://img.icons8.com/color/96/google-logo.png"} alt="google-logo"/>
          </picture>
          <div onClick={signInWithGoogle}>
            Sign In with Google
          </div>
        </div>
      </form>
      
    </div>
  );
}