import React from 'react'
function page() {
  return (
    <>
      <div className='items-center justify-center mt-20'>
        <h2 className='text-center text-3xl font-bold'>About Page</h2>
        <div className='text-center mt-2'>
          <p className='p-2'>Web and Mobile Developer with 2.4 years of experience, skilled in PHP, Laravel, React.js, AngularJS, HTML5, CSS3, and JavaScript. Experienced in building responsive applications, integrating RESTful APIs, and delivering clean, maintainable code. Adaptable, proactive, and committed to creating scalable and user-focused solutions</p>
        </div>
        <div className='inset-0 backdrop-blur-sm mr-4 ml-4'>
          <hr className='mt-3' />
          <div className='flex justify-center gap-20 mt-3'>
            <div className='text-left'>
              <p className='text-2xl text-blue-500 font-bold'>Experince</p>
              <p className='text-xl font-bold'>Tickle Right Edv.</p>
              <p>Junior Software Developer</p>
              <p>Mumbai, India</p>
              <p>2023 - present</p>
            </div>
            <div className='text-left'>
              <p className='text-2xl text-blue-500 font-bold'>Education</p>
              <p className='text-xl font-bold'>Bachelor's Degree</p>
              <p>Bachelor of Science<br/> <small>(Information Technology)</small></p>
              <p><small>(7.67 CGPA)</small></p>
              <p>University Of Mumbai</p>
              <p>2020 - 2023</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default page