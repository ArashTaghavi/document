/** @format */

import { Bold, Card, Code, Table } from '@/app/Components/common'

export default function Spec() {
  return (
    <Card title='تاثیرات RAM, VRAM (GPU) و CPU در اجرای مدل ها'>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>قطعه</Table.HeaderCell>
            <Table.HeaderCell>نقش در اجرای مدل</Table.HeaderCell>
            <Table.HeaderCell>دلیل</Table.HeaderCell>
            <Table.HeaderCell>مثال عددی (مدل 7B Q4)</Table.HeaderCell>
            <Table.HeaderCell>نمونه رفتار</Table.HeaderCell>
          </Table.Row>
        </Table.Head>

        <Table.Body>
          <Table.Row>
            <Table.Cell>RAM</Table.Cell>
            <Table.Cell>شرط اجرای مدل</Table.Cell>
            <Table.Cell>مدل باید کامل داخل حافظه لود شود</Table.Cell>
            <Table.Cell>نیاز ≈ 4GB</Table.Cell>
            <Table.Cell>اگر RAM=8GB → اجرا ✔ / اگر RAM=2GB → اجرا ❌</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>CPU ضعیف</Table.Cell>
            <Table.Cell>کاهش سرعت پردازش</Table.Cell>
            <Table.Cell>تمام محاسبات روی CPU انجام می‌شود</Table.Cell>
            <Table.Cell>≈ 2 token/s</Table.Cell>
            <Table.Cell>پاسخ خیلی کند، تاخیر بالا</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>CPU قوی</Table.Cell>
            <Table.Cell>بهبود سرعت</Table.Cell>
            <Table.Cell>هسته‌های بیشتر و cache بهتر</Table.Cell>
            <Table.Cell>≈ 10 token/s</Table.Cell>
            <Table.Cell>پاسخ قابل استفاده</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>GPU با VRAM کم (4GB)</Table.Cell>
            <Table.Cell>شتاب محدود</Table.Cell>
            <Table.Cell>فقط بخشی از مدل روی GPU می‌رود</Table.Cell>
            <Table.Cell>≈ 15 token/s</Table.Cell>
            <Table.Cell>بهتر از CPU ولی محدود</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>GPU متوسط (8GB)</Table.Cell>
            <Table.Cell>شتاب خوب</Table.Cell>
            <Table.Cell>بخش زیادی از مدل روی GPU قرار می‌گیرد</Table.Cell>
            <Table.Cell>≈ 25 token/s</Table.Cell>
            <Table.Cell>پاسخ سریع و روان</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>GPU قوی (16GB+)</Table.Cell>
            <Table.Cell>حداکثر سرعت</Table.Cell>
            <Table.Cell>کل مدل در VRAM جا می‌شود</Table.Cell>
            <Table.Cell>≈ 50 token/s</Table.Cell>
            <Table.Cell>پاسخ بسیار سریع 🚀</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>CPU + GPU (Offload)</Table.Cell>
            <Table.Cell>تعادل سرعت و مصرف</Table.Cell>
            <Table.Cell>بخشی از مدل بین CPU و GPU تقسیم می‌شود</Table.Cell>
            <Table.Cell>≈ 20–30 token/s</Table.Cell>
            <Table.Cell>بهینه برای سیستم‌های معمولی</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>وضعیت GPU</Table.HeaderCell>
            <Table.HeaderCell>محل لود مدل</Table.HeaderCell>
            <Table.HeaderCell>دلیل</Table.HeaderCell>
            <Table.HeaderCell>مثال عددی (مدل 7B Q4 ~4GB)</Table.HeaderCell>
            <Table.HeaderCell>نمونه رفتار</Table.HeaderCell>
          </Table.Row>
        </Table.Head>

        <Table.Body>
          <Table.Row>
            <Table.Cell>GPU قوی (VRAM کافی)</Table.Cell>
            <Table.Cell>کامل داخل GPU (VRAM)</Table.Cell>
            <Table.Cell>حافظه GPU برای کل مدل کافی است</Table.Cell>
            <Table.Cell>VRAM=8GB → مدل 4GB کامل لود</Table.Cell>
            <Table.Cell>سریع‌ترین حالت، پردازش 100٪ روی GPU 🚀</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>GPU متوسط (VRAM ناکافی)</Table.Cell>
            <Table.Cell>بخشی GPU + بخشی RAM</Table.Cell>
            <Table.Cell>VRAM کافی نیست، مدل تقسیم می‌شود</Table.Cell>
            <Table.Cell>VRAM=4GB → ~60٪ GPU / ~40٪ RAM</Table.Cell>
            <Table.Cell>سرعت متوسط (GPU Offloading)</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>GPU ضعیف یا بدون GPU</Table.Cell>
            <Table.Cell>کامل داخل RAM</Table.Cell>
            <Table.Cell>عدم وجود VRAM قابل استفاده</Table.Cell>
            <Table.Cell>RAM=8GB → مدل کامل در RAM</Table.Cell>
            <Table.Cell>پردازش فقط با CPU، کند 🐢</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>حالت ترکیبی (CPU + GPU)</Table.Cell>
            <Table.Cell>تقسیم بین VRAM و RAM</Table.Cell>
            <Table.Cell>ابزار اجرا بهینه‌سازی می‌کند</Table.Cell>
            <Table.Cell>مثلاً 70٪ GPU / 30٪ RAM</Table.Cell>
            <Table.Cell>تعادل بین سرعت و مصرف</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>وضعیت GPU</Table.HeaderCell>
            <Table.HeaderCell>نقش GPU</Table.HeaderCell>
            <Table.HeaderCell>توضیح ساده</Table.HeaderCell>
            <Table.HeaderCell>مثال عددی (مدل 7B Q4 ~4GB)</Table.HeaderCell>
            <Table.HeaderCell>نمونه رفتار</Table.HeaderCell>
          </Table.Row>
        </Table.Head>

        <Table.Body>
          <Table.Row>
            <Table.Cell>GPU با VRAM کافی</Table.Cell>
            <Table.Cell>هم نگهداری مدل + هم پردازش</Table.Cell>
            <Table.Cell>کل مدل داخل VRAM لود می‌شود و محاسبات هم روی GPU انجام می‌شود</Table.Cell>
            <Table.Cell>VRAM=8GB → مدل 4GB کامل داخل GPU</Table.Cell>
            <Table.Cell>سریع‌ترین حالت 🚀 (همه چیز روی GPU)</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>GPU با VRAM ناکافی</Table.Cell>
            <Table.Cell>فقط پردازش بخشی از مدل</Table.Cell>
            <Table.Cell>مدل بین RAM و GPU تقسیم می‌شود</Table.Cell>
            <Table.Cell>VRAM=4GB → حدود 50–70٪ GPU / بقیه RAM</Table.Cell>
            <Table.Cell>سرعت متوسط (GPU Offloading)</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>GPU ضعیف یا بدون GPU</Table.Cell>
            <Table.Cell>نقشی ندارد</Table.Cell>
            <Table.Cell>تمام بار روی CPU و RAM است</Table.Cell>
            <Table.Cell>RAM=8GB → مدل کامل روی RAM</Table.Cell>
            <Table.Cell>کند 🐢 (فقط CPU کار می‌کند)</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <p>هارد هرچقدر بهتر باشد (مثلا nvme) فقط لود اولیه مدل سریعتر اتفاق می افتاد و در بقیه ی فرایند تاثیری ندارد.</p>
      <Bold>مسیر واقعی اجرای یک LLM:</Bold>
      <Code light>
        {`        NVMe / SSD
            │
            ▼
        RAM (لود مدل + context)
            │
   ┌────────┴────────┐
   ▼                 ▼
CPU (fallback)     GPU (اصلی)
   │                 │
   └──────┬──────────┘
          ▼
   تولید توکن (Inference)`}
      </Code>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>جزء سیستم</Table.HeaderCell>
            <Table.HeaderCell>نقش در LLM</Table.HeaderCell>
            <Table.HeaderCell>زمان فعال بودن</Table.HeaderCell>
            <Table.HeaderCell>نوع bottleneck</Table.HeaderCell>
            <Table.HeaderCell>تأثیر روی سرعت</Table.HeaderCell>
          </Table.Row>
        </Table.Head>

        <Table.Body>
          <Table.Row>
            <Table.Cell>GPU</Table.Cell>
            <Table.Cell>محاسبه اصلی (token generation)</Table.Cell>
            <Table.Cell>در تمام inference</Table.Cell>
            <Table.Cell>اصلی‌ترین bottleneck</Table.Cell>
            <Table.Cell>بسیار زیاد 🚀 (تعیین‌کننده سرعت واقعی)</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>RAM</Table.Cell>
            <Table.Cell>نگهداری مدل + context (حافظه نگهداری گفتگو)</Table.Cell>
            <Table.Cell>در کل اجرای مدل</Table.Cell>
            <Table.Cell>شرطی (اگر کم باشد)</Table.Cell>
            <Table.Cell>غیرمستقیم ❗ (فقط اگر کم باشد سرعت را نابود می‌کند)</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>CPU</Table.Cell>
            <Table.Cell>پردازش fallback و هماهنگی</Table.Cell>
            <Table.Cell>در offload یا نبود GPU</Table.Cell>
            <Table.Cell>کمکی</Table.Cell>
            <Table.Cell>متوسط 🐢 (کندتر از GPU)</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>NVMe / SSD</Table.Cell>
            <Table.Cell>لود مدل از دیسک</Table.Cell>
            <Table.Cell>فقط هنگام شروع</Table.Cell>
            <Table.Cell>startup bottleneck</Table.Cell>
            <Table.Cell>موقت ⏱️ (بعد از لود تقریباً بی‌اثر)</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Card>
  )
}
