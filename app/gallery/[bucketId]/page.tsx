'use client'
import {useEffect, useRef, useState,cache} from "react";
import {supabase} from "@/supabase/client";
import {FileObject} from "@supabase/storage-js";
import Image from "next/image";
import {css} from "@/styled-system/css";
import lgZoom from 'lightgallery/plugins/zoom';
import dynamic from 'next/dynamic';

const LightGallery = dynamic(() => import('lightgallery/react'), {
    ssr: false
});
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import {Meta} from "@/supabase/type/meta";


export const revalidate = 60;

export async function generateStaticParams() {
    const { data: thumbnails } = await supabase.storage.from("thumbnails").list()

    return thumbnails?.map(({ bucket_id }) => ({
        bucketId: bucket_id,
    }));
}

export default function Page({ params }: { params: { bucketId: string } }) {
    const [images, setImages] = useState<null | FileObject[]>([])
    const [metaData, setMetaData] = useState<null | Meta>(null)
    useEffect(() => {
        const getBucket = cache(async() => {
            const { data, error } = await supabase
                .storage.from(params.bucketId)
                .list('images', {
                    limit: 100,
                    offset: 0,
                    sortBy: { column: 'name', order: 'asc' },
                })
            if(error) {
                throw error
                console.log(error)
            } else {
                setImages(data)
            }
            try {
                const response = await fetch(process.env.NEXT_PUBLIC_CDN_URL + 'thumbnails/' + params.bucketId + '/' + params.bucketId + '.json')
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                const data = await response.json();
                setMetaData(data)
            } catch (error) {
                throw error
                console.log(error)
            }
        })
        getBucket()
    },[])

    return (
        <div>
            <div>
                <h1 className={css({
                    fontSize: "2.4rem",
                    fontWeight: "bold",
                    textAlign: "center",
                    lineHeight: "1.7",
                })}>
                    {metaData?.title}
                    <span className={css({
                        display: "block",
                        fontWeight: "normal",
                        fontSize: "1rem",
                        letterSpacing: "8px",
                    })}>
                        {metaData?.meta}
                    </span>
                </h1>
            </div>
            <div className={css({
                width: "90%",
                margin: "100px auto",
            })}>
                <LightGallery onSlideItemLoad={() => console.log('load')} mode="lg-fade" plugins={[lgZoom]}>
                        {images?.map((image, index) => (
                            <a className={css({
                                display: "block",
                                width: "100%",
                                height: "100%",
                            })} data-src={process.env.NEXT_PUBLIC_CDN_URL + params.bucketId + '/images/' + image.name} key={index} >
                                <Image className={css({
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                })} quality={100} src={process.env.NEXT_PUBLIC_CDN_URL + params.bucketId + '/images/' + image.name} alt="" width={300} height={300}/>
                            </a>
                        ))}
                </LightGallery>
            </div>

                </div>
    )
}