import React, {useEffect, useState} from 'react';

// Component를 포함할 객체이기 때문에 이름을 이렇게 지음.
// 아래 데이터를 넣는 이유 Consumer 파트에서 IDE가 쉽게 찾게 만들기 위해.
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {
  },
  onLogin: (email, password) => {
  },
});


export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = () => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  }

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  }

  return (
    <AuthContext.Provider value={{
      isLoggedIn: isLoggedIn,
      onLogout: logoutHandler,
      onLogin: loginHandler,

    }}>
      {props.children}
    </AuthContext.Provider>);
};

export default AuthContext;
