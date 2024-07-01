'use client';

import React, { PropsWithChildren } from 'react';
import { SessionProvider } from 'next-auth/react';

const NextAuthProvider = ({
  children,
  session,
}: PropsWithChildren<{ session: any }>) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default NextAuthProvider;
