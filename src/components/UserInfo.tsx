'use client';

import { useSession } from 'next-auth/react';
import React from 'react';
import Image from 'next/image';

const UserInfo = () => {
  const { status, data: session } = useSession();
  const { email, image, name } = session?.user || {};

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="border my-4 rounded">
        <div className="flex items-center p-4">
          <Image
            src={
              image ||
              'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg'
            }
            alt="User profile image"
            width={48}
            height={48}
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h2 className="font-semibold">
              {name}{' '}
              <span className="text-gray-300 text-xs ">
                ({session?.user?.role})
              </span>
            </h2>
            <p className="text-sm text-gray-500">{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
