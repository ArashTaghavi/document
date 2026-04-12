/** @format */

import { Bold, Card } from "@/app/Components/common";

export default function Abstraction() {
  return (
    <Card title="Abstraction">
      <p>
        در مبحث <code>Absraction</code> دو مفهوم به نام های{" "}
        <code>abstract class</code> و <code>interface</code> ها نقش اساسی دارند
        که هر دو وظیفه ی<Bold>تعریف قرار داد</Bold> ها را بر عهده دارند.
      </p>
      <p>
        تفاوت <code>abstract class</code> و <code>interface</code> به این صورت
        است که در <code>interface</code> ها فقط قرار داد ها را می توانیم تعریف
        کنیم، اما در <code>abstract class</code> ها علاوه بر تعریف قرار داد ها،
        می توانیم متد ها یا پراپرتی هایی نیز تعریف کنیم که در ارث بری برای کلاس
        های فرزند مورد استفاده قرار بگیرند.
      </p>
    </Card>
  );
}
