const Contact = () => {
  return (
    <div className="p-10 max-w-2xl mx-auto">
      <h1 className="text-3xl font-semibold text-center mb-2">Contact Us</h1>
      <p className="text-slate-500 text-center text-sm mb-10">
        {" "}
        We'd love to hear from you. Reach out to us anytime.
      </p>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4 border p-4 rounded-lg">
          <span className="text-2xl">📍</span>
          <div>
            <h3 className="font-medium">Address</h3>
            <p className="text-slate-500 text-sm">Colombo, Sri Lanka</p>
          </div>
        </div>
        <div className="flex items-center gap-4 border p-4 rounded-lg">
          <span className="text-2xl">📞</span>
          <div>
            <h3 className="font-medium">Phone</h3>
            <p className="text-slate-500 text-sm">0778945679</p>
          </div>
        </div>
        <div className="flex items-center gap-4 border p-4 rounded-lg">
          <span className="text-2xl">📧</span>
          <div>
            <h3 className="font-medium">Email</h3>
            <p className="text-slate-500 text-sm">snapcut@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
