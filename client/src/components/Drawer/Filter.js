import { Checkbox, Option, Select } from "@material-tailwind/react";
import React, { useState } from "react";
import { MdFilterAlt } from "react-icons/md";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { setType, setUrgency } from "../../stores/Filter";

const Filter = () => {
  const [urgencyOpen, setUrgencyOpen] = useState(true); //drawer menu

  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();


  const handleFilterStatus = (e) => {
    const val = parseInt(e.target.value);
    if (filter.urgency.includes(val)) {
      dispatch(setUrgency(filter.urgency.filter((x) => x !== val)));
    } else {
      dispatch(setUrgency([...filter.urgency, val]));
    }
  };

  return (
    <div className="flex flex-col gap-2  items-center justify-center pt-4">
      <label className="flex items-center gap-1">
        <MdFilterAlt /> Filtrele
      </label>
      <div className="w-[90%] flex ">
        <Select
          size="md"
          label="Tür"
          value={filter.type}
          onChange={(val) => {
            // setFilter({ ...filter, type: val });
            dispatch(setType(val))
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
      <button
        className="flex items-center gap-1 p-1.5 px-2.5 rounded-lg w-full justify-center bg-deep-orange-300 hover:bg-orange-500 transition-all text-white"
        onClick={() => {
          setUrgencyOpen((a) => !a);
        }}
      >
        Aciliyet{urgencyOpen ? <HiChevronUp /> : <HiChevronDown />}
      </button>
      <div className={`${urgencyOpen ? "" : "hidden"} flex flex-col`}>
        <label className="flex gap-1 items-center">
          <Checkbox
            onChange={handleFilterStatus}
            value={5}
            color="red"
            defaultChecked
          />
          Yüksek Aciliyet
        </label>
        <label className="flex gap-1 items-center">
          <Checkbox
            onChange={handleFilterStatus}
            value={4}
            color="pink"
            defaultChecked
          />
          Acil Durum
        </label>
        <label className="flex gap-1 items-center">
          <Checkbox
            onChange={handleFilterStatus}
            value={3}
            color="amber"
            defaultChecked
          />
          İhtiyaç Durum
        </label>
        <label className="flex gap-1 items-center">
          <Checkbox
            onChange={handleFilterStatus}
            value={2}
            color="purple"
            defaultChecked
          />
          Destek Durum
        </label>
        <label className="flex gap-1 items-center">
          <Checkbox
            onChange={handleFilterStatus}
            value={1}
            color="indigo"
            defaultChecked
          />
          Beklenti Durum
        </label>
        <label className="flex gap-1 items-center">
          <Checkbox
            onChange={handleFilterStatus}
            value={0}
            color="green"
            defaultChecked
          />
          Olağan Durum
        </label>
      </div>

      {/* <label className="flex items-center gap-1">
            <BsSortDown /> Sıralama
          </label>
          <Select label="Sırala" value={filter.sort} onChange={(val)=>{setFilter({ ...filter, sort: val })}}>
            <Option value="time">Önce En Yeni</Option>
            <Option value="urgency">Aciliyet</Option>
          </Select> */}
    </div>
  );
};

export default Filter;
