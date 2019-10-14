<?php


$url=$_GET['d'];







//url-ify the data for the POST


//open connection
$ch = curl_init();

//set the url, number of POST vars, POST data
curl_setopt($ch,CURLOPT_URL, $url);

//So that curl_exec returns the contents of the cURL; rather than echoing it
curl_setopt($ch,CURLOPT_RETURNTRANSFER, true);

//curl_setopt($ch,CURLOPT_COOKIEJAR, $cookie);
$result1 = curl_exec($ch);

echo $result1;


curl_close($ch);



?>
