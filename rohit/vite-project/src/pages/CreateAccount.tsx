import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-6 py-10 bg-white flex flex-col items-center">
      {/* Top Image */}
      <img
        src="/vite.svg"
        alt="Create Account"
        className="w-32 h-32 object-contain"
      />

      <h2 className="text-2xl font-bold mb-6 self-start">Create your account</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate('/success');
        }}
        className="w-full space-y-4"
      >
        {['Full Name', 'Phone number', 'Email address', 'Password', 'Company name'].map((label, idx) => (
          <div key={idx}>
            <label className="text-sm font-medium text-purple-600">{label}*</label>
            <input
              type={label.toLowerCase().includes('password') ? 'password' : 'text'}
              className="w-full mt-1 px-3 py-2 border rounded outline-none"
              placeholder={`Enter ${label.toLowerCase()}`}
              required
            />
          </div>
        ))}

        <div>
          <label className="text-sm font-medium text-purple-600">Are you an Agency?*</label>
          <div className="flex space-x-6 mt-2">
            <label className="flex items-center space-x-2">
              <input type="radio" name="agency" value="yes" className="text-purple-600" required />
              <span>Yes</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="agency" value="no" className="text-purple-600" />
              <span>No</span>
            </label>
          </div>
        </div>

        <button type="submit" className="w-full bg-purple-600 text-white font-semibold py-3 rounded">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;
