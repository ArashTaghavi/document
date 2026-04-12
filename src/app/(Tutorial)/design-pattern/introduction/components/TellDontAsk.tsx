import { Card, Code } from "@/app/Components/common";

export default function TellDontAsk() {
    return (
        <Card title="Tell Don't Ask">
            <p>
                اصل «Tell, Don’t Ask» بیان می‌کند که به‌جای استخراج داده از یک شیء و اعمال منطق تصمیم‌گیری در خارج از آن، باید از شیء بخواهیم عملیات موردنظر را انجام دهد تا منطق مربوطه درون خود شیء کپسوله و اجرا شود.
            </p>
            <Code light>
                telldontask.php
            </Code>
        </Card>
    );
}
