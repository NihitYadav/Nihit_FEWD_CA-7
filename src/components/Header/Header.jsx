import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find the book you want.</h2><br />
                <p className='header-text fs-18 fw-3'>Our goal is to make all the books free for all to read. Readers should have access to all the books they want to read.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header