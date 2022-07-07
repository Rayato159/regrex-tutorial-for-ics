import { useState, useEffect } from "react"

// Icons
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai"

// Components
import { ParagraphTitle } from "./components/ParagraphTitle"
import { CodeBlocks } from "./components/CodeBlock"


export const App = () => {
  const [firstQuestion, setFirstQuestion] = useState("")
  const [secondQuestion, setSecondQuestion] = useState("")
  const [thirdQuestion, setThirdQuestion] = useState("")

  const [checked, setChecked] = useState(false)

  const [firstQuestionCheck, setFirstQuestionCheck] = useState(false)
  const [secondQuestionCheck, setSecondQuestionCheck] = useState(false)
  const [thirdQuestionCheck, setThirdQuestionCheck] = useState(false)

  const [point, setPoint] = useState(0)

  const tableOfContents = [
    "A Brief History of Regular Expression",
    "Regular Expression In Nutshell",
    "Patterns of Regular Expression",
    "Quiz",
  ]

  const tableOfContentIds = [
    "table-of-content",
    "nutshell",
    "patterns",
    "quiz",
  ]

  const onClickHandle = (e) => {
    e.preventDefault()
    firstQuestionCheckHandle(firstQuestion)
    secondQuestionCheckHandle(secondQuestion)
    thirdQuestionCheckHandle(thirdQuestion)
    setChecked(true)
  }

  const firstQuestionCheckHandle = (pattern) => {
    const anwser = "www.ics.com"
    const checker = `<a href="www.ics.com">Click here!</a>`.match(new RegExp(pattern))[0]
    if (anwser === checker) {
      setFirstQuestionCheck(true)
    }
  }

  const secondQuestionCheckHandle = (pattern) => {
    const anwser = "0123456789"
    const checker = `Hello0123456789`.match(new RegExp(pattern))[0]
    if (anwser === checker) {
      setSecondQuestionCheck(true)
    }
  }

  const thirdQuestionCheckHandle = (pattern) => {
    const anwser = "test@gmail.com"
    const checker = `to:test@gmail.com.`.match(new RegExp(pattern))[0]
    if (anwser === checker) {
      setThirdQuestionCheck(true)
    }
  }

  const onResetHandle = (e) => {
    e.preventDefault()
    setFirstQuestionCheck(false)
    setSecondQuestionCheck(false)
    setThirdQuestionCheck(false)
    setPoint(0)
    setChecked(false)
  }

  const addPoint = () => {
    let total = 0
    if (firstQuestionCheck) {
      total++
    }
    if (secondQuestionCheck) {
      total++
    }
    if (thirdQuestionCheck) {
      total++
    }
    setPoint(total)
  }

  useEffect(() => {
    if (checked) {
      addPoint()
    }
  }, [checked])

  const historyRefLinks = [
    "https://medium.com/@minisha.mit/regular-expression-part-1-8d75128f6274",
    "https://en.wikipedia.org/wiki/Warren_Sturgis_McCulloch",
    "https://en.wikipedia.org/wiki/Walter_Pitts",
    "https://en.wikipedia.org/wiki/Stephen_Cole_Kleene",
    "https://en.wikipedia.org/wiki/Ken_Thompson",
  ]

  return (
    <div className="App">
      <div className="mx-auto max-w-5xl p-4">
        {/* Header */}
        <div className="flex flex-col space-y-4 bg-cyan-800 text-white px-6 py-8 rounded-lg">
          <div className="flex flex-col space-y-2">
            <div>
              <div className="text-xl font-semibold md:text-2xl">📝 Regular Expression Tutorial</div>
            </div>
            <div>
              <div className="text-sm md:text-md font-semibold">For iCreativeSystems Co.,Ltd</div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col space-y-10 pt-4">
          <div className="flex flex-col space-y-3">
            <div>
                <ParagraphTitle props={'🧑‍💻 Instructor'}/>
            </div>
            <div className="flex flex-col space-y-1 pl-3">
              <div className="font-semibold text-md md:text-md">
                Ruangyot Nanchiang (Lookhin)
              </div>
              <div className="text-sm md:text-sm">
                Backend Developer
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="flex flex-col space-y-3">
            <div>
              <ParagraphTitle props={'📑 Table of Contents'}/>
            </div>
            <div className="text-md md:text-md pl-3">
              <ul>
                {
                  tableOfContents.map((content, i) => {
                    return (
                      <li className="font-semibold text-gray-500 hover:text-gray-800" key={i}><a href={"#"+tableOfContentIds[i]}>- {content}</a></li>
                    )
                  })
                }
              </ul>
            </div>
          </div>

          {/* Paragraph */}
          <div className="flex flex-col space-y-3">
            <div id="table-of-content">
                <ParagraphTitle props={'📖 A Brief History of Regular Expression'}/>
            </div>
            <div className="text-md md:text-md pl-3">
              ความเป็นมาของ <strong>Regular Expression</strong> นั้น เริ่มต้นมาจากปี <strong>ค.ศ. 1943</strong> ได้มีนักประสาทวิทยานามว่า <strong>Warren S. McCulloch</strong> และ <strong>Walter Pitts</strong>
              คิดค้นโมเดลที่จะอธิบายการทำงานระบบประสาทของมนุษย์
            </div>
            <div className="flex flex-col space-y-1 text-md md:text-md py-3 pl-3">
              <div>
                <img className="w-80 h-auto rounded-lg" src="https://machinelearningknowledge.ai/wp-content/uploads/2019/11/McCulloch-Pitts-1.jpg" />
                <div className="text-xs mt-2">
                  Warren S. McCulloch และ Walter Pitts
                </div>
              </div>
            </div>
            
            <div className="text-md md:text-md pl-3">
              ต่อมา ในปี <strong>ค.ศ. 1956</strong> ได้มีนักคณิตศาสตร์นามว่า <strong>Stephen Kleene</strong> ได้พยายามอธิบายโมเดลของ Warren S. McCulloch และ Walter Pitts
              ให้อยู่ในรูปของสัญลักษณ์คณิตศาสตร์พีชคณิต <strong>โดยเขาเรียกมันว่า "Regular Expression"</strong> กล่าวโดยในคือ การมองอะไรที่ซับซ้อน
              ให้เป็น <strong>Format</strong> หรือ <strong>Pattern</strong> ที่ชัดเจน
            </div>
            
            <div className="text-md md:text-md pl-3">
              ในเวลาอีกนานต่อมา ในปี <strong>ค.ศ. 1968</strong> ยุคที่ Computer Science ถือกำเนิดขึ้น <strong>ก็ได้มี Computer Designer ท่านหนึ่ง นามว่า Ken Thompson
              ได้ทำการคิดค้น วิธีการค้นหากลุ่มของตัวอักษร หรือวิธีการแทนที่กลุ่มตัวอักษร ไว้สำหรับใช้งานกับ Text Editor</strong> โดยเพียงแค่ Pattern เข้าไป
              โดยเรียกวิธีการเช่นนี้ว่า <strong>"Regular Expression"</strong> ซึ่งได้แรงบันดาลใจมากจาก <strong>Stephen Kleene</strong> แค่นี้ยังไม่พอ เขายังเป็นผู้ที่ให้กำเนิดระบบปฏิบัติการในรูปแบบ <strong>Unix</strong>
              ด้วยเช่นกัน
            </div>

            {/* Image */}
            <div className="flex space-x-4 md:space-x-10 text-md md:text-md py-3 pl-3">
              <div>
                <img className="w-auto h-48 md:h-64 rounded-lg" src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Kleene.jpg" />
                <div className="text-xs mt-2">
                  Stephen Kleene
                </div>
              </div>
              <div>
                <img className="w-auto h-48 md:h-64 rounded-lg" src="https://www.unixmen.com/wp-content/uploads/2015/10/thompson01.jpg" />
                <div className="text-xs mt-2">
                  Ken Thompson
                </div>
              </div>
            </div>
            <div className="text-md md:text-md pl-3">
              Reference:
              <ul>
                {
                  historyRefLinks.map((historyRefLink, i) => {
                    return (
                      <li key={i} className="text-sm text-blue-400 hover:text-blue-600 cursor-pointer">{historyRefLink}</li>
                    )
                  })
                }
              </ul>
            </div>
          </div>

          <div id="nutshell" className="flex flex-col space-y-3">
            <div>
              <ParagraphTitle props={'🥜 Regular Expression In Nutshell'}/>
            </div>
            <div className="text-md md:text-md pl-3">
              สรุปง่ายๆคือ <strong>Regular Expression</strong> หรือ การแสดงออกอย่างปกติ เฮ้ย ไม่ใช่!! จริงๆแล้วมันก็คือเครื่องมือชนิดหนึ่ง
              ที่จะทำให้เราสามารถที่จะทำการ <strong>Search</strong> หรือ <strong>Repalce</strong> กลุ่มของ <strong>String</strong>
              ได้จาก <strong>Pattern</strong> นั่นเอง
            </div>
          </div>

          <div id="patterns" className="flex flex-col space-y-4">
            <div>
              <ParagraphTitle props={'🧩 Patterns of Regular Expression'}/>
            </div>
            <div className="text-md md:text-md pl-3">
              แน่นอนถ้าอ่านมาถึงตรงนี้หลายคนมักจะเกิดคำถามแน่นอนว่า <strong>Pattern</strong> เนี่ย มันเป็นยังไงล่ะ? มันก็อาจจะมีหน้าตาแปลกประหลาดเล็กน้อยนะ
              มันก็จะมีหน้าตาดังด้านล่าง (จะยกตัวอย่างเฉพาะที่ใช้กันบ่อยๆ)
            </div>
            
            <div className="flex flex-col space-y-2 shadow-lg rounded-lg bg-cyan-800 text-white p-4">
              <div className="font-semibold text-md md:text-md pl-3">
                Any
              </div>
              <div className="text-sm md:text-sm pl-3">
                อะไรก็ได้ ที่ไม่ใช่บรรทัดใหม่ (กรณีที่มี * มาต่อท้ายหมายถึงว่า ให้ต่อไปแบบนั้นเรื่อยๆ จนกว่าจะมี pattern ใหม่มาต่อ)
              </div>
              <div className="pl-3 text-sm">
                <CodeBlocks props={`.`}/>
              </div>
              <div className="pl-3 text-sm">
              <div className=" text-md md:text-md pl-3">
                เช่น แบบข้างบนนี้คือ any characters ยาวๆ
              </div>
                <CodeBlocks props={`.*`}/>
              </div>
            </div>
              
            <div className="flex flex-col space-y-2 shadow-lg rounded-lg bg-cyan-800 text-white p-4">
              <div className="font-semibold text-md md:text-md pl-3">
                Word, Number, White space
              </div>
              <div className="text-sm md:text-sm pl-3">
                เอา word, number, white space
              </div>
              <div className="pl-3 text-sm">
                <CodeBlocks props={`\\w \\d \\s`}/>
              </div>
              <div className="font-semibold text-sm md:text-sm pl-3">
                Example
              </div>
              <div className="pl-3 text-sm">
                <CodeBlocks props={`abc 123`}/>
              </div>
              <div className="pl-3 text-sm">
                <CodeBlocks props={`\\w => abc123`}/>
              </div>
              <div className="pl-3 text-sm">
                <CodeBlocks props={`\\d => 123`}/>
              </div>
              <div className="pl-3 text-sm">
                <CodeBlocks props={`\\s => (White Space)`}/>
              </div>
            </div>
            
            <div className="flex flex-col space-y-2 shadow-lg rounded-lg bg-cyan-800 text-white p-4">
              <div className="font-semibold text-md md:text-md pl-3">
                Not Word, Number, White space
              </div>
              <div className="text-sm md:text-sm pl-3">
                ไม่เอา word, number, white space (ตัวพิมพ์ใหญ่นะ อย่าลืม!!!)
              </div>
              <div className="pl-3 text-sm">
                <CodeBlocks props={`\\W \\D \\S`}/>
              </div>
              <div className="font-semibold text-sm md:text-sm pl-3">
                Example
              </div>
              <div className="pl-3 text-sm">
                <CodeBlocks props={`abc 123`}/>
              </div>
              <div className="pl-3 text-sm">
                <CodeBlocks props={`\\W => (White Space)`}/>
              </div>
              <div className="pl-3 text-sm">
                <CodeBlocks props={`\\D => abc `}/>
              </div>
              <div className="pl-3 text-sm">
                <CodeBlocks props={`\\S => abc123`}/>
              </div>
            </div>
            
            <div className="flex flex-col space-y-2 shadow-lg rounded-lg bg-cyan-800 text-white p-4">
              <div className="font-semibold text-md md:text-md pl-3">
                Start With, End with
              </div>
              <div className="text-sm md:text-sm pl-3">
                ^ หมายถึงเริ่มด้วย และ $ หมายถึงจบด้วย
              </div>
              <div className="pl-3 text-sm">
                <CodeBlocks props={`^abc$`}/>
              </div>
              <div className="font-semibold text-sm md:text-sm pl-3">
                Example
              </div>
              <div className="pl-3 text-sm">
                <CodeBlocks props={`www.ics.com`}/>
              </div>
              <div className="pl-3 text-sm">
                <CodeBlocks props={`^www.*com$ => www.ics.com`}/>
              </div>
            </div>
              
            <div className="flex flex-col space-y-2 shadow-lg rounded-lg bg-cyan-800 text-white p-4">
              <div className="font-semibold text-md md:text-md pl-3">
                Accept abc
              </div>
              <div className="text-sm md:text-sm pl-3">
                Accept เอาตัวอักษรตามในวงเล็บ เช่นในนี้ abc ก็เอาเฉพาะ abc ***ไม่ต้องเรียงติดกันก็ได้
              </div>
              <div className="pl-3 text-sm">
                <CodeBlocks props={`[abc]`}/>
              </div>
              <div className="font-semibold text-sm md:text-sm pl-3">
                Example
              </div>
              <div className="pl-3 text-sm">
                <CodeBlocks props={`afoxybpoxyb`}/>
              </div>
              <div className="pl-3 text-sm">
                <CodeBlocks props={`[abc] => ab`}/>
              </div>
            </div>

            <div className="flex flex-col space-y-2 shadow-lg rounded-lg bg-cyan-800 text-white p-4">
              <div className="font-semibold text-md md:text-md pl-3">
                Accept abc or def
              </div>
              <div className="text-sm md:text-sm pl-3">
                เอา abc หรือ def ก็ได้
              </div>
              <div className="pl-3 text-sm">
                <CodeBlocks props={`[abc|def]`}/>
              </div>
              <div className="font-semibold text-sm md:text-sm pl-3">
                Example
              </div>
              <div className="pl-3 text-sm">
                <CodeBlocks props={`atbtctdtetf`}/>
              </div>
              <div className="pl-3 text-sm">
                <CodeBlocks props={`[abc|def] => abcdef`}/>
              </div>
            </div>
            
            <div className="flex flex-col space-y-2 shadow-lg rounded-lg bg-cyan-800 text-white p-4">
              <div className="font-semibold text-md md:text-md pl-3">
                Except abc
              </div>
              <div className="text-sm md:text-sm pl-3">
                ต่างกับอันบนนิดหน่อย ก็คือ ไม่เอาตัวอักษรที่อยู่ในวงเล็บ ถ้ามีการเติม ^ ไว้ข้างหน้า
              </div>
              <div className="pl-3 text-sm">
                <CodeBlocks props={`[^abc]`}/>
              </div>
              <div className="font-semibold text-sm md:text-sm pl-3">
                Example
              </div>
              <div className="pl-3 text-sm">
                <CodeBlocks props={`abcdef`}/>
              </div>
              <div className="pl-3 text-sm">
                <CodeBlocks props={`[^abc] => def`}/>
              </div>
            </div>
            
            <div className="flex flex-col space-y-2 shadow-lg rounded-lg bg-cyan-800 text-white p-4">
              <div className="font-semibold text-md md:text-md pl-3">
                Capture Group
              </div>
              <div className="text-sm md:text-sm pl-3">
                จะคล้ายๆกับวงเล็บสี่เหลี่ยม แต่อันนี้จะเรียกว่า คือเอาตัวที่มี abc เรียงติดกัน
              </div>
              <div className="pl-3 text-sm">
                <CodeBlocks props={`(abc)`}/>
              </div>
              <div className="font-semibold text-sm md:text-sm pl-3">
                Example
              </div>
              <div className="pl-3 text-sm">
                <CodeBlocks props={`javascript golang rust`}/>
              </div>
              <div className="pl-3 text-sm">
                <CodeBlocks props={`(rust) => rust`}/>
              </div>
            </div>

            <div className="flex flex-col space-y-2 shadow-lg rounded-lg bg-cyan-800 text-white p-4">
              <div className="font-semibold text-md md:text-md pl-3">
                Group abc or def
              </div>
              <div className="text-sm md:text-sm pl-3">
                เอากลุ่ม abc หรือไม่ก็ def
              </div>
              <div className="pl-3 text-sm">
                <CodeBlocks props={`(abc|def)`}/>
              </div>
              <div className="font-semibold text-sm md:text-sm pl-3">
                Example
              </div>
              <div className="pl-3 text-sm">
                <CodeBlocks props={`javascript golang rust`}/>
              </div>
              <div className="pl-3 text-sm">
                <CodeBlocks props={`(javascript|rust) => javascript rust`}/>
              </div>
            </div>

            <div className="flex flex-col space-y-2 shadow-lg rounded-lg bg-cyan-800 text-white p-4">
              <div className="font-semibold text-md md:text-md pl-3">
                Positive Lookahead
              </div>
              <div className="text-sm md:text-sm pl-3">
                ต่อจากนี้ไปการมองข้างหน้าจะทรงประสิทธิภาพ (หมายความว่า หลังจากนี้ไป มันจะจับแต่ตัวข้างหน้า Group นี้เท่านั้น!!!)
              </div>
              <div className="pl-3 text-sm">
                <CodeBlocks props={`(?=abc)`}/>
              </div>
              <div className="font-semibold text-sm md:text-sm pl-3">
                Example
              </div>
              <div className="pl-3 text-sm">
                <CodeBlocks props={`foobarbarfoo`}/>
              </div>
              <div className="pl-3 text-sm">
                <CodeBlocks props={`bar(?=foo) => bar`}/>
              </div>
            </div>

            <div className="flex flex-col space-y-2 shadow-lg rounded-lg bg-cyan-800 text-white p-4">
              <div className="font-semibold text-md md:text-md pl-3">
                Nagative Lookahead
              </div>
              <div className="text-sm md:text-sm pl-3">
                ต่อจากนี้ไปการมองข้างออกไปข้างหลังจะทรงประสิทธิภาพ (หมายความว่า หลังจากนี้ไป มันจะจับแต่ตัวข้างหลัง Group นี้เท่านั้น!!!)
              </div>
              <div className="pl-3 text-sm">
                <CodeBlocks props={`(?!abc)`}/>
              </div>
              <div className="font-semibold text-sm md:text-sm pl-3">
                Example
              </div>
              <div className="pl-3 text-sm">
                <CodeBlocks props={`foobarbarfoo`}/>
              </div>
              <div className="pl-3 text-sm">
                <CodeBlocks props={`bar(?!foo) => bar`}/>
              </div>
            </div>

            <div className="flex flex-col space-y-2 shadow-lg rounded-lg bg-cyan-800 text-white p-4">
              <div className="font-semibold text-md md:text-md pl-3">
                Exactly ten, two or more
              </div>
              <div className="text-sm md:text-sm pl-3">
                จำกัดจำนวนของกลุ่มตัวอักษร
              </div>
              <div className="pl-3 text-sm">
                <CodeBlocks props={`a{10}, a{2,}`}/>
              </div>
              <div className="font-semibold text-sm md:text-sm pl-3">
                Example
              </div>
              <div className="pl-3 text-sm">
                <CodeBlocks props={`0123456789`}/>
              </div>
              <div className="pl-3 text-sm">
                <CodeBlocks props={`\d{10} => 0123456789`}/>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <div className="font-semibold text-md md:text-md pl-3">
                playground: <a className="text-sm text-blue-400 hover:text-blue-600 cursor-pointer" href="https://regexr.com/6p790">https://regexr.com/6p790</a>
              </div>
            </div>

            <div className="flex flex-col space-y-2 shadow-lg rounded-lg bg-cyan-800 text-white p-4">
              <div className="font-semibold text-md md:text-md pl-3">
                General Email Regex (RFC 5322 Official Standard)
              </div>
              <div className="pl-3 text-sm">
                <CodeBlocks props={`(?:[a-z0-9!#$%&'*+/=?^_\`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_\`{|}~-]+)*|"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])`}/>
              </div>
            </div>

          </div>

          <div id="quiz" className="flex flex-col space-y-3">
            <div>
              <ParagraphTitle props={'✏️ Quiz'}/>
            </div>
            <div className="font-semibold text-md md:text-md pl-4">
                จงใช้ความรู้เรื่อง Regular Expression ในการ Search หากลุ่มคำที่กำหนด
            </div>
            <form className="flex flex-col space-y-2 pl-4 py-3" type="submit">
              <div className="text-md md:text-md py-2">
                1. <strong>{`<a href="www.ics.com">Click here!</a>`}</strong> หา Link ของ www.ics.com
              </div>
              <input onChange={(e) => setFirstQuestion(e.target.value)} className={firstQuestionCheck? `border border-green-500 px-2 py-1 text-md"`: `border border-black px-2 py-1 text-md"`} type="text" placeholder="Input a pattern here."/>
              {
                (firstQuestionCheck && checked) &&
                <label><AiOutlineCheck className="text-green-500 text-2xl"/></label>
              }
              {
                (!firstQuestionCheck && checked) &&
                <label><AiOutlineClose className="text-red-500 text-2xl"/></label>
              }

              <div className="text-md md:text-md py-2">
                2. <strong>"Hello0123456789"</strong> หา เบอร์โทร
              </div>
              <input onChange={(e) => setSecondQuestion(e.target.value)} className={secondQuestionCheck? `border border-green-500 px-2 py-1 text-md"`: `border border-black px-2 py-1 text-md"`} type="text" placeholder="Input a pattern here."/>
              {
                (secondQuestionCheck && checked) &&
                <label><AiOutlineCheck className="text-green-500 text-2xl"/></label>
              }
              {
                (!secondQuestionCheck && checked) &&
                <label><AiOutlineClose className="text-red-500 text-2xl"/></label>
              }

              <div className="text-md md:text-md py-2">
                3. <strong>"to:test@gmail.com."</strong> หา Email
              </div>
              <input onChange={(e) => setThirdQuestion(e.target.value)} className={thirdQuestionCheck? `border border-green-500 px-2 py-1 text-md"`: `border border-black px-2 py-1 text-md"`} type="text" placeholder="Input a pattern here."/>
              {
                (thirdQuestionCheck && checked) &&
                <label><AiOutlineCheck className="text-green-500 text-2xl"/></label>
              }
              {
                (!thirdQuestionCheck && checked) &&
                <label><AiOutlineClose className="text-red-500 text-2xl"/></label>
              }
              {
                checked &&
                <div className={point===3? "border border-green-500 p-4 bg-green-200":"border border-red-500 p-4 bg-red-200"}>
                  Your point is {point}.
                </div>
              }
              
              <div className="text-md md:text-md py-6">
                {
                  checked?
                  <button onClick={(e) => onResetHandle(e)} className="bg-green-500 hover:bg-green-800 p-2 w-full text-white font-semibold">Play Again</button>
                  :
                  <button onClick={onClickHandle} className="bg-slate-500 hover:bg-slate-800 p-2 w-full text-white font-semibold">Done</button>
                }
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}
