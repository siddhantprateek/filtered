
import styles from './styles/header.module.css';
import { useContext, useState } from 'react';
import { logOut, signInWithGoogle } from '../firebase/firebase';
import { AuthContext } from '../context/auth.context';
import { useRouter } from 'next/navigation';

const Header = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const goSearch = () => {
    console.log('redirecting...')
    router.push(`/topic/${search}`); 
  }

  const handleNav = (topic) => {
    router.push(`/topic/${topic}`)
  }

  const handleHome = () => {
    router.push('/')
  }

  const handleProfile = () => {
    router.push('/profile')
  }
  return (
    <div className={styles.header}>
      <div className={styles.header_top}>
        <div className="left-header">
          <div className={styles.logo_box} onClick={() => handleHome()}>
            <h1>Filtered.</h1>
          </div>
        </div>
        <div className={styles.right_header}>
          <div className={styles.search_box}>
            <input type="text" placeholder='Search' 
            value={search} 
            onChange={handleSearch} className={styles.search_input} />
            <button onClick={goSearch}>Go</button>
          </div>
          {
            !isAuthenticated ?
              <>
                <button className={styles.login_btn} onClick={signInWithGoogle}>
                  Login
                </button>
              </> :
              <>
                <button className={styles.login_btn} onClick={logOut}>
                  Sign Out
                </button>
                <picture  onClick={() => handleProfile()}>
                  <img style={{ height: '2rem', marginLeft: "1rem", cursor: 'pointer'}} src={"https://img.icons8.com/ios/100/user-male-circle--v1.png"} alt="user-male-circle--v1"/>
                </picture>
              </>
          }

        </div>
      </div>
      <div className={styles.header_nav}>
        <ul className={styles.nav_option}>
          <li onClick={() => handleNav('news')}>News</li>
          <li onClick={() => handleNav('world')}>World</li>
          <li onClick={() => handleNav('politics')}>Politics</li>
          <li onClick={() => handleNav('Business')}>Business</li>
          <li onClick={() => handleNav('opinion')}>Opinion</li>
          <li onClick={() => handleNav('sports')}>Sports</li>
          <li onClick={() => handleNav('travel')}>Travel</li>
          <li onClick={() => handleNav('health')}>Health</li>
        </ul>
      </div>

    </div>
  )
}

export default Header;