<?php
// استایلایز کردن خروجی ریپورت
interface ReportInterface
{
    public function generate(): string;
}

class Report implements ReportInterface
{

    public function generate(): string
    {
        return 'report';
    }
}

class ReportStylizer implements ReportInterface
{
    public function __construct(private Report $report) {}

    public function generate(): string
    {
        $header =  'Header';
        $report = $this->report->generate();
        $footer = 'Footer';

        return sprintf('%s%s%s', $header, $report, $footer);
    }
}

$report = new ReportStylizer(new Report());

$report->generate();
