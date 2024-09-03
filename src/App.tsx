import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/Home/Home';
import Header from './components/Header/Header';

import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import JoinUs from './components/JoinUs/JoinUs';
import Registration from './components/RegistrationForm/Registration';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='*' element={<Navigate to='/' />} />
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/join-us' element={<JoinUs />} />
				<Route path='/registration' element={<Registration />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
