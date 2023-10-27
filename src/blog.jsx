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
          <p>On the other side of fear hides ultimate bliss. - Yes Theory</p>
          <p>Over the past two weeks, I have taken on the challenge of doing a “Rejection Olympics” as part of the Hustle and Grit course at Ivey Business School. I was faced with four challenges:</p>
          <li>Try to buy something that is not for sale</li>
          <li>Ask someone for a job</li>
          <li>Confess to someone that you lied to</li>
          <li>Try to make an enemy a friend</li>
          <p>From these series of challenges and my reflection came the <strong>following learnings:</strong> </p>

          <strong>
            <p>1. Always ask for more</p>
          </strong>
          <p>From when I was young, my parents and grandparents always scolded me for bothering strangers, or even just asking for anything from other people. They also taught us to give back to others who have helped us. Although there is nothing wrong with these notions, it made me scared to ask for more. In high school, I did not engage with people older than me or ask for advice because I was scared because I had nothing to offer back. However, as I networked with more and more people and when people started to ask me for favours, I realized the fact that asking for more can never hurt. As someone who is willing to help others, I believe that there are other people who feel the same way.
            <p>An alternative version of this lesson is “The worst they can do is say no.” I think this is the main takeaway from this challenge and reflects what we have talked about in class regarding resilience and grit. I remember Alan Gertner said in his talk that his investor Bob had asked for full company control, which is much more than what Alan was hoping for. However, when Alan said no, Bob still gave him the money. In this case, Bob was not afraid to get rejected and still got what he wanted out of the deal (in the end a 10x on their investment). He was not afraid to ask and there was nothing for him to lose. </p>
            <p>Similarly, Miki Agrawal asked a famous person in the restaurant business if she could shadow them and they said yes. The common theme in these stories is that they were not afraid to ask, or too shy to ask, and they asked for something “ridiculous.” Maybe, Bob was in a position to ask so he did, or maybe Miki is just someone who is really outgoing and extroverted. But I think our situations should not be excuses to not ask.</p>
            <p>From these challenges, I have learned to be more resilient to being rejected and not be afraid of asking for more. On our way to Edgewalk, Ben, Tina, Michael, and I were talking about asking for referrals. Michael mentioned that he would just cold message people on LinkedIn and even directly ask for referrals sometimes. Tina and I were quite surprised by this, but this is another example to show that asking for more does not hurt.
            </p></p>

          <strong>
            <p>2. Just say yes</p>
          </strong>
          <p>Another one of my learning comes from the fact that I have not always been open to new experiences until more recently. It is a newfound perspective that I have and one that I have been adopting lately. In class, we talked about happiness, and we were asked to draw a curve of our life, with happiness on the y-axis. For me, my big dip was during my first year. There were many reasons but the biggest one was my tendency to say “no.”
            <p>For one thing, I think I was getting too comfortable in high school, and having hung out with the same people since elementary school, it is hard not to get in a fixed mindset. University was a huge transition and one that I was not ready for (even though I thought I was). More recently, as I turned 22, I realized how much older I am getting. I still felt that I was in my teens but I had already entered the third decade of my life. I was terrified of what was going to happen if I kept saying no, but also I felt I did not have enough experience to make decisions on what I wanted to do. This was certainly exacerbated by the “Your Life in Months” image, (I had filled out my sheet month by month). I had not been “saying no” because I was afraid of all of those experiences, but rather I just found excuses in my other commitments (one of my triggers is over-commitment). Having that change of heart has really made a difference, as I now look for new experiences/opportunities, rather than having opportunities look for me (which does not happen very often!).</p></p>

          <p>All in all, I have had a blast completing these challenges and I really appreciate my professor, Eric Janssen, for giving us these challenges (and Stu for selecting them).
            These challenges have stressed me out more than any engineering assignment I have had before, which just goes to show how much I had gained from them.
            To reiterate the quote at the beginning of this blog, bliss comes after the mountain of obstacle we need to climb and face the fear we dread. Getting rejected is tough, but by facing our fears of getting rejected, we can come out the other side, happier and more fulfilled.
          </p>

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
      <div style={contentStyle}>

        {blogs.map((blog) =>
          <div style={blogPostStyle}>
            {/* Date */}
            <div style={dateStyle}>{formatDate(blog.date)}</div>
            <div>{blog.text.section_1}</div>
          </div>)}
      </div>
    </div>
  )
}

function formatDate(string) {
  var options = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'EST' };
  return new Date(string).toLocaleDateString('en-ca', options);
}

const wrapperStyle = {
  height: '100%'
}

const contentStyle = {
  overflowY: 'scroll',
  height: '75%',
  padding: '10px'
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

// const textSectionStyleMain = {

// }

// const textSectionStyleAlt = {

// }

export default Blogs;