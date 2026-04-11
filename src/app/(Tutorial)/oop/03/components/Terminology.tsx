/** @format */

import { Bold, Card, Code } from '@/app/Components/common'
import { LI, UL } from '@/app/Components/List'
import { ArrowRight } from 'lucide-react'

export default function Terminology() {
    return (
        <Card title='Terminology'>
            <UL>
                <LI title='Trade Off'>
                    زمانی که باید بین چند گزینه، یک گزینه را انتخاب کنیم و نمی توانیم همه چیز را در بهینه ترین حالت ممکن داشته باشیم. مثلا برای افزایش سرعت، ناچارا افزایش استفاده از منابع را به همراه داریم.
                </LI>
                <LI title='Consistency'>
                    <p>یعنی سیستم همیشه در یک حالت صحیح و قابل اعتماد باقی بماند.</p>
                    <Bold>مثال:</Bold>
                    <p>
                        فرض کنید در یک سیستم موجود کالا ۵ عدد می باشد. کاربر نباید بتواند ۶ عدد از آن کالا سفارش دهد و باعث ایجاد موجودی -۱ (منفی ۱) در سیستم شود.
                    </p>
                </LI>

                <LI title='Property Promotion'>در برنامه نویسی یعنی خلاصه‌کردن و خودکار کردن تعریف ویژگی‌های یک کلاس داخل سازنده.</LI>
                <LI title='Dependency Inward'>
                    .وابستگی‌ها باید همیشه به سمت “هسته‌ی سیستم” باشند، نه برعکس
                    <Code light>
                        <div className='flex gap-2'>
                            <span>
                                UI / Framework
                            </span>
                            <ArrowRight />
                            <span>
                                Application
                            </span>
                            <ArrowRight />
                            <span>
                                Domain (Core)
                            </span>
                        </div>
                    </Code>
                    <p>
                        لایه‌های بیرونی اجازه دارند به لایه‌های داخلی وابسته شوند، ولی لایه داخلی نباید چیزی درباره بیرون بداند.
                    </p>
                    <Code light>
                        dependencyinward.php
                    </Code>

                </LI>
            </UL>
        </Card>
    )
}
