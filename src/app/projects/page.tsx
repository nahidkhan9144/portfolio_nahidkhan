import React from 'react'

function page() {
  return (
    <>
      <div className='items-center justify-center mt-20'>
        
        <h2 className='text-center text-3xl font-bold'>Projects</h2>


        <div className='px-6 py-6 grid gap-8 mb-5 grid-cols-1 md:grid-cols-2 lg-col justify-items-center md:justify-evenly mt-6'>
          <div className='pl-5 pr-5 pt-1 pb-1 rounded text-left inset-0 backdrop-blur-xs'>
            <a className='text-xl font-bold text-blue-500' target="_blank" href="https://github.com/nahidkhan9144/disease-prediction-system">Disease Prediction System</a>
            <p>Developed a Python-based backend integrating machine learning for health predictions. Implemented data preprocessing and model training with pandas, NumPy, and scikit-learn, focusing on accuracy and model evaluation. Built a user-friendly interface using python Tkinter for symptom input and prediction display, emphasizing real-world applicability</p>
          </div>
          <div className='pl-5 pr-5 pt-1 pb-1 rounded text-left inset-0 backdrop-blur-xs'>
            <a className='text-xl font-bold text-blue-500' target="_blank" href="https://github.com/nahidkhan9144/laravel_crud">Library Management System</a>
            <p>Developed a comprehensive library management system using Laravel for the frontend and PHP for the backend. Implemented features such as user authentication, book search, and borrowing management, ensuring a seamless user experience.</p>
          </div>
          <div className='pl-5 pr-5 pt-1 pb-1 rounded text-left inset-0 backdrop-blur-xs'>
            <a className='text-xl font-bold text-blue-500' target="_blank" href="">AI - Local ChatBot</a>
            <p>Implemented a local AI chatbot that runs entirely on-device using Ollama (Llama-family models) and a Streamlit UI. Added a Hugging Face fallback for offline pipelines, focusing on responsive UX, clean prompts, and easy model switching. Leveraged my experience in Python and modern web stacks to ship a smooth, user-friendly interface.</p>
          </div>
          <div className='pl-5 pr-5 pt-1 pb-1 rounded text-left inset-0 backdrop-blur-xs'>
            <a className='text-xl font-bold text-blue-500' target="_blank" href="https://github.com/nahidkhan9144/mail-template-sender">QuickMail</a>
            <p>Mail Manager is a web-based application that enables users to create, manage, and send emails efficiently. The system is built with a React.js frontend and a Node.js backend, integrated with Nodemailer for email delivery. It also includes a database (SQLite/MongoDB) to store templates, mail history, and HR email records.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default page