'use client'
import { css } from "@/styled-system/css";
import {useMenuContext} from "@/context/MenuContext";
import GalleryBox from "@/components/Box/GalleryBox";
import {supabase} from "@/supabase/client";
import React, {useEffect} from "react";
import {FileObject} from "@supabase/storage-js";

interface Meta {
    title:string
    meta:string
}
export default function Home() {
    const {open, handleOpen} = useMenuContext()
    const [images, setImages] = React.useState<null |  FileObject[]>(null)
    const [metaData, setMetaData] = React.useState<null | Meta[]>(null)
    useEffect(() => {
        async function getBucket() {
            const {data, error} = await supabase
                .storage.from('thumbnails').list('',{
                    limit: 3,
                    offset: 0,
                    sortBy: { column: 'name', order: 'asc' },
                })
            if(error) {
                throw error
                console.log(error)
            }
            let blockMcopeeasures = data
            const temMetaData:Meta[] = []
            for(let i = 0; i < data.length; i++) {
                try {
                    const response = await fetch(process.env.NEXT_PUBLIC_CDN_URL + 'thumbnails/' + blockMcopeeasures[i].name + '/' + blockMcopeeasures[i].name + '.json')
                    if (!response.ok) {
                        throw new Error('Network response was not ok.');
                    }

                    const data = await response.json();
                    temMetaData.push(data)
                } catch (error) {
                    break;
                    throw error
                    console.log(error)
                }
            }
            setMetaData(temMetaData)
            setImages(data)
        }
        getBucket()
    },[])
    console.log(images)
    return (
        <div
            onClick={open ? () => handleOpen() : () => {}}
            className={css({
              fontSize: "2xl",
              fontWeight: "bold",
              margin: "20px",
                md: {
                  margin:"30px"
                }
            })}
        >
          <div className={css({
              display:"grid",
              placeItems:"center",
              margin: "50px 0",
          })}>
              <h1 className={css({
                  textAlign: "center",
                  fontSize: "3rem",
                  fontWeight: "900",
                  lineHeight: "1.2",
              })}>
                  Itsuki Sato Photography
                  <span className={css({
                        fontSize: "1.4rem",
                        fontWeight: "normal",
                      margin: "10px 0 0 0",
                      display: "block",
                  })}>
                      Travel Photography
                  </span>
              </h1>
          </div>
            <div className={css({
                width: "95%",
                margin:"80px auto",
                md: {
                    margin:"120px auto",
                    width:"90%",
                }
            })}>
                <div className={css({
                    display:"f",
                    flexDirection:"column",
                })}>
                    {images?.map((data,index) => (
                        <GalleryBox key={index} reverse={index % 2 !== 0} meta={metaData![index]} link={'gallery/' + data.name} image_link={process.env.NEXT_PUBLIC_CDN_URL + 'thumbnails/' + data.name + '/' + data.name + '.jpg'}/>
                    ))}
                </div>
            </div>
        </div>
  )
}
