'use client'
import { useRouter } from "next/navigation";
import Heading from "./heading";

const EmptyState = ({
    title = 'There is no project in this category',
    subtitle = 'I`ll try to upload the project on this category soon.',
}) => {
  const router = useRouter();
  return (
    <div className='h-[60vh] flex flex-col gap-2 justify-center items-center'>
      <Heading
        center 
        title={title}
        subtitle={subtitle}
      />
      <div onClick={() => router.back()} className='text-center underline cursor-pointer py-5'>
        Back
      </div>
    </div>
  )
};

export default EmptyState;