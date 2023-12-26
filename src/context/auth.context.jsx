'use client';
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase/firebase';


const AuthContext = React.createContext({
  user: null,
  isAuthenticated: false,
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
      setAuthenticated(!!firebaseUser);
    })

    return () => {
      unsubscribe()
    }
  })
  
  return (
    <AuthContext.Provider value={{ user, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

export {
  AuthContext,
  AuthProvider
};