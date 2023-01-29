import ApplicationLogo from "@/Components/ApplicationLogo";
import {Link} from "@inertiajs/inertia-react";


export default function Header({auth}) {
    return (
        <>
            <header class="header">
                <div class="blog-container">
                    <nav class="navbar">
                        <ApplicationLogo/>
                        <>
                        {(() => {
                            if (auth.user) {
                               if (auth.user.is_admin == 'true') {
                                   return (
                                       <>
                                           <Link href={route('publishroom.index')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                                               Publishroom
                                           </Link>
                                           <Link href={route('logout')} method="post" as="button">
                                               Log Out
                                           </Link>
                                       </>
                                   )
                               } else {
                                   return (
                                       <><Link href={route('logout')} method="post" as="button">
                                           Log Out
                                       </Link></>
                                   )
                               }
                            } else {
                                return (
                                    <>
                                        <Link href={route('login')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                                            Log in
                                        </Link>

                                        <Link
                                            href={route('register')}
                                            className="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )
                            }
                        })()}
                        </>
                    </nav>
                </div>
            </header>
        </>
    );
}
