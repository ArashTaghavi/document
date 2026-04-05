/** @format */

import { Bold, Card, Code } from '@/app/Components/common'

export default function MagicValues() {
  return (
    <Card title='Magic Values'>
      <p>
        <Bold>Magic Values</Bold> عموما به معنای مقادیر ثابتی است که در پروژه بصورت صریح استفاده شده و فهمیدن معنی آن
        ممکن است گاها گیج کننده باشد.
      </p>
      <p>برای مثال به کد زیر دقت کنید:</p>
      <Code light>{' if(seconds < 86400){ do somethings }'}</Code>
      <p>
        در این حالت معنی عدد 86400 واضح نیست. بهتر است آن را به صورت یک ثابت معنا دار تعریف کنیم و از آن استفاده نماییم.
        به کد زیر دقت کنید:
      </p>
      <Code light>{`define('SECONDS_PER_DAY', 86400)`}</Code>
      <Code light>{' if(seconds < SECONDS_PER_DAY){ do somethings }'}</Code>
      <Code light>magic.php</Code>
    </Card>
  )
}
