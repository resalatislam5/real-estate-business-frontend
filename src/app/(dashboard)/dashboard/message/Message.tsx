"use client";
import {
  deleteSingleApiWithAuthentication,
  getApiWithAuthentication,
} from "@/api/api";
import useMiddlewareAuthLoading from "@/components/hooks/useMiddlewareAuthLoading";
import DashboardTitle from "@/components/shared/DashboardTitle/DashboardTitle";
import LoadingSuspense from "@/components/shared/Loading/LoadingSuspense";
import PopUpDetails from "@/components/shared/PopUpDetails/PopUpDetails";
import { toast } from "@/components/shared/Tost/toast";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface ContactType {
  _id: string;
  name: string;
  email: string;
  number: string;
  message: string;
  seen: boolean;
}
const Message = () => {
  // all contact data
  const [contactData, setContactData] = useState<ContactType[]>([]);
  // open single popup
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  // open single popup
  const [popUpData, setPopUpData] = useState<Partial<ContactType>>({});
  // loading state
  const [isLoadingLocal, setIsLoadingLocal] = useState(false);

  // handle auth loading
  const { isLoading } = useMiddlewareAuthLoading(isLoadingLocal);

  // get all Contact data
  const handleContactData = async () => {
    setIsLoadingLocal(true);
    const data = await getApiWithAuthentication("contact");
    if (data?.error) {
      toast.error(data?.message);
    }
    setContactData(data?.data);
    setIsLoadingLocal(false);
  };

  // Delete one contact data
  const handleDeleteOne = async (id: string) => {
    const confirm = window.confirm("Are You delete a Contact Message");
    if (confirm) {
      const data = await deleteSingleApiWithAuthentication("contact", id);
      if (data?.error) {
        toast.error(data.message);
        return;
      }
      if (data) {
        const newData = contactData.filter((e) => e._id !== id);
        toast.success(data?.message);
        setContactData(newData);
      }
    }
  };

  // Handle seen
  const handleSeen = async (id: string) => {
    const data = await getApiWithAuthentication(`contact/seen/${id}`);
    if (data?.error) {
      toast.error(data.message);
      return;
    }
    if (data) {
      setContactData((data) =>
        data.map((e) => (e._id === id ? { ...e, seen: true } : e))
      );
      toast.success(data?.message);
    }
  };
  // handle popup data
  const handlePopUpData = (e: ContactType) => {
    setIsPopUpOpen(true);
    setPopUpData(e);
  };

  useEffect(() => {
    handleContactData();
  }, []);

  // count spinner
  const countSpinner =
    contactData.length > 0 ? (
      contactData?.length
    ) : (
      <LoadingSuspense style="!w-5 inline-block !my-auto !h-5" />
    );

  return (
    <>
      <PopUpDetails isOpen={isPopUpOpen} setIsOpen={setIsPopUpOpen}>
        <h1 className="font-semibold text-2xl text-center">Contact Details</h1>
        <div className="flex flex-col gap-4 text-lg font-semibold">
          <p>
            name: <span className="font-normal">{popUpData.name}</span>
          </p>
          <p>
            email: <span className="font-normal">{popUpData.email}</span>
          </p>
          <p>
            Number: <span className="font-normal">{popUpData.number}</span>{" "}
          </p>
          <p>
            Message: <span className="font-normal">{popUpData.message}</span>{" "}
          </p>
        </div>
      </PopUpDetails>
      <div className="max-w-[2500px]">
        <DashboardTitle name="Total Message" count={countSpinner} />
        {/* table list */}
        {isLoading ? (
          <div className="mt-10">
            {[...Array(9)].map((_, i) => (
              <LoadingSuspense key={i} style="!h-7" />
            ))}
          </div>
        ) : (
          <>
            {contactData?.length > 0 ? (
              <div className="sm:mt-10 mt-5 overflow-x-auto md:max-w-full md:min-w-full sm:max-w-[500px] max-w-[250px]">
                <table className="border-separate border-spacing-0 table-auto min-w-full max-w-full px-5">
                  <thead className="text-left mb-10">
                    <tr className="text-2xl">
                      <th className="p-5">Name</th>
                      <th className="p-5">Email</th>
                      <th className="p-5">Seen</th>
                      <th className="p-5">Details</th>
                      {/* <th>Delete</th> */}
                    </tr>
                  </thead>
                  <tbody className="">
                    {contactData?.map((e) => (
                      <tr
                        className="odd:bg-gray-50 hover:cursor-pointer"
                        key={e._id}
                      >
                        <td className="p-5">{e.name}</td>
                        <td className="p-5">{e.email}</td>
                        {e.seen ? (
                          <td className="p-5">Seen</td>
                        ) : (
                          <td
                            onClick={() => handleSeen(e._id)}
                            className="p-5 text-blue-500"
                          >
                            Not Seen
                          </td>
                        )}
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
              <p className="sm:mt-10 mt-5 italic">No Message Found</p>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Message;
