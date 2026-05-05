import { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const AddBarber = ({ token }) => {
  const [image, setImage] = useState(false);

  const [name, setName] = useState("");
  const [fees, setFees] = useState("");
  const [phone, setPhone] = useState("");
  const [services, setServices] = useState([]);
  const [experience, setExperience] = useState("");
  const [about, setAbout] = useState("");

  const onSumbitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("fees", fees);
      formData.append("phone", phone);
      formData.append("services", JSON.stringify(services.split(",")));
      formData.append("experience", experience);
      formData.append("about", about);

      image && formData.append("image", image);
      const response = await axios.post(
        backendUrl + "/api/barber/add",
        formData,
        { headers: { token } },
      );
      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setFees("");
        setPhone("");
        setServices([]);
        setExperience("");
        setAbout("");
        setImage(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <form
      onSubmit={onSumbitHandler}
      className="flex flex-col w-full items-start gap-3"
    >
      <div>
        <p className="mb-2">Upload Image</p>
        <div className="flex gap-2">
          <label htmlFor="image">
            <img
              src={!image ? assets.upload_area : URL.createObjectURL(image)}
              alt=""
              className="w-20"
            />
            <input
              type="file"
              id="image"
              hidden
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>
        </div>
      </div>

      <div className="w-full">
        <p>Barber name</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
          placeholder="Type here"
          required
        />
      </div>
      <div className="w-full">
        <p>Services</p>
        <input
          type="text"
          value={services}
          onChange={(e) => setServices(e.target.value)}
          className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
          placeholder="Type here"
          required
        />
      </div>
      <div className="w-full">
        <p>Phone</p>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
          placeholder="Type here"
          required
        />
      </div>
      <div className="w-full">
        <p>About</p>
        <input
          type="text"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
          placeholder="Type here"
          required
        />
      </div>
      <div className="w-full">
        <p>Fees</p>
        <input
          type="number"
          value={fees}
          onChange={(e) => setFees(e.target.value)}
          className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
          placeholder="Type here"
          required
        />
      </div>
      <div className="w-full">
        <p>Experience</p>
        <input
          type="number"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
          placeholder="Type here"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-[#865926] text-white px-6 py-2 rounded-lg mt-4"
      >
        Add Barber
      </button>
    </form>
  );
};

export default AddBarber;
