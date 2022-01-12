import './index.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from'./footer';

function Projects() {
  return (
    <div className="content">
      <ProjectContent />
      <Footer />
    </div>
  );
}

var portfolio = [
  {
    name: 'FAST Research Lab Hot Belty',
    category: ['all', 'electrical', 'mechanical', 'robotics', 'ongoing'],
    bgimage: '/bgimg/hot_belty.png',
    status: 'Ongoing',
    statusColor: 'green',
    images: ['/bgimg/hot_belty.png'],
    description: 'Building a high-temperature conveyor belt 3d-printer for the Western FAST Lab.',
    objectives: ['High-temperature capabilities for printing PEKK/PEI material', 'Low cost', 'Easy to manufacture', 'Ease of tuning', 'Easy toolhead change', 'Use of CoreXY kinematics','Infinite print volume in z-direction','Open-source, easy-to-find components, and software','Maximize 3d-printed parts'],
    technicals: ['135C - 200C enclosure temperature', '500C+ hotend', 'Custom printer firmware', 'Custom bellow design'],
    results: ['BOM and part ordering','Designing gantry and enclosure'], 
    links: ['https://github.com/zhangvicto/Hot-Belty','https://www.appropedia.org/Category:FAST']
  },
  {
    name: 'Custom Conveyor Belt 3D-Printer',
    category: ['all', 'electrical', 'mechanical', 'robotics', 'ongoing'],
    bgimage: '/bgimg/printer-render.png',
    status: 'Ongoing',
    statusColor: 'green',
    images: ['/bgimg/printer-render.png','/bgimg/printer-front.png', '/bgimg/printer-iso.png', '/bgimg/printer-side.png', '/bgimg/printer-gantry.png', '/bgimg/printer-photo.jpg','/bgimg/printer-print.jpg'],
    description: 'Low cost, custom conveyor belt printer.',
    objectives: ['Low-cost conveyor belt 3d-printer','Fast speed and high print quality','Use of CoreXY kinematics','Infinite print volume in z-direction','Open-source, easy-to-find components, and software','3d-printed parts'],
    technicals: ['Designed and modeled with SOLIDWORKS','Custom 3d-printing firmware compiled with Marlin (open-source 3d-printer firmware)','Constructed using 2020 aluminum extrusions and off-the-shelf electronic components'],
    results: ['Successful construction using low-cost open-source hardware components and 3d-printed parts','Successful high-speed prints using Marlin firmware (software implementation)','CoreXY gantry movement success','Currently working at research lab to implement high-temperature conveyor belt printing',],
    links: ['https://www.youtube.com/watch?v=r81HVeg5oeo','https://github.com/zhangvicto/Belty']
  },
  {
    name: 'Doge Quadruped',
    category: ['all', 'electrical', 'mechanical', 'software', 'robotics', 'ongoing'],
    bgimage: '/bgimg/doggy-render.png',
    status: 'Ongoing',
    statusColor: 'green',
    images: ['/bgimg/doggy-render.png', '/bgimg/doggy-top.png', '/bgimg/doggy-photo.jpg'],
    description: 'Cheap 12DOF quadruped with RL gaits',
    objectives: ['Low-cost and ease of production','Lightweight design',' Open-Source software and design','3d-printed parts'],
    technicals: ['Goal: Reinforcement Learning with PyBullet'],
    results: ['Standing','Plan: Better designed parts and optimize limb torque','Total cost less than $250 excluding camera'],
    links: []
  },
  {
    name: 'Spider Quadruped',
    category: ['all', 'electrical', 'mechanical', 'software', 'robotics', 'completed'],
    bgimage: '/bgimg/spidey-render.png',
    status: 'Completed',
    statusColor: 'red',
    images: ['/bgimg/spidey-render.png', '/bgimg/spidey-photo.jpg'],
    description: 'A cheap 12DOF robot.',
    objectives: ['Low-cost and ease of production','Lightweight design',' Open-Source software and design','3d-printed parts'],
    technicals: ['Inverse kinematics software using Python','Alternative control using Arduino and C','Designed and modeled with SOLIDWORKS'],
    results: ['Successful implementation of locomotion software','Total cost of less than $150 CAD'], 
    links: ['https://github.com/JasonJZLiu/Spidey-Quadruped','https://www.youtube.com/watch?v=nW5I9bcBE7k']
  },
  {
    name: 'Leakio',
    category: ['all', 'electrical', 'software', 'hackathon', 'completed'],
    bgimage: '/bgimg/leakio.png',
    status: 'Completed',
    statusColor: 'red',
    images: ['/bgimg/leakio.png', '/bgimg/leakio-pcb.jpg', '/bgimg/leakio-schematic.jpg', '/bgimg/leakio-model.jpg'],
    description: 'Smart leak detection for homes.',
    objectives: ['Reduce water damages in homes','All in one package solution'],
    technicals: ['Raspberry Pi Python script service','PCB Designed with Eagle PCB (ESP32 MCU)', 'PHP based live webapp demo', 'Pytorch ML - generated test set using Python, ML untested', 'Google SQL Server', 'Figma UI Prototype' ],
    results: ['First place at Hackthe6ix 2021', 'More details in the links below'], 
    links: ['https://leakio.me/','https://www.figma.com/proto/6UNThP1C1Y6ujhllF1Z1cS/Leakio?node-id=206%3A281', 'https://devpost.com/software/leakio','https://www.youtube.com/watch?v=TqhrWrrupmE&t=1s']
  },
  {
    name: 'Western UES Website',
    category: ['all', 'software', 'frontend', 'updating'],
    bgimage: '/bgimg/ues.png',
    status: 'Updating',
    statusColor: 'orange',
    images: ['/bgimg/ues.png', '/bgimg/ues-1.png', '/bgimg/ues-2.png', '/bgimg/ues-3.png'],
    description: 'Organization Website for Western Undergraduate Engineering Society',
    objectives: ['Improve website usability','Revamping old website'],
    technicals: ['Pure CSS+HTML+JS'],
    results: ['Good feedback from executives'], 
    links: ['https://www.westernues.com/', 'https://github.com/zhangvicto/Western-UES-Website']
  },
  {
    name: 'High Torque Cycloidal Robotic Actuator',
    category: ['all', 'electrical', 'mechanical', 'software', 'robotics', 'ongoing'],
    bgimage: '/bgimg/cycloidal_drive_render.png',
    status: 'Ongoing',
    statusColor: 'green',
    images: ['/bgimg/cycloidal_drive_render.png', '/bgimg/drive-1.jpg', '/bgimg/drive-2.jpg'],
    description: 'High torque, low weight robotic actuator using cycloidal disks for gear reduction.',
    objectives: ['High reduction ratio', '3d-printed parts for low cost', 'Backdrivable', 'High torque to price ratio', 'Suitable for robotic arm use', 'BLDC motor compatible'],
    technicals: ['Designed and modeled with SOLIDWORKS', 'Rendered with SOLIDWORKS Visualize', 'Cycloidal disk curves drawn using parametric curves','1:28 reduction ratio through dual stage disks', 'Theoretical torque of 12Nm for a cost of less than $60', 'Torque to price ratio of 0.2 Nm/dollar', '5010 BLDC motor compatible'],
    results: ['Prototype created and tested','More testing to be done for torque and usability',' New version being developed to use less metal parts and higher reduction ratio'], 
    links: []
  },
  {
    name: 'Budget BLDC Motor Control',
    category: ['all', 'electrical', 'robotics', 'completed'],
    bgimage: '/bgimg/motor1.jpg',
    status: 'Completed',
    statusColor: 'red',
    images: ['/bgimg/intro.jfif', '/bgimg/phase.jfif', '/bgimg/spi-header.jfif', '/bgimg/dupont.jfif', '/bgimg/', '/bgimg/'],
    description: 'Cheap BLDC motor and control for under $20.',
    objectives: ['Low Cost BLDC','Torque Controlled BLDC', 'Minimum modification and technical skills required for implementation'],
    technicals: ['SimpleFOC Library torque force control','100PPR','24 pole pairs BLDC motor'],
    results: ['Total price of less than $20 CAD','Fully torque controlled with encoder'], 
    links: ['https://github.com/zhangvicto/CMC-24H-SimpleFOC-BCG']
  },  
  {
    name: 'Linear Induction Motor Prototype',
    category: ['all', 'electrical', 'mechanical', 'ongoing'],
    bgimage: '/bgimg/lim.png',
    status: 'Ongoing',
    statusColor: 'green',
    images: ['/bgimg/lim.png'],
    description: 'Western Hyperloop LIM Prototype and simulation.',
    objectives: [''],
    technicals: ['Planned: Litz wire reducing eddy currents','4 pole pairs','double sided LIM', 'Battery: 48V', 'Max speed 200km/hr'],
    results: ['Planned: to be tested on fly wheel'], 
    links: []
  },
  {
    name: 'Green Light Mentorship Website',
    category: ['all', 'software', 'frontend', 'updating'],
    bgimage: '/bgimg/greenlight.png',
    status: 'Updating',
    statusColor: 'Orange',
    images: ['/bgimg/greenlight.png', '/bgimg/greenlight-1.png', '/bgimg/greenlight-2.png'],
    description: 'Organization website for Green Light Mentorship.',
    objectives: ['To create a website for Green Light Mentorship', 'Improve Green Light brand image'],
    technicals: ['Pure CSS+HTML+JS'],
    results: ['Currently under renovation, a React-based site is being created for better UX and ease of update'], 
    links: ['https://greenlightmentorship.com/']
  },
  {
    name: 'SpeechQ',
    category: ['all', 'software', 'hackathon', 'completed'],
    bgimage: '/bgimg/speechq.png',
    status: 'Completed',
    statusColor: 'red',
    images: ['/bgimg/speechq.png', '/bgimg/speechq-web.png'],
    description: 'Word prompt web app to enhance your presentation.',
    objectives: ['Improve eye contact in presentations','Ease of use and installation'],
    technicals: ['Linked lists to process and display words'],
    results: ['Webapp capable of prompt words in a speech','Chrome extension', 'Need to improve the code to make it run faster, in hindsight, I should have used the built it using the default javascript array since it is a linked list'], 
    links: ['https://speechq.xyz/','https://devpost.com/software/speechq']
  },
  {
    name: 'SmartCaliper',
    category: ['all', 'software', 'mechanical', 'electrical', 'software', 'hackathon', 'completed'],
    bgimage: '/bgimg/smartcaliper.png',
    status: 'Completed',
    statusColor: 'red',
    images: ['/bgimg/smartcaliper.png'],
    description: 'Digitized caliper upgrade package for hobbyists.',
    objectives: [],
    technicals: [],
    results: ['"Most Novel Hack at Hackthe6ix 2020"'], 
    links: ['https://devpost.com/software/smartcaliper']
  },
];

function ProjectContent() {

  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(portfolio);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = portfolio.map(p => ({
      ...p,
      filtered: p.category.includes(filter)
    }));
    setProjects(filtered);
  }, [filter]);
  return (
    <>
      <div className="project-labels">
        Filter:
        <button active={filter === 'all'} onClick={() => setFilter('all')}>All</button>
        <button active={filter === 'robotics'} onClick={() => setFilter('robotics')}>Robotics</button>
        <button active={filter === 'frontend'} onClick={() => setFilter('frontend')}>Frontend</button>
        <button active={filter === 'mechanical'} onClick={() => setFilter('mechanical')}>Mechanical</button>
        <button active={filter === 'electrical'} onClick={() => setFilter('electrical')}>Electrical</button>
        <button active={filter === 'software'} onClick={() => setFilter('software')}>Software</button>
        <button active={filter === 'hackathon'} onClick={() => setFilter('hackathon')}>Hackathon</button>
        <button active={filter === 'ongoing'} onClick={() => setFilter('ongoing')}>Ongoing</button>
        <button active={filter === 'completed'} onClick={() => setFilter('completed')}>Completed</button>
        <button active={filter === 'updating'} onClick={() => setFilter('updating')}>Updating</button>
      </div>
      <div className="portfolio-wrapper">
        <div className="portfolio-container">
          {projects.map(item => item.filtered === true ? (
            <>
              <Link exact style={{ textDecoration: 'none' }}
                to={{
                  pathname: 'projectPage',
                  itemName: item.name,
                  itemImages: item.images,
                  itemDescription: item.description,
                  itemObjectives: item.objectives,
                  itemTechnicals: item.technicals,
                  itemResults: item.results,
                  itemLinks: item.links
                }}>
                <div className="portfolio-item"
                  style={{
                    backgroundImage: `url('${process.env.PUBLIC_URL}${item.bgimage}')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }
                  } key={item.name}>
                  <div className="portfolio-item-overlay">
                    <div className="portfolio-item-title">{item.name}</div>
                    <div className="portfolio-item-status"
                      style={{
                        backgroundColor: item.statusColor
                      }
                      } >{item.status}</div>
                  </div>
                </div>
              </Link>
            </>
          ) : '')}
        </div>
      </div>
    </>
  );
}

export default Projects;