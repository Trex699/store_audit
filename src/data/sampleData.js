// Sample Data for QA Store Audit Website
// ข้อมูลตัวอย่างทั้งหมดสำหรับเว็บไซต์

export const companyInfo = {
  companyName: 'QA Store Audit Co., Ltd.',
  address: '123 อาคารสำนักงาน ชั้น 10 ถนนสุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพฯ 1441',
  addressDetail: 'สำนักงานใหญ่',
  phone: '02-123-4567',
  email: 'info@qastoreaudit.com',
  licenses: [
    {
      id: 1,
      name: 'ใบอนุญาตประกอบกิจการ',
      description: 'ใบอนุญาตประกอบธุรกิจตามกฎหมาย',
      image: 'https://placehold.co/400x300/1a1a1a/D4A017?text=License+1',
    },
    {
      id: 2,
      name: 'ใบรับรองมาตรฐาน ISO 9001',
      description: 'ใบรับรองระบบบริหารคุณภาพ',
      image: 'https://placehold.co/400x300/1a1a1a/D4A017?text=ISO+9001',
    },
    {
      id: 3,
      name: 'ใบอนุญาตด้านความปลอดภัย',
      description: 'ใบอนุญาตด้านความปลอดภัยข้อมูล',
      image: 'https://placehold.co/400x300/1a1a1a/D4A017?text=Security+License',
    },
  ],
  map: {
    lat: 13.7234,
    lng: 100.5678,
    zoom: 15,
  },
}

export const adminCredentials = {
  email: 'admin@qastoreaudit.com',
  password: 'admin1234',
}

export const siteSettings = {
  siteName: 'QA Store Audit',
  heroTitle: 'เจ้าหน้าที่กำกับดูแลตลาดออนไลน์',
  heroSubtitle: 'Marketplace Compliance & Store Audit Specialist',
  heroDescription: 'ช่วยให้ร้านค้าของคุณผ่านเกณฑ์ตรวจสอบ ปลอดภัยจากการระงับบัญชี และพร้อมเติบโตบนแพลตฟอร์มอีคอมเมิร์ซชั้นนำ',
  contactPhone: '081-000-0000',
  contactEmail: 'contact@qastoreaudit.com',
  lineUrl: 'https://line.me/ti/p/qastoreaudit',
  lineId: '@qastoreaudit',
  facebookUrl: 'https://facebook.com/qastoreaudit',
  tiktokUrl: 'https://tiktok.com/@qastoreaudit',
  shopeeUrl: 'https://shopee.co.th',
  lazadaUrl: 'https://www.lazada.co.th',
  workingHours: 'จันทร์ - เสาร์ 9:00 - 18:00',
}

export const stats = [
  { value: '500+', label: 'ร้านค้าที่ตรวจสอบ' },
  { value: '98%', label: 'อัตราผ่านการตรวจ' },
  { value: '3 ปี', label: 'ปีประสบการณ์' },
  { value: '24 ชม.', label: 'เวลาตอบกลับ' },
]

export const skills = [
  {
    title: 'Physical Store Audit',
    description: 'ตรวจสอบมาตรฐานร้านค้า สินค้า และการจัดแสดงบนแพลตฟอร์ม',
    icon: 'store',
  },
  {
    title: 'Cyber Audit',
    description: 'ตรวจสอบความปลอดภัยข้อมูล ธุรกรรม และการละเมิดนโยบาย',
    icon: 'shield',
  },
  {
    title: 'Compliance Review',
    description: 'ตรวจสอบการปฏิบัติตามกฎหมายและข้อกำหนดของแพลตฟอร์ม',
    icon: 'clipboard',
  },
  {
    title: 'Risk Assessment',
    description: 'ประเมินความเสี่ยงและจัดทำแผนป้องกันปัญหา',
    icon: 'alert',
  },
]

export const services = [
  {
    id: 1,
    name: 'ตรวจสอบร้านค้า (Store Audit)',
    price: '฿2,500',
    description: 'ตรวจสอบมาตรฐานร้านค้า สินค้า และการจัดแสดง พร้อมรายงานผลและแนวทางปรับปรุง',
    features: [
      'ตรวจสอบข้อมูลร้านค้า',
      'วิเคราะห์สินค้าที่ผิดนโยบาย',
      'รายงานผลการตรวจสอบ',
      'คำแนะนำการปรับปรุง',
    ],
  },
  {
    id: 2,
    name: 'ตรวจสอบความปลอดภัย (Cyber Audit)',
    price: '฿3,500',
    description: 'ตรวจสอบความปลอดภัยข้อมูล ธุรกรรม และการละเมิดนโยบายของแพลตฟอร์ม',
    features: [
      'ตรวจสอบการละเมิดนโยบาย',
      'วิเคราะห์ความเสี่ยง',
      'ตรวจสอบการทำธุรกรรม',
      'แผนป้องกันปัญหา',
    ],
  },
  {
    id: 3,
    name: 'แพ็กเกจครบวงจร (Full Package)',
    price: '฿5,000',
    description: 'บริการตรวจสอบครบทุกด้าน ทั้งร้านค้า ความปลอดภัย และการปฏิบัติตามกฎหมาย',
    features: [
      'ตรวจสอบร้านค้า + ความปลอดภัย',
      'รายงานผลครบถ้วน',
      'ปรึกษาการปรับปรุง',
      'ติดตามผล 30 วัน',
    ],
  },
]

export const portfolioProjects = [
  {
    id: 1,
    title: 'ร้านเสื้อผ้าแฟชั่น - แก้ไขนโยบายสินค้า',
    category: 'Store Audit',
    beforeImg: 'https://placehold.co/600x400/1a1a1a/D4A017?text=Before',
    afterImg: 'https://placehold.co/600x400/D4A017/000000?text=After',
    description: 'ร้านค้าถูกระงับเนื่องจากสินค้าผิดนโยบาย ปรับปรุงแล้วกลับมาขายได้ใน 3 วัน',
    isPublished: true,
  },
  {
    id: 2,
    title: 'ร้านเครื่องประดับ - ป้องกันการละเมิดลิขสิทธิ์',
    category: 'Compliance',
    beforeImg: 'https://placehold.co/600x400/1a1a1a/D4A017?text=Before',
    afterImg: 'https://placehold.co/600x400/D4A017/000000?text=After',
    description: 'ป้องกันการถูกระงับบัญชีจากการละเมิดลิขสิทธิ์ของแบรนด์เสื้อผ้า',
    isPublished: true,
  },
  {
    id: 3,
    title: 'ร้านอาหาร - ตรวจสอบความปลอดภัยข้อมูล',
    category: 'Cyber Audit',
    beforeImg: 'https://placehold.co/600x400/1a1a1a/D4A017?text=Before',
    afterImg: 'https://placehold.co/600x400/D4A017/000000?text=After',
    description: 'เจอช่องโหว่ความปลอดภัยของข้อมูลลูกค้า ปรับปรุงระบบแล้วปลอดภัย',
    isPublished: true,
  },
  {
    id: 4,
    title: 'ร้านเล็กๆ - เตรียมเอกสารใบอนุญาต',
    category: 'Compliance',
    beforeImg: 'https://placehold.co/600x400/1a1a1a/D4A017?text=Before',
    afterImg: 'https://placehold.co/600x400/D4A017/000000?text=After',
    description: 'ช่วยเตรียมเอกสารใบอนุญาตสำหรับร้านค้าอาหารออนไลน์',
    isPublished: true,
  },
]

export const articles = [
  {
    id: 1,
    title: '5 สาเหตุที่ร้านค้าถูก Shopee ระงับบัญชี',
    slug: '5-reasons-shopee-suspend',
    content: `ร้านค้าอีคอมเมิร์ซหลายร้านประสบปัญหาถูกแพลตฟอร์มระงับบัญชีโดยไม่ทันตั้งตัว

## 1. สินค้าผิดนโยบาย
สินค้าที่ขายผิดนโยบายของแพลตฟอร์ม เช่น สินค้าละเมิดลิขสิทธิ์ สินค้าต้องห้าม หรือสินค้าที่ไม่ได้รับอนุญาต

## 2. ราคาสินค้าผิดปกติ
การตั้งราคาสินค้าต่ำหรือสูงผิดปกติอย่างน่าสงสัย

## 3. รีวิวปลอม
การทำรีวิวปลอมหรือการดำเนินการที่ผิดนโยบายเพื่อเพิ่มคะแนนร้านค้า

## 4. ข้อมูลร้านค้าไม่ถูกต้อง
ข้อมูลร้านค้าที่ไม่ตรงกับความเป็นจริงหรือไม่สมบูรณ์

## 5. ละเมิดเงื่อนไขการขาย
การละเมิดเงื่อนไขการขายที่แพลตฟอร์มกำหนดไว้

## วิธีป้องกัน
- อ่านนโยบายของแพลตฟอร์มให้ละเอียด
- ตรวจสอบสินค้าก่อนลงขาย
- รักษาข้อมูลร้านค้าให้ถูกต้อง
- ติดตามกฎระเบียบอย่างสม่ำเสมอ`,
    coverImg: 'https://placehold.co/800x400/1a1a1a/D4A017?text=Article+1',
    isPublished: true,
    createdAt: '2024-01-15',
  },
  {
    id: 2,
    title: 'วิธีเลือกใช้ LINE OA อย่างถูกนโยบาย Lazada',
    slug: 'line-oa-lazada-compliance',
    content: `LINE OA เป็นเครื่องมือสำคัญสำหรับร้านค้าอีคอมเมิร์ซ แต่ต้องใช้อย่างถูกนโยบาย

## ข้อดีของ LINE OA
- สื่อสารกับลูกค้าได้รวดเร็ว
- ส่งโปรโมชั่นได้ทันที
- จัดการคำสั่งซื้อสะดวก

## ข้อควรระวัง
- อย่าสปามข้อความ
- อย่าใช้ LINE OA เพื่อหลบเลี่ยงระบบของแพลตฟอร์ม
- ปฏิบัติตามนโยบายการตลาดของแพลตฟอร์ม

## แนวทางปฏิบัติ
- ใช้ LINE OA เพื่อบริการลูกค้าเท่านั้น
- ไม่ใช้เพื่อขายสินค้านอกระบบ
- รักษาข้อมูลลูกค้าให้ปลอดภัย`,
    coverImg: 'https://placehold.co/800x400/1a1a1a/D4A017?text=Article+2',
    isPublished: true,
    createdAt: '2024-02-20',
  },
  {
    id: 3,
    title: 'คู่มือเตรียมเอกสารใบอนุญาตสำหรับร้านค้าออนไลน์',
    slug: 'license-guide',
    content: `เอกสารใบอนุญาตที่ร้านค้าออนไลน์ต้องเตรียม

## ใบอนุญาตที่จำเป็น
1. ใบอนุญาตประกอบกิจการ
2. ใบอนุญาตสำหรับสินค้าเฉพาะ
3. ใบรับรองมาตรฐานสินค้า

## ขั้นตอนการเตรียม
- ตรวจสอบความถูกต้องของเอกสาร
- เตรียมสำเนาเอกสารทุกฉบับ
- อัปโหลดให้ถูกต้องตามรูปแบบ

## คำแนะนำ
- ตรวจสอบวันหมดอายุเอกสาร
- เก็บสำเนาสำรองไว้
- อัปเดตเอกสารก่อนหมดอายุ`,
    coverImg: 'https://placehold.co/800x400/1a1a1a/D4A017?text=Article+3',
    isPublished: true,
    createdAt: '2024-03-10',
  },
]

export const testimonials = [
  {
    id: 1,
    clientName: 'คุณสมชาย',
    reviewText: 'บริการดีมากครับ ร้านเราถูกระงับมา 2 สัปดาห์ แต่พอมาปรึกษาที่นี่แล้วกลับมาเปิดขายได้ใน 3 วัน',
    rating: 5,
    avatarUrl: 'https://placehold.co/100x100/1a1a1a/D4A017?text=SC',
  },
  {
    id: 2,
    clientName: 'คุณวิภา',
    reviewText: 'เป็นงานที่เป็นมืออาชีพมากค่ะ ตรวจสอบละเอียด รายงานชัดเจน และมีคำแนะนำที่นำไปใช้ได้จริง',
    rating: 5,
    avatarUrl: 'https://placehold.co/100x100/1a1a1a/D4A017?text=WP',
  },
  {
    id: 3,
    clientName: 'คุณธนกร',
    reviewText: 'ประทับใจมากครับ ช่วยเหลือตลอดกระบวนการ ตั้งแต่การตรวจสอบจนถึงการแก้ไขปัญหา',
    rating: 5,
    avatarUrl: 'https://placehold.co/100x100/1a1a1a/D4A017?text=TK',
  },
  {
    id: 4,
    clientName: 'คุณมาลี',
    reviewText: 'ราคาสมเหตุสมผลมากค่ะ คุณภาพงานเกินราคา ประทับใจในความเอาใจใส่',
    rating: 4,
    avatarUrl: 'https://placehold.co/100x100/1a1a1a/D4A017?text=ML',
  },
]

export const contactMessages = [
  {
    id: 1,
    senderName: 'คุณทดสอบ',
    senderEmail: 'test@example.com',
    message: 'สอบถามเรื่องบริการตรวจสอบร้านค้าครับ ร้านเรากำลังจะถูกระงับ',
    status: 'new',
    createdAt: '2024-03-15T10:30:00',
  },
  {
    id: 2,
    senderName: 'คุณสมหญิง',
    senderEmail: 'somying@email.com',
    message: 'ต้องการปรึกษาเรื่องนโยบายสินค้าค่ะ ร้านเราขายเสื้อผ้าแฟชั่น',
    status: 'read',
    createdAt: '2024-03-14T14:20:00',
  },
]

export const auditChecklist = [
  {
    id: 1,
    question: 'ร้านค้าของคุณมีข้อมูลที่ถูกต้องครบถ้วนหรือไม่?',
    category: 'ข้อมูลร้านค้า',
  },
  {
    id: 2,
    question: 'สินค้าทั้งหมดในร้านผ่านนโยบายของแพลตฟอร์มหรือไม่?',
    category: 'นโยบายสินค้า',
  },
  {
    id: 3,
    question: 'ร้านค้าของคุณมีใบอนุญาตที่จำเป็นครบถ้วนหรือไม่?',
    category: 'เอกสารรับรอง',
  },
  {
    id: 4,
    question: 'ระบบรับชำระเงินของคุณปลอดภัยหรือไม่?',
    category: 'ความปลอดภัย',
  },
  {
    id: 5,
    question: 'คุณมีแผนรับมือกับปัญหาที่อาจเกิดขึ้นหรือไม่?',
    category: 'การบริหารความเสี่ยง',
  },
  {
    id: 6,
    question: 'ร้านค้าของคุณมีรีวิวที่ดีและไม่มีรีวิวปลอมหรือไม่?',
    category: 'รีวิวลูกค้า',
  },
  {
    id: 7,
    question: 'คุณติดตามกฎระเบียบใหม่ๆ ของแพลตฟอร์มอยู่เสมอหรือไม่?',
    category: 'การปฏิบัติตามกฎ',
  },
  {
    id: 8,
    question: 'ร้านค้าของคุณมีนโยบายการคืนสินค้าที่ชัดเจนหรือไม่?',
    category: 'นโยบายร้านค้า',
  },
]
