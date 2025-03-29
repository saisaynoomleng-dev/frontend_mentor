import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import { sanityFetch } from "@/sanity/lib/live";
import { BLOGS_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";


export default async function Home() {
    const { data: blogs } = await sanityFetch({ query: BLOGS_QUERY })
    return (
        <Bounded
            className="grid md:grid-cols-3 gap-3">
            <div
                className="md:col-span-2 md:col-start-1 grid gap-3  md:grid-cols-2">

                <div className="col-span-full">
                    <Image
                        src='/desktop.jpg'
                        width={800}
                        height={300}
                        alt="blocks picture"
                        priority
                        className="object-cover min-w-full rounded-sm hidden md:block mx-auto" />

                    <Image
                        src='/mobile.jpg'
                        width={400}
                        height={400}
                        alt="blocks picture"
                        priority
                        className="object-cover min-w-full rounded-sm block md:hidden mx-auto" />
                </div>


                <div className="col-span-full md:col-span-1 md:col-start-1">
                    <h3 className="text-fs-600 font-bold-100">The Bright Future of Web 3.0?</h3>
                </div>

                <div className="col-span-full md:col-span-1 md:col-start-2 flex flex-col justify-between items-start py-5">
                    <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>

                    <Button variant="cta">
                        Read More
                    </Button>
                </div>

            </div>

            <div>

            </div>

            <div>

            </div>
        </Bounded>
    );
}
