import React from 'react'
import Image from 'next/image'
function page() {
  return (
    <div className='flex justify-between'>
      <div className='pl-5 flex justify-center items-center h-screen'>
       <Image
          src="/images/profile.jpg"
          alt="Nahid's Image"
          width={500}
          height={500}
       />
      </div>

      <div className='flex flex-wrap justify-center'>
        <div className='row mt-4 p-3 w-full border-b border-blue-100 shadow-xl rounded-tl-sm hover:bg-gary-500'>
          <h2 className='text-center'>about page</h2>
        </div>
        <div className='pl-52 pr-52 '>
          <div className='row mt-4 p-3 border-b border-blue-100 shadow-xl rounded-tl-sm hover:bg-gray-500'>
            I’m a web and mobile developer with 2.4 years of experience, proficient in PHP, Laravel, React.js, AngularJS, HTML5, CSS3, and JavaScript, with strong skills in building responsive applications, integrating RESTful APIs, and adapting quickly to new tools and technologies.
          </div>
          <div className="row mt-4 p-3 border-b border-red-100 shadow-xl rounded-tl-sm hover:bg-gray-500">
            <ul className="ml-6 space-y-4">
              <li>• Web and Mobile Developer with 2.4 years of hands-on industry experience.</li>
              <li>• Skilled in creating responsive, user-centric web and mobile applications.</li>
              <li>• Proficient in modern frameworks and technologies including PHP, Laravel, React.js, and AngularJS.</li>
              <li>• Strong front-end development expertise using HTML5, CSS3, and JavaScript.</li>
              <li>• Experienced in integrating RESTful APIs and third-party services to enhance functionality.</li>
              <li>• Committed to writing clean, maintainable code and following best development practices.</li>
              <li>• Fast learner with a proactive attitude, adaptable to new tools, frameworks, and team dynamics.</li>
              <li>• Dedicated to contributing to innovative, scalable, and impactful software solutions.</li>
            </ul>
          </div>


        </div>
      </div>
    </div>
  )
}

export default page