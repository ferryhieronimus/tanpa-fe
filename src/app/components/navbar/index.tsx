"use client";
import { useAuth } from "@/lib/providers/auth-providers";
import { useLogout } from "@/hooks/use-logout";
import Image from "next/image";
import LoginButton from "../button/login-button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SignupButton from "../button/signup-button";

export default function Navbar() {
  const user = useAuth();
  const pathname = usePathname();
  
  const { mutate, isError, failureReason } = useLogout();

  return (
    <header className='flex justify-center mt-4 z-50'>
      <nav className='navbar p-0 justify-between items-center mx-4 md:mx-8 max-w-7xl bg-base-100'>
        <div className='relative aspect-video h-full'>
          <Link href={"/"}>
            <Image src='/images/Logo.png' fill alt='Picture of the author' />
          </Link>
        </div>
        <div className='flex-none gap-4 flex'>
          {!user && <SignupButton />}
          {!user && <LoginButton />}
          {user && (
            <div className='flex gap-8 items-center'>
              {pathname !== "/write" && (
                <Link href={"/write"}>
                  <div className="font-dmSans">Write Now</div>
                </Link>
              )}
              <div className='dropdown dropdown-end z-20 cursor-pointer'>
                <div tabIndex={0} className='avatar placeholder'>
                  <div className='bg-neutral-focus text-neutral-content rounded-full w-8'>
                    <span className='text-xs'>
                      {user.firstName.charAt(0).toUpperCase()}
                    </span>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'
                >
                  <li>
                    <button onClick={() => mutate()}>Logout</button>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
