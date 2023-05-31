import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";

const NewHelp = ({ open, handleOpen }) => {
  const [size, setSize] = useState("xl");

  useEffect(() => {
    if (window.innerWidth <= 500) {
      setSize("xxl");
    } else if (window.innerWidth <= 1160) {
      setSize("xl");
    } else {
      setSize("lg");
    }
  }, [window.innerWidth]);

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
              <input className="bg-gray-50 px-2 py-1 border-b rounded-md outline-none" />
            </div>

            <div className="flex flex-col w-2/3">
              <label className="text-gradient">Açıklama:</label>
              <input className="bg-gray-50 px-2 py-1 border-b rounded-md outline-none" />
            </div>

            <div className="flex flex-col w-2/3">
              <label className="text-gradient">Bölge:</label>
              <input className="bg-gray-50 px-2 py-1 border-b rounded-md outline-none" />
            </div>

            <div className="flex flex-col w-2/3">
              <label className="text-gradient">Çağrı Gönderen:</label>
              <input className="bg-gray-50 px-2 py-1 border-b rounded-md outline-none" />
            </div>

            <div className="flex flex-col w-2/3">
              <label className="text-gradient">Durum Başlığı:</label>
              <input className="bg-gray-50 px-2 py-1 border-b rounded-md outline-none" />
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
        <Button variant="gradient" color="green" onClick={handleOpen}>
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default NewHelp;
