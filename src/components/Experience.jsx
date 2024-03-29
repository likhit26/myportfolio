import React from 'react'

import html from "../assets/html.png";
import css from "../assets/css.png";
import JavaScript from "../assets/JavaScript.png";
import react from "../assets/react.png";
import download from "../assets/images.png";
import github from "../assets/github.png";
import c from "../assets/c++.png";
import ex from "../assets/express.png";


import node from "../assets/node.png";


const Experience = () => {

     const techs = [
      {
        id: 1,
        src: html,
        title: 'HTML',
        style: 'shadow-orange-500'
      },
      {
        id: 2,
        src: css,
        title: 'CSS',
        style: 'shadow-blue-500'
      },
      {
        id: 3,
        src: JavaScript,
        title: 'JavaScript',
        style: 'shadow-yellow-600'
      },
      {
        id: 4,
        src: react,
        title: 'React',
        style: 'shadow-blue-600'
      },
      {
        id: 5,
        src: node,
        title: 'Node',
        style: 'shadow-sky-400'
      },
      {
        id: 6,
        src: download,
        title: 'MongoDB',
        style: 'shadow-green-500'
      },
      {
        id: 7,
        src: ex,
        title: 'Express Js',
        style: 'shadow-green-600'
      },
      {
        id: 8,
        src: c,
        title: 'C++',
        style: 'shadow-yellow-400'
      },
      {
        id: 9,
        src: github,
        title: 'github',
        style: 'shadow-orange-500'
      }
     ]

  return (
    <div name='experience' className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
      
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6 ">
            Theses are the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

        {
          techs.map(({id, src, title, style}) => (
          <div Key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
            <img src={src} alt="" className="w-20 h-20 mx-auto"/>
            <p className="mt-4"> {title} </p>
          </div>
          ))
        }
        </div>
      </div>

    </div>
  );
};

export default Experience;
