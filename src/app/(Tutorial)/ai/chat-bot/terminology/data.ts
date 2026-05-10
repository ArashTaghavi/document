/** @format */

export type ItemType = { title: string; body: { title: string; definition: string; purpose: string }[] }

const Base: ItemType = {
  title: 'مفاهیم پایه',
  body: [
    { title: 'Compilation (کامپایل)', definition: 'تبدیل کد سطح بالا به فرم قابل اجرا', purpose: 'پایه‌ی AOT و JIT' },
    {
      title: 'Runtime (زمان اجرا)',
      definition: 'زمانی که برنامه در حال اجراست',
      purpose: 'JIT و profiling در این مرحله اتفاق می‌افتد'
    },
    { title: 'Machine Code', definition: 'دستور مستقیم قابل اجرا توسط CPU', purpose: 'خروجی نهایی AOT یا JIT' },
    {
      title: 'Intermediate Representation (IR) / Bytecode',
      definition: 'کد میانی بین source و machine code',
      purpose: 'ورودی JIT، قابل حمل بین سیستم‌ها'
    }
  ]
}

const AOT: ItemType = {
  title: 'مفاهیم AOT',
  body: [
    { title: 'AOT (Ahead-Of-Time Compilation)', definition: 'کامپایل قبل از اجرا', purpose: 'C++, Rust, Go' },
    { title: 'Binary / Executable', definition: 'فایل نهایی قابل اجرا (مثل .exe)', purpose: 'خروجی AOT' },
    {
      title: 'Static Optimization',
      definition: 'بهینه‌سازی بدون دانستن رفتار runtime',
      purpose: 'optimization در AOT'
    },
    {
      title: 'Cross Compilation',
      definition: 'build برای یک platform روی platform دیگر',
      purpose: 'build برای Linux روی Windows'
    },
    {
      title: 'Linking (Static / Dynamic)',
      definition: 'اتصال libraryها به برنامه',
      purpose: 'ساخت binary نهایی در AOT'
    }
  ]
}

const JIT: ItemType = {
  title: 'مفاهیم JIT',
  body: [
    { title: 'JIT (Just-In-Time Compilation)', definition: 'کامپایل در زمان اجرا', purpose: 'Java, C#, JavaScript' },
    { title: 'Interpreter', definition: 'اجرای مستقیم bytecode بدون کامپایل کامل', purpose: 'اجرای اولیه قبل از JIT' },
    { title: 'Warm-up', definition: 'دوره اولیه که JIT هنوز optimize نکرده', purpose: 'دلیل کند بودن startup' },
    { title: 'Hot Path', definition: 'مسیر پرتکرار یا پرمصرف در اجرا', purpose: 'هدف اصلی optimization' },
    { title: 'Hot Method / Hot Function', definition: 'تابعی که زیاد اجرا می‌شود', purpose: 'کاندید JIT optimization' },
    { title: 'Profiling', definition: 'جمع‌آوری داده از اجرای واقعی', purpose: 'تشخیص hot path' },
    { title: 'Invocation Counter', definition: 'شمارنده تعداد اجرای یک تابع', purpose: 'تشخیص hot بودن' },
    { title: 'Sampling', definition: 'نمونه‌برداری از execution برای تحلیل', purpose: 'profiling سبک‌تر' },
    {
      title: 'Tiered Compilation',
      definition: 'چند مرحله‌ای بودن JIT (ساده → پیشرفته)',
      purpose: 'balance بین سرعت و optimization'
    },
    {
      title: 'Deoptimization',
      definition: 'بازگشت از حالت optimize‌شده به حالت ساده',
      purpose: 'وقتی فرض JIT اشتباه باشد'
    }
  ]
}

const JITOptimizationTechnique: ItemType = {
  title: 'تکنیک‌های Optimization در JIT',
  body: [
    { title: 'Inlining', definition: 'جایگزینی call با بدنه تابع', purpose: 'کاهش overhead' },
    { title: 'Branch Elimination', definition: 'حذف شرط‌های قابل پیش‌بینی', purpose: 'کاهش branch misprediction' },
    {
      title: 'Code Specialization',
      definition: 'ساخت نسخه خاص از کد برای شرایط خاص',
      purpose: 'بهینه‌سازی بر اساس type یا pattern'
    },
    { title: 'Loop Unrolling', definition: 'باز کردن حلقه برای کاهش overhead', purpose: 'افزایش سرعت loop' },
    { title: 'Escape Analysis', definition: 'تشخیص اینکه object نیاز به heap دارد یا نه', purpose: 'کاهش allocation' },
    {
      title: 'Inline Cache',
      definition: 'cache کردن نتیجه lookup (مثلاً method dispatch)',
      purpose: 'در زبان‌های dynamic مثل JavaScript'
    }
  ]
}
const LowLevelPerformanceConcepts: ItemType = {
  title: 'مفاهیم سطح پایین (مرتبط با performance)',
  body: [
    { title: 'Cache (L1/L2/L3)', definition: 'حافظه سریع نزدیک CPU', purpose: 'کاهش latency' },
    { title: 'Cache Miss', definition: 'نبود داده در cache', purpose: 'باعث کندی شدید' },
    { title: 'Branch Prediction', definition: 'حدس CPU برای نتیجه شرط', purpose: 'افزایش سرعت pipeline' },
    { title: 'Branch Misprediction', definition: 'اشتباه در حدس CPU', purpose: 'افت performance' }
  ]
}

export const Items: ItemType[] = [Base, AOT, JIT, JITOptimizationTechnique, LowLevelPerformanceConcepts]
