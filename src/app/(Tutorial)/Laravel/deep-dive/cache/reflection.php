<?php
class A
{
    public string $message = 'Hey there...';
}

class B
{

    public function m1(A $a)
    {
        echo $a->message;
    }
}


function call_it($input)
{
    [$class, $method] = explode('@', $input);
    $m = new ReflectionMethod('B', 'm1');
    $params = $m->getParameters();
    $typeHintParam = $params[0]->getType()->getName();

    $typeHint = new $typeHintParam;
    $b =  new $class();
    $b->$method($typeHint);
}

call_it('B@m1');
