import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages copy/portal/home/page'
import LandingPage from "../pages copy/public/LandingPage"
import LoginForm from '../components/login/LoginForm'
import SignUpForm from '../pages copy/auth/Signup'
import FavoriteListPage from '../pages copy/portal/favourite/page'
import SearchList from "../pages copy/portal/searchList/SearchList"


function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path="/home" index element={<HomePage />} />
                <Route path='/login' element={<LoginForm />} />
                <Route path='/search' element={<SearchList />} />
                <Route path='/signup' element={<SignUpForm />} />
                <Route path='/favourite' element={<FavoriteListPage />} />

            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter