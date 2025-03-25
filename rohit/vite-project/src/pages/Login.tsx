import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //add validation/auth 
    navigate('/success');
  };

  return (
    <div className="min-h-screen px-6 py-10 bg-gray-50 flex flex-col items-center">
      {/* Image at top */}
      <img
        src="/vite.svg"
        alt="Login visual"
        className="w-32 h-32 object-contain mb-6"
      />

      <h2 className="text-2xl font-bold mb-2 self-start">Signin to your account</h2>
      <p className="text-gray-500 mb-6 self-start">
        Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
      </p>

      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <div>
          <label className="text-sm text-purple-600">Email Address</label>
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="text-sm text-purple-600">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white font-semibold py-3 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
