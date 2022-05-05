import React from "react";
import { useState } from "react";

const UploadProfilePicture = () => {
  const [image, setImage] = useState(``);
  const [loading, setLoading] = useState(false);

  const uploadImage = async (e) => {
    const data = new FormData();
    data.append("profile", image);
    setLoading(true);
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/626fc30317c4e00015d7a082/picture",
        {
          method: "POST",
          body: data,
          headers: {
            authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjZmYzMwMzE3YzRlMDAwMTVkN2EwODIiLCJpYXQiOjE2NTE0OTE1ODgsImV4cCI6MTY1MjcwMTE4OH0.yS8YrZCAJfbhN7ye7OAqtaTyteCbwQsztG411czMp8s",
          },
        }
      );
      const file = await res.json();
      setLoading(false);
      console.log("Files details: ", file);
    } catch (error) {
      console.log(`❌error❌`, error);
    }
  };
  const selected = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div>
      <div class="form-group">
        <label for="exampleFormControlFile1">Upload an image</label>
        <input
          type="file"
          class="form-control-file"
          id="exampleFormControlFile1"
          onChange={selected}
        />
      </div>
      <button
        type="button"
        onClick={() => console.log("click")}
        class="btn btn-primary"
      >
        Upload
      </button>
    </div>
  );
};

export default UploadProfilePicture;
