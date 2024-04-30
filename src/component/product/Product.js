import { CustomButton } from "../ui/Button";
import Container from "../ui/Container";

import { CiEdit } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { H2 } from "../ui/Tag";

export default function Product() {
  return (
    <>
      <section className="py-10">
        <Container>
          {/* header */}

          <H2 name="Product List" />

          <div className="flex justify-end">
            <CustomButton
              type="submit"
              className="w-24 !flex items-center gap-2"
            >
              <IoMdAdd className="text-xl" /> Add
            </CustomButton>
          </div>

          {/* table */}
          <div className="mt-10 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="rounded-xl  shadow-md">
                  <th className="text-lg font-medium text-custom-text-color1 p-5 ">
                    dsfds
                  </th>

                  <th className="text-lg font-medium text-custom-text-color1 p-5 ">
                    dsfds
                  </th>

                  <th className="text-lg font-medium text-custom-text-color1 p-5">
                    dsfds
                  </th>

                  <th className="text-lg font-medium text-custom-text-color1 p-5">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="rounded-xl shadow-md text-center">
                  <td className="text-base font-normal text-custom-text-color2 p-5">
                    dfd
                  </td>
                  <td className="text-base font-normal text-custom-text-color2 p-5">
                    dfd
                  </td>
                  <td className="text-base font-normal text-custom-text-color2 p-5">
                    dfd
                  </td>
                  <td className="text-base font-normal text-custom-text-color2 p-5">
                    <div className="flex items-center gap-2 justify-center">
                      <div className="bg-gray-100 p-2 inline-block rounded-md cursor-pointer">
                        <FaEye />
                      </div>
                      <div className="bg-gray-100 p-2 inline-block rounded-md cursor-pointer">
                        <CiEdit />
                      </div>
                      <div className="bg-gray-100 p-2 inline-block rounded-md cursor-pointer">
                        <MdDelete />
                      </div>
                    </div>
                  </td>
                </tr>

                <tr className="rounded-xl shadow-md text-center">
                  <td className="text-base font-normal text-custom-text-color2 p-5">
                    dfd
                  </td>
                  <td className="text-base font-normal text-custom-text-color2 p-5">
                    dfd
                  </td>
                  <td className="text-base font-normal text-custom-text-color2 p-5">
                    dfd
                  </td>
                  <td className="text-base font-normal text-custom-text-color2 p-5">
                    <div className="flex items-center gap-2 justify-center">
                      <div className="bg-gray-100 p-2 inline-block rounded-md cursor-pointer">
                        <FaEye />
                      </div>
                      <div className="bg-gray-100 p-2 inline-block rounded-md cursor-pointer">
                        <CiEdit />
                      </div>
                      <div className="bg-gray-100 p-2 inline-block rounded-md cursor-pointer">
                        <MdDelete />
                      </div>
                    </div>
                  </td>
                </tr>

                <tr className="rounded-xl shadow-md text-center">
                  <td className="text-base font-normal text-custom-text-color2 p-5">
                    dfd
                  </td>
                  <td className="text-base font-normal text-custom-text-color2 p-5">
                    dfd
                  </td>
                  <td className="text-base font-normal text-custom-text-color2 p-5">
                    dfd
                  </td>
                  <td className="text-base font-normal text-custom-text-color2 p-5">
                    <div className="flex items-center gap-2 justify-center">
                      <div className="bg-gray-100 p-2 inline-block rounded-md cursor-pointer">
                        <FaEye />
                      </div>
                      <div className="bg-gray-100 p-2 inline-block rounded-md cursor-pointer">
                        <CiEdit />
                      </div>
                      <div className="bg-gray-100 p-2 inline-block rounded-md cursor-pointer">
                        <MdDelete />
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </section>
    </>
  );
}
