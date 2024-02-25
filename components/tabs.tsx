"use client"
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs'
import React from 'react'
import { Textarea } from './ui/textarea'

function TranslateTabs() {
    return (
        <Tabs defaultValue="account" className="w-full h-full flex flex-col">
            <div className='grow '>
                <TabsContent value="文字">
                    <Textarea className="resize-none bg-zinc-900 focus:outline-none border-0" />
                </TabsContent>
                <TabsContent value="錄音">錄音</TabsContent>
                <TabsContent value="檔案">檔案</TabsContent>
            </div>
            <TabsList className='flex justify-around items-center h-10 gap-4 mx-2 my-4'>
                <TabsTrigger className='grow h-full p-2 bg-zinc-800 rounded-sm' value="文字">文字</TabsTrigger>
                <TabsTrigger className="grow h-full p-2 bg-zinc-800 rounded-sm" value="錄音">錄音</TabsTrigger>
                <TabsTrigger className="grow h-full p-2 bg-zinc-800 rounded-sm" value="檔案">檔案</TabsTrigger>
            </TabsList>
        </Tabs>
    )
}

export default TranslateTabs
