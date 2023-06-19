import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const [userInfo, setUserInfo] = useState();

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const userres = await axios.get(`/users/profile`, { headers });
      setUserInfo(userres.data.user);
      const res = await axios.get(`/users/all?page=${currentPage}&&limit=2`, {
        headers,
      });
      setData(res.data.users.docs);
      setTotalPages(res.data.users.totalPages);
      console.log(res.data.users.totalPages, currentPage);
      if (res.data.users.totalPages > currentPage) {
        setHasNext(true);
      } else {
        setHasNext(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };
  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="w-full h-[100vh] flex">
      {userInfo && <Sidebar fname={userInfo?.fname} lname={userInfo?.lname} />}
      <div className=" w-[60%] flex flex-col rounded-3xl m-auto">
        <table className=" w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700  uppercase border-gray-200 bg-gray-50 ">
            <tr className="">
              <th className=" px-6 py-3">Name</th>
              <th className="  px-6 py-3">Address</th>
              <th className="  px-6 py-3">Email</th>
              <th className="  px-6 py-3">Created Date</th>
              <th className="  px-6 py-3">Car Model</th>
            </tr>
          </thead>
          <tbody>
            {data.map((el) => {
              return (
                <>
                  <tr className="bg-white border-b">
                    <td className=" px-6 py-3">{el.name}</td>
                    <td className=" px-6 py-3">{el.address}</td>
                    <td className=" px-6 py-3">{el.email}</td>
                    <td className=" px-6 py-3">{el.createdDate}</td>
                    <td className=" px-6 py-3">{el.carModel}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
        <div className="my-8 flex flex-row justify-center gap-4 ">
          <button
            className="py-2 px-4 border text-white rounded-md bg-blue-500 disabled:bg-gray-700"
            onClick={handlePrev}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span className="flex justify-center items-center font-bold text-blue-800">
            {currentPage} / {totalPages}
          </span>
          <button
            className="py-2 px-4 border text-white rounded-md bg-blue-500  disabled:bg-gray-700"
            onClick={handleNext}
            disabled={!hasNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
