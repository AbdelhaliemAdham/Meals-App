"use client";
import React, { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";
export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const inputRef = useRef();
  function handleImagePick() {
    inputRef.current.click();
  }
  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>

      <div className={classes.controls}>
        <div className={classes.preview}>
          {pickedImage && (
            <Image src={pickedImage} alt="the image picked by user" fill />
          )}
        </div>

        <input
          className={classes.input}
          name={name}
          id={name}
          type="file"
          onChange={handleImageChange}
          ref={inputRef}
          accept={"image/png , image/jpeg"}
        />
        <button
          className={classes.button}
          onClick={handleImagePick}
          type="button"
        >
          Choose Your Image
        </button>
      </div>
    </div>
  );
}
