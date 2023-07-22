'use client'
import {useEffect, useState} from "react";
import {supabase} from "@/supabase/client";
import {FileObject} from "@supabase/storage-js";
import Image from "next/image";
import {css} from "@/styled-system/css";

export default function Page({ params }: { params: { bucketId: string } }) {
    const [images, setImages] = useState<null | FileObject[]>([])
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
    useEffect(() => {
        async function getBucket() {
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
        }
        getBucket()
    },[])
    const openModal = (imageIndex:number) => {
        setSelectedImageIndex(imageIndex);
    };

    const closeModal = () => {
        setSelectedImageIndex(null);
    };

    const goToNextImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex === images!.length - 1 ? 0 : prevIndex! + 1));
    };

    const goToPrevImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? images!.length - 1 : prevIndex! - 1));
    };

    const selectedImage = selectedImageIndex !== null ? images![selectedImageIndex] : null;
    console.log(images)
    return (
        <div>
            {images?.map((image, index) => (
                <div key={index} onClick={() => openModal(index)}>
                <Image quality={100} src={process.env.NEXT_PUBLIC_CDN_URL + params.bucketId + '/images/' + image.name} alt="" width={300} height={300}/>
                </div>
                ))}
            {selectedImage && (
                <div className={css({
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                })}>
                    <div className="modal-content">
                        <button className="prev-button" onClick={goToPrevImage}>
                            Prev
                        </button>
                        <picture>
                            <source type="image/webp" srcSet={process.env.NEXT_PUBLIC_CDN_URL + params.bucketId + '/images/' + selectedImage.name}></source>
                            <Image quality={100} src={process.env.NEXT_PUBLIC_CDN_URL + params.bucketId + '/images/' + selectedImage.name} alt={selectedImage.name} width={400} height={400} />
                        </picture>
                        <button className="next-button" onClick={goToNextImage}>
                            Next
                        </button>
                        {/*<p>{selectedImage.caption}</p>*/}
                        <button className="close-button" onClick={closeModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}