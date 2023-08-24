"use client";
import { useDeleteArticle } from "@/hooks/use-delete-article";
import { useAuth } from "@/lib/providers/auth-providers";
import { Article } from "@/types";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ErrorToast, SuccessToast } from "../toasts";

export default function AvatarGroup({ data }: { data: Article }) {
  const user = useAuth();
  const router = useRouter();

  const [isDeleteError, setIsDeleteError] = useState<boolean>(false);

  const { mutate, isError, isSuccess } = useDeleteArticle(data.id.toString());

  const showToast = () => {
    return (
      <>
        {isSuccess && (
          <SuccessToast>Article deleted successfully!</SuccessToast>
        )}
        {isDeleteError && (
          <ErrorToast>There was an error in deleting the article.</ErrorToast>
        )}
      </>
    );
  };

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        router.push("/");
      }, 1500);

      return () => clearTimeout(timer);
    }
    if (isError) {
      setIsDeleteError(true);
      const timer = setTimeout(() => {
        setIsDeleteError(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isSuccess, isError]);

  return (
    <div className='flex gap-4'>
      {showToast()}
      <div className='avatar placeholder'>
        <div className='bg-neutral-focus text-neutral-content rounded-full w-12'>
          <span className='text-xs'>
            {data.creator.firstName.charAt(0).toUpperCase()}
          </span>
        </div>
      </div>
      <div className='flex flex-col'>
        <div>{`${data.creator.firstName}${
          data.creator.lastName ? ` ${data.creator.lastName}` : ""
        }`}</div>

        <div>{`5 min read · ${dayjs(data.createdAt).format(
          "MMM D, YYYY"
        )}`}</div>
      </div>

      {data.creator.username === user?.username && (
        <div className='dropdown dropdown-end ml-auto'>
          <label
            tabIndex={0}
            className='btn btn-circle btn-ghost btn-xs text-info'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-three-dots fill-black'
            >
              <path d='M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z' />{" "}
            </svg>
          </label>
          <div
            tabIndex={0}
            className='card compact dropdown-content z-[1] shadow bg-base-100 rounded-box w-64'
          >
            <ul
              onClick={() => mutate()}
              className='p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 cursor-pointer'
            >
              <li className='p-1'>Delete article</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
