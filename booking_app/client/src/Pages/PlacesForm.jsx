import { useState } from "react";
import axios from "axios";
import AccountNavigation from "../AccountNavigation";
import Perks from "../Perks";
import { Navigate } from "react-router-dom";

export default function PlacesForm() {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [photolink, setPhotoLink] = useState("");
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);
  const [redirect, setRedirect] = useState(false);

  async function addPhoto(e) {
    e.preventDefault();
    const { data: filename } = await axios.post("upload-by-link", {
      link: photolink,
    });
    setAddedPhotos((prev) => [...prev, filename]);
    setPhotoLink("");
  }

  async function uploadPhotos(e) {
    const files = e.target.files;
    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append("photos", files[i]);
    }
    const response = await axios.post("/upload", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    const { data: filenames } = response;
    setAddedPhotos((prev) => [...prev, ...filenames]);
  }

  async function addNewPlace(e) {
    e.preventDefault();
    await axios.post("/places", {
      title,
      address,
      addedPhotos,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
    });
    setRedirect(true);
  }

  if (redirect) {
    return <Navigate to={"/account/places"} />;
  }

  return (
    <div>
      <AccountNavigation />
      <form onSubmit={addNewPlace}>
        {/* Title */}
        <h2 className="text-2xl mt-4">Title</h2>
        <p className="text-gray-500 text-sm">
          Title for your place..should be short and catchy in advertisement
        </p>
        <input
          type="text"
          placeholder="title for example: My lovely apartment"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />

        {/* Address */}
        <h2 className="text-2xl mt-4">Address</h2>
        <p className="text-gray-500 text-sm">Address to this place</p>
        <input
          type="text"
          placeholder="address"
          value={address}
          onChange={(ev) => setAddress(ev.target.value)}
        />

        {/* Photos */}
        <h2 className="text-2xl mt-4">Photos</h2>
        <p className="text-gray-500 text-sm">More=better</p>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Add using a link ...jpg"
            value={photolink}
            onChange={(ev) => setPhotoLink(ev.target.value)}
          />
          <button onClick={addPhoto} className="bg-gray-200 px-4 rounded-2xl">
            Add&nbsp;photo
          </button>
        </div>

        <div className="grid gap-2 grid-cols-3 lg:grid-cols-6 md:grid-cols-4 mt-2">
          {addedPhotos.length > 0 &&
            addedPhotos.map((link) => (
              <div className="h-32 flex" key={link}>
                <img
                  className="rounded-2xl w-full object-cover"
                  src={"http://localhost:3000/uploads/" + link}
                  alt=""
                />
              </div>
            ))}
          <label className="h-32 cursor-pointer border items-center flex gap-1 justify-center bg-transparent rounded-2xl p-2 text-2xl text-gray-600">
            <input
              onChange={uploadPhotos}
              type="file"
              multiple
              className="hidden"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
              />
            </svg>
            Upload
          </label>
        </div>

        {/* Description */}
        <h2 className="text-2xl mt-4">Description</h2>
        <p className="text-gray-500 text-sm">Description of that place</p>
        <textarea
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        />

        {/* Perks */}
        <h2 className="text-2xl mt-4">Perks</h2>
        <p className="text-gray-500 text-sm">
          Select all the perks of your place
        </p>
        <Perks selected={perks} onChange={setPerks} />

        {/* Extra Info */}
        <h2 className="text-2xl mt-4">Extra info</h2>
        <p className="text-gray-500 text-sm">House rules, etc</p>
        <textarea
          value={extraInfo}
          onChange={(ev) => setExtraInfo(ev.target.value)}
        />

        {/* Check In & Out Times */}
        <h2 className="text-2xl mt-4">Check in & out times</h2>
        <p className="text-gray-500 text-sm">
          Add check in and check out times, remember to have some time window
          for cleaning the room between guests
        </p>
        <div className="grid gap-2 sm:grid-cols-3">
          <div>
            <h3 className="mt-2 -mb-1">Check in time</h3>
            <input
              type="text"
              placeholder="14:00"
              value={checkIn}
              onChange={(ev) => setCheckIn(ev.target.value)}
            />
          </div>
          <div>
            <h3 className="mt-2 -mb-1">Check out time</h3>
            <input
              type="text"
              placeholder="11:00"
              value={checkOut}
              onChange={(ev) => setCheckOut(ev.target.value)}
            />
          </div>
          <div>
            <h3 className="mt-2 -mb-1">Max number of guests</h3>
            <input
              type="number"
              value={maxGuests}
              onChange={(ev) => setMaxGuests(ev.target.value)}
            />
          </div>
        </div>

        <button className="primary my-4 text-white">Save</button>
      </form>
    </div>
  );
}
