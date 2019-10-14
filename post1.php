<?php

$pan=$_GET['a'];
$tilt=$_GET['b'];
$url=$_GET['c'];
$energy=$_GET['d'];

$pan='150';
$tilt='151';
$url='http://192.168.1.17';
$energy='152';

$url=$url+"/api/v1/light/brightness";
$fields = [
  'pan'=> $pan
  'tilt'=> $tilt
  'energy'=>$energy
];

//url-ify the data for the POST
$fields_string = http_build_query($fields);

//open connection
$ch = curl_init();

//set the url, number of POST vars, POST data
curl_setopt($ch,CURLOPT_URL, $url);

//So that curl_exec returns the contents of the cURL; rather than echoing it
curl_setopt($ch,CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch,CURLOPT_POST, true);
curl_setopt($ch,CURLOPT_POSTFIELDS, $fields_string);
//curl_setopt($ch,CURLOPT_COOKIEJAR, $cookie);
$result1 = curl_exec($ch);

echo '{"status":"{$result1}"}';


curl_close($ch);
?>
