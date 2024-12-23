import Link from "next/link";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: '404 | Page not found',
}

const NotFound = () => {
    return (
        <>
            <div>
                <h1>404</h1>
                <p>Oops, we could not find the page!</p>
                <span>
                    Return to the <Link href="/">main page</Link> by clicking here.
                </span>
            </div>
        </>
    );
};

export default NotFound;