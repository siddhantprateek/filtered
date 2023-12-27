import React, { useContext, useEffect } from 'react'
import { AuthContext } from '@/context/auth.context';
import styles from '@/styles/profile.module.css';
import { getAllFavorite } from '@/firebase/storage/storage';
import SearchedCard from '@/components/searched_card.components';
import { useRouter } from 'next/router';

export const getStaticProps = async () => {
  const data = await getAllFavorite()

  return {
    props: { data: data }
  }
}

const Profile = ({ data }) => {
  const { user, isAuthenticated } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);
  return (
    <div className={styles.profile}>
      <div className={styles.profile_sidebar}>
      {
        user ?
          <div>
            {
              user.photoURL ?
                <picture>
                  <img style={{ height: '10rem', width: '10rem', borderRadius: '10px' }} src={user?.photoURL} alt="" />
                </picture> :
                <picture>
                  <img src={'https://openseauserdata.com/files/5407ff733bf0064c2bb4392db5573db5.png'} alt="" />
                </picture>
            }
            <h2>{user?.displayName}</h2>
          </div> :
          <> 
          </>
      }
      </div>
      <div className={styles.favorites}>
        { isAuthenticated && data && 
          data.map((content) => (
            <SearchedCard key={content.id} id={content.id} {...content.article} />
          ))
        }
      </div>

    </div>
  )
}

export default Profile