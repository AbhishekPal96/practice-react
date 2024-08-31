const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl m-2 p-2">Contact us</h1>
      <form>
        <input
          type="text"
          className="border border-black m-2 p-2"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black m-2 p-2"
          placeholder="message"
        />
        <button className="m-2 p-2 bg-black text-white rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
