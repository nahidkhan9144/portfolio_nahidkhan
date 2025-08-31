import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-800" style={{ padding: '1rem' }}>
      <div className="flex justify-center items-center gap-4">
        <a href="https://www.linkedin.com/in/nahid-khan-019b5122a/" target="_blank" className="text-white"><FaLinkedin size={28} />
        </a>
        <a href="https://github.com/nahidkhan9144" target="_blank" className="text-white"><FaGithub size={28} />
        </a>
        <a href="mailto:nahidkhan9144@gmail.com" target="_blank" className="text-white"><FaEnvelope size={28} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
