import Card from "react-bootstrap/Card";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import Link from "next/link";

export default function Login() {
  const [session, loading] = useSession();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Card>
        {!session && (
          <>
            Not signed in <br />
            <button onClick={signIn}>Sign in</button>
          </>
        )}
        {session && (
          <>
            Signed in
            <br />
            <button onClick={signOut}>Sign out</button>
            <div>
              <Link href="../">
                <a>Go to home page</a>
              </Link>
            </div>
          </>
        )}
      </Card>
    </div>
  );
}
