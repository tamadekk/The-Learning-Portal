import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/Home/Home';
import Header from './components/Header/Header';

import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import JoinUs from './components/JoinUs/JoinUs';
import Registration from './components/RegistrationForm/Registration';
import AboutUs from './components/AboutUs/AboutUs';
import Blog from './components/Blog/Blog';

function App() {
	return (
		<>
			<Header />
			<div className='flex flex-col min-h-dvh'>
				<Routes>
					<Route path='*' element={<Navigate to='/' />} />
					<Route path='/' element={<Home />} />
					<Route path='/about-us' element={<AboutUs />} />
					<Route path='/blog' element={<Blog />} />
					<Route path='/join-us' element={<JoinUs />} />
					<Route path='/login' element={<Login />} />
					<Route path='/registration' element={<Registration />} />
				</Routes>
			</div>
			<Footer />
		</>
	);
}

export default App;
