<?php

require __DIR__ . '/vendor/autoload.php';

try {
  $redis = new Predis\Client([
    'scheme' => 'tcp',
    'host' => '127.0.0.1',
    'port' => 6379,
  ]);

  // Can use an object
  $payload = new \stdClass;
  $payload->handle = 'php';
  $payload->message = 'Hello world!';

  // Or an array
  // $payload = [
  //   'handle' => 'php',
  //   'message' => 'Hello world!',
  // ];

  $redis->publish('the_channel', json_encode($payload));
} catch (Exception $e) {
  die($e->getMessage());
}
