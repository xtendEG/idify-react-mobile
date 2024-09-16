import React from 'react'
import AppLayout from '../../components/common/app-layout'
import person from '../../assets/images/camera/person.png'
import { Button } from '../../components/common/button'
import { useNavigate } from 'react-router-dom'
const ViewPhoto = () => {
    const navigate = useNavigate();
  return (
    <AppLayout headingTitle={"View Photo"} headingBg={"bg-white"}>
       <div className="mt-10">
       <div className='border-[1px] border-gray-300 flex justify-center'>
          <img src={person} alt="person" />
        </div>
        <div className=" space-y-5 mt-12">
        <Button
          label="Download Photo"
          attr={{ className: "w-full text-white" }}
        />
        <Button
          label="Generate Album"
          attr={{
            className: "w-full bg-transparent text-primary border border-primary",
            onClick: () => navigate("/profile/create-album"),
          }}
        />
      </div>
       </div>
    </AppLayout>
  )
}

export default ViewPhoto