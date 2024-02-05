'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import Image from "next/image";
import AppBar from "./componets/AppBar";
import Drawable from "./componets/Drawable"
import * as React from "react";

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]


export default function Home() {
    const [drawableOpen, setDrawableOpen] = useState(false)


    const appbarDwrableOpenHandeler = (event: React.MouseEvent<HTMLElement>) => {
        console.log("appbarDwrableOpenHandeler")
        setDrawableOpen(true)
    };

    const drawableCloseHandeler = async() => {
        console.log("drawableCloseHandeler")
        setDrawableOpen(false)
    }

    return (
        <main>
            <AppBar onToggle={appbarDwrableOpenHandeler} />
            <Drawable onClose={drawableCloseHandeler} isOpen={drawableOpen}/>
        </main>
    )
}
