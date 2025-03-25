import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-end items-center px-6 pb-16 bg-gray-50">
      <h1 className="text-2xl font-semibold mb-2">Welcome to PopX</h1>
      <p className="text-gray-500 text-center mb-8">
        Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
      </p>
      <button
        onClick={() => navigate('/register')}
        className="bg-purple-600 text-white font-semibold w-full py-3 rounded mb-3"
      >
        Create Account
      </button>
      <button
        onClick={() => navigate('/login')}
        className="bg-purple-200 text-black font-semibold w-full py-3 rounded"
      >
        Already Registered? Login
      </button>
    </div>
  );
};

export default Welcome;
