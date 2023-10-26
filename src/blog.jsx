import './index.css';
import Footer from './footer'
import React, { useEffect, useState } from 'react';

function Blogs() {
  return (
    <div className="content">
      <BlogContent />
      <Footer />
    </div>
  )
}

const blogs_data = [
  {
    date: "2023-10-25",
    text: {
      section_1:
        <div>
          <p>Habits are the compound interest of self-improvement. - James Clear</p>
          <p>Over the past two weeks, I have taken on the challenge of doing a “Rejection Olympics” as part of the Hustle and Grit course at Ivey Business School. I was faced with four challenges:</p>
          <li>Try to buy something that is not for sale</li>
          <li>Ask someone for a job</li>
          <li>Confess to someone that you lied to</li>
          <li>Try to make an enemy a friend</li>
          <p>From these series of challenges and my reflection came the <strong>following learnings:</strong> </p>
          <strong>
            <p>Always ask for more</p>
          </strong>
          <p>From when I was young, my parents and grandparents always scolded me for bothering strangers, or even just asking for anything from other people. They also taught us to to give back to others when you take.
            Although there is nothing wrong with these notions, it made me scared to ask for more. In high school, I did not engage with people older than me or ask for advice because I was scared because I had nothing to offer back.
            However, as I networked with more and more people and when people started to ask me for favours, I realized the fact that asking for more can never hurt. As someone who is willing to help others, I believe that there
            are other people who felt the same way.
            Just like Alan from Tokyo Smoke had said, do not be afraid to ask for more because you have nothing to lose.
          </p>

          <strong>
            <p></p>
          </strong>

          <strong>
            <p></p>
          </strong>

          <p>Other Challenges I have done</p>
          <p>When I looked at the list of challenges, there was a first scared thought of what </p>
        </div>,
      section_2: "Thank you for reading."
    },
    images: {
      section_1: "./blogs/images/",
      section_2: "./blogs/images/"
    }
  },
  {
    date: "2023-10-24",
    text: {
      section_1: "Testing",
      section_2: "Testing",
    },
    images: {
      section_1: "./blogs/images/",
      section_2: "./blogs/images/"
    }
  }
]

function BlogContent() {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(blogs_data)
  }, []);

  return (
    <div style={wrapperStyle}>
      <div style={titleStyle}>Blog</div>
      {blogs.map((blog) =>
        <div style={blogPostStyle}>
          {/* Date */}
          <div style={dateStyle}>{formatDate(blog.date)}</div>
          <div>{blog.text.section_1}</div>
        </div>)}
    </div>
  )
}

function formatDate(string) {
  var options = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'EST' };
  return new Date(string).toLocaleDateString('en-ca', options);
}

const wrapperStyle = {
  overflowY: 'scroll'
}

const titleStyle = {
  fontSize: 30,
  fontWeight: 700,
  marginBottom: "20px"
}

const dateStyle = {
  fontSize: 20,
  fontWeight: 700,
}

const blogPostStyle = {
  borderStyle: "none none dotted none",
  borderBottomWidth: "2px",
  borderBottomColor: "gray",
  marginBottom: "20px"
}

const textSectionStyleMain = {

}

const textSectionStyleAlt = {

}

export default Blogs;