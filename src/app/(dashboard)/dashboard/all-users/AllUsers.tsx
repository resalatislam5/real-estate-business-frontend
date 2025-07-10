"use client";
import {
  deleteSingleApiWithAuthentication,
  getApiWithAuthentication,
} from "@/api/api";
import usePopUpData from "@/components/hooks/usePopUpData";
import DashboardTitle from "@/components/shared/DashboardTitle/DashboardTitle";
import PopUpAlert from "@/components/shared/PopUpAlert/PopUpAlert";
import PopUpDetails from "@/components/shared/PopUpDetails/PopUpDetails";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface UsersType {
  _id: string;
  name: string;
  email: string;
  number: string;
  role: string;
  image: string;
  address: string;
}

const AllUsers = () => {
  // all contact data
  const [users, setUsers] = useState<UsersType[]>([]);

  // open single popup
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  // open single popup
  const [popUpData, setPopUpData] = useState<Partial<UsersType>>({});
  // popUp
  const {
    isOpen: isOpenError,
    msg: msgError,
    setIsOpen: setIsOpenError,
    setMsg: setMsgError,
  } = usePopUpData();
  const { isOpen, msg, setIsOpen, setMsg } = usePopUpData();

  // get all Contact data
  const handleContactData = async () => {
    const data = await getApiWithAuthentication("auth");
    console.log("users", data);

    if (data?.error) {
      setIsOpenError(true);
      setMsgError(data?.message);
    }
    setUsers(data);
  };

  // Delete one contact data
  const handleDeleteOne = async (id: string) => {
    const confirm = window.confirm("Are You delete a Contact Message");
    if (confirm) {
      const data = await deleteSingleApiWithAuthentication("auth", id);
      console.log("deleted user", data);

      if (data) {
        const newData = users.filter((e) => e._id !== data?.data?._id);
        setUsers(newData);
        setIsOpen(true);
        setMsg(data.message);
      }
    }
  };

  // handle popup data
  const handlePopUpData = (e: UsersType) => {
    setIsPopUpOpen(true);
    setPopUpData(e);
  };
  useEffect(() => {
    handleContactData();
  }, []);

  return (
    <>
      <PopUpAlert
        isOpen={isOpenError}
        setIsOpen={setIsOpenError}
        text={msgError}
        success={false}
      />
      <PopUpAlert isOpen={isOpen} setIsOpen={setIsOpen} text={msg} success />
      <PopUpDetails isOpen={isPopUpOpen} setIsOpen={setIsPopUpOpen}>
        <h1 className="font-semibold text-2xl text-center">Contact Details</h1>
        <div className="flex flex-col gap-4 text-lg font-semibold">
          {popUpData?.image && (
            <div className="flex justify-center">
              <Image
                src={popUpData.image}
                alt=""
                width={100}
                height={100}
                className="w-[100px] h-[100px] rounded-full"
              />
            </div>
          )}
          <p>
            name: <span className="font-normal">{popUpData.name}</span>
          </p>
          <p>
            email: <span className="font-normal">{popUpData.email}</span>
          </p>
          <p>
            Role: <span className="font-normal">{popUpData.role}</span>{" "}
          </p>
          <p>
            Number: <span className="font-normal">{popUpData.number}</span>{" "}
          </p>
          <p>
            Address: <span className="font-normal">{popUpData.address}</span>{" "}
          </p>
        </div>
      </PopUpDetails>
      <div className="max-w-[2500px]">
        <DashboardTitle name="Total Users" count={users.length} />
        {/* table list */}
        {users?.length > 0 ? (
          <div className="sm:mt-10 mt-5 overflow-x-auto md:max-w-full md:min-w-full sm:max-w-[500px] max-w-[250px]">
            <table className="border-separate border-spacing-0 table-auto min-w-full max-w-full px-5">
              <thead className="text-left mb-10">
                <tr className="text-2xl">
                  <th className="p-5">Name</th>
                  <th className="p-5">Email</th>
                  <th className="p-5">Role</th>
                  <th className="p-5">Details</th>
                  {/* <th>Delete</th> */}
                </tr>
              </thead>
              <tbody className="">
                {users?.map((e) => (
                  <tr
                    className="odd:bg-gray-50 hover:cursor-pointer"
                    key={e._id}
                  >
                    <td className="p-5">{e.name}</td>
                    <td className="p-5">{e.email}</td>
                    <td className="p-5">{e.role}</td>

                    <td className="p-5">
                      <button
                        onClick={() => handlePopUpData(e)}
                        className="text-orange-500"
                      >
                        See more
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDeleteOne(e._id)}
                        className="text-2xl text-red-500 "
                      >
                        <AiOutlineClose />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="sm:mt-10 mt-5 italic">No User Found</p>
        )}
      </div>
    </>
  );
};

export default AllUsers;
