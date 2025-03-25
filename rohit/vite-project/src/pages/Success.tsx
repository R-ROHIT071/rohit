const Success = () => {
    return (
      <div className="min-h-screen bg-white px-6 py-10">
        <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
        <div className="bg-gray-50 p-4 rounded shadow-sm flex items-start space-x-4">
          <img
            src="https://live.staticflickr.com/7160/6410037157_8a32776d93_b.jpg"
            alt="profile"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h3 className="font-semibold">Marry Doe</h3>
            <p className="text-sm text-gray-500 mb-2">abc@gmail.com</p>
            <p className="text-sm text-gray-600">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Success;
  