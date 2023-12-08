"use client";
import { useCreateArticle } from "@/hooks/use-create-article";
import { CreateArticle, Tag, TagOption } from "@/types";
import { useEffect, useRef, useState } from "react";
import TagSelector from "../tag";
import TranformOptionsToTags from "@/utils/transform-options-to-tags";
import { useRouter } from "next/navigation";
import { SuccessToast, ErrorToast, LoadingToast } from "../toasts";
import Title from "./title";
import Subtitle from "./subtitle";
import Content from "./content";
import { generateCoverImageURI, generatePutUrl } from "@/api/api-article";

export default function Write() {
  const router = useRouter();
  const myModalRef = useRef<HTMLDialogElement>(null);
  const [selections, setSelections] = useState<TagOption[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const isDisabled = selections.length < 1 || selections.length > 3;

  const { mutate, isError, isSuccess } = useCreateArticle();

  const handleChange = (selectedOption: TagOption[]) => {
    setSelections(selectedOption);
  };

  const handleOpenModal = () => {
    if (myModalRef.current) {
      myModalRef.current && myModalRef.current.showModal();
    }
  };

  const handleCloseModal = () => {
    if (myModalRef.current) {
      myModalRef.current.close();
    }
  };

  const showToast = () => {
    return (
      <>
        {isSuccess && (
          <SuccessToast>Article created successfully!</SuccessToast>
        )}
        {isError && (
          <ErrorToast>There was an error in creating the article.</ErrorToast>
        )}
        {isLoading && <LoadingToast>Creating your article.</LoadingToast>}
      </>
    );
  };

  const uploadImage = async (picture: File) => {
    const params = new URLSearchParams({
      file_name: picture.name,
      file_type: picture.type,
    });

    const data = await generatePutUrl(params);

    const key = data.content.key;
    const url = data.content.url;

    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": picture.type,
      },
      body: picture,
    });

    if (response.ok) {
      return key;
    } else {
      console.log("Error");
    }
  };

  const getCoverImgURI = async (key: string) => {
    const data = await generateCoverImageURI(key);

    return data.content.url;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.currentTarget);

    const imageFile = formData.get("image");

    let url = "";
    if (imageFile instanceof File) {
      const key = await uploadImage(imageFile);
      url = await getCoverImgURI(key!);
    }

    formData.append("tags", JSON.stringify(TranformOptionsToTags(selections)));
    formData.append("coverImgURI", url);

    const data: CreateArticle = {
      title: formData.get("title") as string,
      subtitle: formData.get("subtitle") as string,
      content: formData.get("content") as string,
      tags: JSON.parse(formData.get("tags") as string),
      coverImgURI: formData.get("coverImgURI") as string,
    };

    mutate(data);
  };

  useEffect(() => {
    if (isSuccess) {
      handleCloseModal();
      setIsLoading(false);

      const timer = setTimeout(() => {
        router.push("/");
      }, 1500);

      return () => clearTimeout(timer);
    }

    if (isError) {
      handleCloseModal();
      setIsLoading(false);
    }
  }, [isSuccess, isError]);

  return (
    <>
      <form onSubmit={handleSubmit} encType='multipart/form-data'>
        {showToast()}
        <div className='flex flex-col gap-4'>
          <Title />
          <Subtitle />
          <Content />
          <button
            type='button'
            onClick={handleOpenModal}
            className='btn w-24 mt-8 place-self-end'
          >
            Submit
          </button>

          <dialog
            ref={myModalRef}
            className='modal flex justify-center items-center'
          >
            <div className='modal-box h-3/4 flex flex-col justify-between gap-8'>
              <div className='flex flex-col gap-8'>
                <h3 className='font-bold text-lg'>Final Step</h3>
                <div className='flex flex-col gap-2'>
                  <label htmlFor=''>1. Pick cover photo</label>
                  <input
                    type='file'
                    id='image'
                    name='image'
                    className='file-input file-input-bordered w-full rounded-none focus:outline-none'
                  />
                </div>
                <div className='flex flex-col gap-2'>
                  <p>2. Add or change topics (up to 3)</p>
                  <TagSelector handleChange={handleChange} />
                </div>
              </div>
              <div className='modal-action'>
                <button
                  type='button'
                  onClick={handleCloseModal}
                  className='btn'
                >
                  Cancel
                </button>
                {!isLoading && (
                  <button disabled={isDisabled} className='btn btn-neutral'>
                    Submit
                  </button>
                )}
                {isLoading && (
                  <button className='btn btn-neutral disabled'>
                    <span className='loading loading-spinner'></span>
                  </button>
                )}
              </div>
            </div>
          </dialog>
        </div>
      </form>
    </>
  );
}
