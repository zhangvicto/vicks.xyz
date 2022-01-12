import './index.css';
//import React, { Component } from 'react';
import pdf from './resume.pdf'
import Footer from './footer'

function Resume() {
  return (
    <div className="content">
      <ResumeContent />
      <Footer />
    </div>
  )
}

const ResumeContent = () => {
  return (
    //<embed src={pdf} className="pdf-embed"
    //  type="application/pdf"></embed>
    "To be updated... 😅"
  )
}

export default Resume;