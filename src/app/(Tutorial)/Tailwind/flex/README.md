<!-- @format -->

## basis

| ویژگی                       | `flex-basis`                                                              | `width` / `height`                                          |
| --------------------------- | ------------------------------------------------------------------------- | ----------------------------------------------------------- |
| محدود به آیتم‌های Flex      | ✅ فقط روی آیتم‌هایی که در یک کانتینر فلکس هستن اثر داره                  | ✅ روی همه عناصر (چه فلکس، چه غیرفلکس) قابل استفاده است     |
| اثر در جهت اصلی (Main Axis) | ✅ فقط روی محور اصلی (وابسته به `flex-direction`) اثر داره                | ✅ در هر دو جهت (عرض و ارتفاع) قابل استفاده است             |
| اثر بر عناصر absolute       | ❌ بی‌تأثیر؛ چون آیتم‌های absolute در فلکس‌باکس شرکت نمی‌کنن              | ✅ اندازه‌دهی دقیق برای عناصر با `position: absolute`       |
| قابل ترکیب با flex          | ✅ قابل ترکیب با `flex-grow` و `flex-shrink` در یک خط (`flex: 1 1 200px`) | ❌ باید جداگانه با سایر ویژگی‌ها نوشته شود                  |
| اولویت در فلکس‌باکس         | ✅ در سیستم فلکس اولویت بیشتری نسبت به `width` دارد                       | ❌ در صورت وجود `flex-basis` مقدار آن نادیده گرفته می‌شود   |
| انعطاف‌پذیری                | ✅ مناسب برای طراحی واکنش‌گرا و تطبیق‌پذیر                                | ❌ بیشتر برای طراحی‌های ایستا و اندازه‌های ثابت کاربرد دارد |

### flex

- Use `flex-< number >` utilities like flex-1 to allow a flex item to `grow` and `shrink` as needed, ignoring its initial size.
- Use `flex-initial` to allow a flex item to `shrink` but not `grow`, taking into account its initial size.
- Use `flex-auto` to allow a flex item to `grow` and `shrink`, taking into account its initial size.

 