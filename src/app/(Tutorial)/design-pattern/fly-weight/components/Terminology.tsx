import { Card, Code } from "@/app/Components/common";
import { LI, SimpleLI, SimpleUL, UL } from "@/app/Components/List";

export default function Terminology() {
    return (
        <Card title="اصطلاحات">
            <UL>
                <LI title="Heap">فضای بزرگی از حافظه برای نگه داری آبجکت هایی که اندازه آن ها از قبل مشخص نیست و طول عمر آن ها داینامیک است.</LI>
                <LI title='extrinsic'>
                    بخش های متغیر یک آبجکت
                </LI>
                <LI title='intrinsic'>
                    بخش های مشترک یک آبجکت
                </LI>
                <LI title="coupling ذهنی">
                    برای فهمیدن یک تکه کد، مجبور باشیم چند جای مختلف سیستم را همزمان در ذهن باز نگه داریم. در واقع پیچیدگی‌ای که در ذهن برنامه‌نویس ایجاد می شود، نه فقط در کد.
                </LI>
                <LI title="مثال coupling ذهنی">
                    <Code light>coupling.php</Code>
                </LI>
                <LI title="تفاوت coupling کدی با coupling ذهنی">
                    <SimpleUL>
                        <SimpleLI title="coupling کدی">کلاس A مستقیم به B وابسته است.</SimpleLI>
                        <SimpleLI title="coupling ذهنی">برای فهم A باید چند جای دیگر را بدانید.</SimpleLI>
                    </SimpleUL>
                </LI>
            </UL>
        </Card>
    )
}