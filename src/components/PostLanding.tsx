import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'

function PostLanding() {
  const data = [
    {
      id: 1,
      title: 'ปัญญาประดิษฐ์ (AI) ก้าวล้ำ',
      detail: 'ปี 2024 จะเป็นปีแห่งการพัฒนา AI อย่างก้าวกระโดด  AI จะถูกนำไปใช้ในหลากหลายแง่มุมของชีวิต  ทั้งการทำงาน ธุรกิจ การศึกษา และการดูแลสุขภาพ  เทคโนโลยี AI เช่น Generative AI  จะถูกพัฒนาต่อยอด   ส่งผลต่อระบบเครือข่ายประมวลผลแบบเอดจ์   คลาวด์ส่วนตัว   และ 5G'
    },
    {
      id: 2,
      title: 'ความยั่งยืน',
      detail: 'เทคโนโลยีสีเขียว   และแนวทางการพัฒนาที่ยั่งยืน   จะกลายเป็นหัวข้อสำคัญ   องค์กรต่างๆ   จะมุ่งเน้นไปที่การใช้เทคโนโลยีอย่างมีประสิทธิภาพ   ลดการปล่อยมลพิษ   และส่งเสริมเศรษฐกิจหมุนเวียน'
    },
    {
      id: 3,
      title: 'โลกเสมือนจริง (VR) และโลกเสมือนจริงขยายใหญ่',
      detail: 'VR   และ AR   จะถูกนำไปใช้มากขึ้นในหลากหลายธุรกิจ   เช่น   การฝึกอบรม   การศึกษา   การประชุมและการท่องเที่ยว   เทคโนโลยีเหล่านี้จะช่วยสร้างประสบการณ์ที่สมจริงและโต้ตอบได้มากขึ้น'
    }
  ]

  return (
    <div>
      {
        data.map(item => (
          <div key={item.id} className='flex flex-col justify-between bg-primary p-5 rounded-lg my-5'>
            <div className="flex flex-col justify-center">
              <h1 className="text-xl mb-4 text-white font-semibold">{item.title}</h1>
              <h3 className="text-base text-white font-normal">{item.detail}</h3>
            </div>
            <div className='flex flex-row justify-between'>
              <div>
                <button className='text-lg text-slate-800 bg-button p-3 rounded-md mt-5 border-0 hover:shadow-sm hover:shadow-yellow-200'>ชอบข่าวนี้หรือไม่</button>
                <button className='text-lg text-white bg-secondary p-3 rounded-md mt-5 mx-3 border-0 hover:shadow-sm hover:shadow-slate-300'>อ่านเพิ่มเติม</button>
              </div>
              <div className='flex flex-row justify-center items-end'>
                <p className='mx-3 text-white text-xl font-semibold'>0</p>
                <FontAwesomeIcon icon={faThumbsUp} size='2x' color='white' />
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default PostLanding