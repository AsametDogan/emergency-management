import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Option,
  Select,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
//import { useSelector } from 'react-redux';
import * as api from '../api/post.js';

const NewHelp = ({ open, handleOpen }) => {
  const [post, setPost] = useState({ type: "", urgency: "" });
  const [size, setSize] = useState("xl");
  //const {user} = useSelector(state => state.user)

  const handleOnSubmit = async () => {
    console.log("handleOnSubmit first line");
    const data = await api.newPostApi(post);
    console.log("handleOnSubmit OK");
  }




  useEffect(() => {
    if (window.innerWidth <= 500) {
      setSize("xxl");
    } else if (window.innerWidth <= 1160) {
      setSize("xl");
    } else {
      setSize("lg");
    }
  }, [window.innerWidth]);

  const deneme = (e) => {
    console.log(e.target.value);
  };

  return (
    <Dialog
      open={open}
      size={size}
      handler={handleOpen}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
    >
      <DialogHeader>Yeni Yardım Çağrısı Oluştur</DialogHeader>
      <DialogBody divider>
        <form className="text-sm max-h-80 py-1 overflow-y-scroll scrollbar-hide">
          <div className="flex flex-col gap-3 justify-center items-center ">
            <div className="flex flex-col w-2/3">
              <label className="text-gradient">Durum Başlığı:</label>
              <input
                value={post.title}
                onChange={(e) => {
                  setPost({ ...post, title: e.target.value });
                }}
                className="bg-gray-50 px-2 py-1 border-b rounded-md outline-none"
              />
            </div>

            <div className="flex flex-col w-2/3">
              <label className="text-gradient">Açıklama:</label>
              <input
                value={post.description}
                onChange={(e) => {
                  setPost({ ...post, description: e.target.value });
                }}
                className="bg-gray-50 px-2 py-1 border-b rounded-md outline-none"
              />
            </div>

            <div className="flex flex-col w-2/3">
              <label className="text-gradient">Konum:</label>
              <input
                value={post.location}
                onChange={(e) => {
                  setPost({ ...post, location: e.target.value });
                }}
                className="bg-gray-50 px-2 py-1 border-b rounded-md outline-none"
              />
            </div>

            <div className="flex flex-col w-2/3">
              <label className="text-gradient">Çağrı Gönderen:</label>
              <input
                value={post.contactName}
                onChange={(e) => {
                  setPost({ ...post, contactName: e.target.value });
                }}
                className="bg-gray-50 px-2 py-1 border-b rounded-md outline-none"
              />
            </div>
            <div className="flex flex-col w-2/3">
              <label className="text-gradient">İletişim Numarası:</label>
              <input
                value={post.contactNumber}
                onChange={(e) => {
                  setPost({ ...post, contactNumber: e.target.value });
                }}
                className="bg-gray-50 px-2 py-1 border-b rounded-md outline-none"
              />
            </div>

           

            <div className="w-[90%] flex ">
              <Select
                size="md"
                label="Tür"
                value={post.type}
                onChange={(val) => {
                  // setFilter({ ...filter, type: val });
                  setPost({ ...post, type: val });
                }}
              >
                <Option value="earthquake">Deprem</Option>
                <Option value="fire">Yangın</Option>
                <Option value="flood">Sel</Option>
                <Option value="whirlwind">Hortum</Option>
                <Option value="tsunami">Tsunami</Option>
                <Option value="landslide">Heyelan</Option>
                <Option value="other">Diğer</Option>
              </Select>
            </div>
            <div className="w-[90%] flex ">
              <Select
                size="md"
                label="Aciliyet"
                value={post.urgency}
                onChange={(val) => {
                  // setFilter({ ...filter, type: val });
                  setPost({ ...post, urgency: val });
                }}
              >
                <Option value={"0"}> Olağan Durum</Option>
                <Option value={"1"}>Beklenti Durum</Option>
                <Option value={"2"}> Destek Durum</Option>
                <Option value={"3"}> İhtiyaç Durum</Option>
                <Option value={"4"}>Acil Durum</Option>
                <Option value={"5"}> Yüksek Aciliyet</Option>
              </Select>
            </div>
          </div>
        </form>
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={handleOpen}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
        <Button variant="gradient" color="green" onClick={handleOnSubmit}>
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default NewHelp;
