"use client";
import React, { useState } from 'react';
import Register from "../components/Register/Register";
import Header from "../components/Header";

const Home= () => {

  return (
    <>
      <main className="">
        <Header/>
       <Register/>
      </main>
      </>
  );
};

export default Home;
