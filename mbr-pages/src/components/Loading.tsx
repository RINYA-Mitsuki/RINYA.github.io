import React, { useState, useEffect } from 'react';

export default function Loading() {
  return (
    <>
      <div className="w-screen h-screen top-left-0 bg-mygreen-bk z-50 fixed flex justify-center items-center">
        <img className="h-16" src="/logo.svg"/>
      </div>
    </>
  )
}