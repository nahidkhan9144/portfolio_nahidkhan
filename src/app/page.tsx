import React from 'react'

function page() {
  return (
    <>
      <div className='flex flex-col gap-2'>

        <h1 className='pt-4 text-center'><b>Hey! This is Nahid Khan</b></h1>
        <p className='text-center'>I am a Full Stack Web & Mobile Developer</p>
        <p className='text-center'>I have experience in PHP, Laravel, AngularJS, React.js, Flutter, Dart, JavaScript, Bootstrap, Tailwind CSS, jQuery, AJAX, and API Integration.</p>
      </div>
      <main className='flex flex-col items-center justify-center min-h-screen'>
        <h2 className='mb-5'><b>Skills</b></h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          <h1 className='p-4 rounded-xl border border-sky-200'>PHP</h1>
          <h1 className='p-4 rounded-xl border border-sky-200'>Laravel</h1>
          <h1 className='p-4 rounded-xl border border-sky-200'>AngularJS</h1>
          <h1 className='p-4 rounded-xl border border-sky-200'>React.js</h1>
          <h1 className='p-4 rounded-xl border border-sky-200'>Flutter</h1>
          <h1 className='p-4 rounded-xl border border-sky-200'>Dart</h1>
          <h1 className='p-4 rounded-xl border border-sky-200'>JavaScript</h1>
          <h1 className='p-4 rounded-xl border border-sky-200'>HTML</h1>
          <h1 className='p-4 rounded-xl border border-sky-200'>CSS</h1>
          <h1 className='p-4 rounded-xl border border-sky-200'>Bootstrap</h1>
          <h1 className='p-4 rounded-xl border border-sky-200'>Tailwind CSS</h1>
          <h1 className='p-4 rounded-xl border border-sky-200'>jQuery</h1>
          <h1 className='p-4 rounded-xl border border-sky-200'>AJAX</h1>
          <h1 className='p-4 rounded-xl border border-sky-200'>API Integration</h1>
        </div>

      </main>
    </>
  );
}

export default page