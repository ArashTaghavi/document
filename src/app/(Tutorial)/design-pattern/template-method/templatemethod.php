<?php
// بدون template method
class PdfReport
{
    public function generate()
    {
        $data = $this->getData();
        $processed = $this->process($data);
        return $this->exportPdf($processed);
    }
}

class CsvReport
{
    public function generate()
    {
        $data = $this->getData();
        $processed = $this->process($data);
        return $this->exportCsv($processed);
    }
}

// با template method

abstract class ReportGenerator
{
    // template method
    public function generate()
    {
        $data = $this->getData();
        $processed = $this->process($data);
        return $this->export($processed);
    }

    protected function getData()
    {
        return ['data1', 'data2'];
    }

    protected function process($data)
    {
        return array_map('strtoupper', $data);
    }

    // این متد باید در subclass پیاده‌سازی شود
    abstract protected function export($data);
}

class PdfReport extends ReportGenerator
{
    protected function export($data)
    {
        return "PDF: " . implode(',', $data);
    }
}

class CsvReport extends ReportGenerator
{
    protected function export($data)
    {
        return "CSV: " . implode(';', $data);
    }
}

$report = new PdfReport();
$report->generate();
