import React from 'react'
// import Image from 'next/image'
function page() {
  return (
    <>
      <div className='items-center justify-center mt-20'>
        <h2 className='text-center text-3xl font-bold'>About Me</h2>
        <div className='text-center mt-2'>
          <p className='p-2'>Web and Mobile Developer with 2.4 years of experience, skilled in PHP, Laravel, React.js, AngularJS, HTML5, CSS3, and JavaScript. Experienced in building responsive applications, integrating RESTful APIs, and delivering clean, maintainable code. Adaptable, proactive, and committed to creating scalable and user-focused solutions</p>
        </div>
        <div className='inset-0 backdrop-blur-xs mr-4 ml-4'>
          <hr className='mt-3' />
          <div className='flex justify-center gap-20 mt-3'>
            <div className='text-left'>
              <p className='text-2xl text-blue-500 font-bold'>Experience</p>
              <p className='text-xl font-bold'>Tickle Right Eduventures.</p>
              <p>Junior Software Developer</p>
              <p>Mumbai, India</p>
              <p>2023 - present</p>
            </div>
            <div className='text-left'>
              <p className='text-2xl text-blue-500 font-bold'>Education</p>
              <p className='text-xl font-bold'>Bachelor&apos;s Degree</p>
              <p>Bachelor of Science<br /> <small>(Information Technology)</small></p>
              <p><small>(7.67 CGPA)</small></p>
              <p>University Of Mumbai</p>
              <p>2020 - 2023</p>
            </div>
          </div>

        </div>
        <hr className='mt-3' />
        <p className='text-center text-2xl font-bold mb-6'>Projects</p>
        <div className='grid gap-4 mb-5 grid-cols-1 md:grid-cols-2 lg-col justify-items-center md:justify-evenly'>
          <div className='pl-5 pr-5 pt-1 pb-1 rounded text-left inset-0 backdrop-blur-xs'>
            <p className='text-xl font-bold text-blue-500'>Disease Prediction System</p>
            {/* <Image src='https://picsum.photos/800/400?random=1' height={150} width={150} alt='Disease Prediction System' style={{ objectFit: "cover", borderRadius: "8px" }} /> */}
            <p>Developed a Python-based backend integrating machine learning for health predictions. Implemented data preprocessing and model training with pandas, NumPy, and scikit-learn, focusing on accuracy and model evaluation. Built a user-friendly interface using python Tkinter for symptom input and prediction display, emphasizing real-world applicability</p>
          </div>
          <div className='pl-5 pr-5 pt-1 pb-1 rounded text-left inset-0 backdrop-blur-xs'>
            <p className='text-xl font-bold text-blue-500'>Library Management System</p>
            {/* <Image src='https://picsum.photos/800/400?random=2' height={150} width={150} alt='Library Management System' style={{ objectFit: "cover", borderRadius: "8px" }}/> */}
            <p>Developed a comprehensive library management system using Laravel for the frontend and PHP for the backend. Implemented features such as user authentication, book search, and borrowing management, ensuring a seamless user experience.</p>
          </div>
          <div className='pl-5 pr-5 pt-1 pb-1 rounded text-left inset-0 backdrop-blur-xs'>
            <p className='text-xl font-bold text-blue-500'>AI - Local ChatBot</p>
              {/* <Image src='https://picsum.photos/800/400?random=3' height={150} width={150} alt='AI - Local ChatBot' style={{ objectFit: "cover", borderRadius: "8px" }}/> */}
            <p>Implemented a local AI chatbot that runs entirely on-device using Ollama (Llama-family models) and a Streamlit UI. Added a Hugging Face fallback for offline pipelines, focusing on responsive UX, clean prompts, and easy model switching. Leveraged my experience in Python and modern web stacks to ship a smooth, user-friendly interface.</p>
          </div>
          <div className='pl-5 pr-5 pt-1 pb-1 rounded text-left inset-0 backdrop-blur-xs'>
            <p className='text-xl font-bold text-blue-500'>QuickMail</p>
              {/* <Image src='https://picsum.photos/800/400?random=3' height={150} width={150} alt='AI - Local ChatBot' style={{ objectFit: "cover", borderRadius: "8px" }}/> */}
            <p>Mail Manager is a web-based application that enables users to create, manage, and send emails efficiently. The system is built with a React.js frontend and a Node.js backend, integrated with Nodemailer for email delivery. It also includes a database (SQLite/MongoDB) to store templates, mail history, and HR email records.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default page