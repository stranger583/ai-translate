"use client"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@radix-ui/react-select'
import React, { useState } from 'react'
const langues = ["英文",
  "西班牙文",
  "法文",
  "德文",
  "義大利文",
  "葡萄牙文",
  "荷蘭文",
  "俄文",
  "日文",
  "韓文",
  "中文（簡體）",
  "中文（繁體）",
  "阿拉伯文",
  "希伯來文",
  "波蘭文",
  "瑞典文",
  "挪威文",
  "丹麥文",
  "芬蘭文",
  "希臘文",
  "土耳其文",
  "匈牙利文",
  "捷克文",
  "斯洛伐克文",
  "泰文",
  "越南文",
  "印尼文",
  "馬來文",
  "菲律賓文"]

function LanguageSelect() {
  const [translateLanguages, setTranslateLanguages] = useState(['英文', '中文（繁體'])
  const handleChangeLanguage = (value: string, idx: number) => {
    const newTranslateLanguages = [...translateLanguages]
    newTranslateLanguages[idx] = value
    setTranslateLanguages(newTranslateLanguages)
  }

  return (
    <div className='flex gap-2 w-full'>
      {translateLanguages.map((translateLanguage, index) =>
        <Select key={index} onValueChange={value => handleChangeLanguage(value, index)}>
          <SelectTrigger className="w-full grow border border-white rounded-sm p-2 h-10">
            <SelectValue placeholder="選擇語言">{translateLanguage}</SelectValue>
          </SelectTrigger>
          <SelectContent
            className='w-25 border-white rounded-sm border max-h-96 overflow-auto'
            position="popper"
            sideOffset={10}
          >
            {langues.map(langue => (
              <SelectItem
                value={langue}
                key={langue}
                className='m-2 p-2 hover:bg-slate-500 hover:outline-none rounded-sm'
              >
                {langue}
              </SelectItem>))}
          </SelectContent>
        </Select>)}
    </div>
  )


}

export default LanguageSelect
