<?php

namespace App\Domains\Auth;

use Illuminate\Support\Facades\Log;

class UserVerifysService
{
  public static function sendSms($phone, $message, $payload)
  {
    $headers = array( 'Content-Type: application/json');

    $post_data = [
      'auth_code'=> env('MTS_AUTH_CODE', ''), //미인증
      'sender_key'=> env('MTS_SENDER_KEY', ''),
      'callback_number'=> '02-546-7946',
      'phone_number'=> $phone,
      'message'=> $message,
      'add_etc1' => $payload
    ];

    $json = json_encode($post_data);

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, env('MTS_SMS_SEND_URL', ''));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);

    curl_setopt($ch, CURLOPT_TIMEOUT, 3);
    curl_setopt($ch, CURLOPT_ENCODING, 'UTF-8');

    $output = curl_exec($ch);

    if($output === false || $output === '')
    {
      $errno = curl_errno($ch);
      $error = curl_error($ch);

      Log::debug('[MTS ERROR] NO:'.$errno.' '.$error);
      Log::debug('[MTS ERROR] '.implode($post_data));


      curl_close($ch);

      return [false, $errno, $error];
    }

    curl_close($ch);

    return [true, json_decode($output)];
  }

  /**
   * return [ $result, ?$errno, ?$error ]
   */
  public static function sendTalk(
    $phone,
    $message,
    $callbackUrl="",
    $etc1="",
    $etc2="",
    $etc3=""
  )
  {
    $headers = array( 'Content-Type: application/json');

    $post_data = [
        'auth_code'=> env('MTS_AUTH_CODE', ''),
        'sender_key'=> env('MTS_SENDER_KEY', ''),
        'callback_number'=> '02-546-7946',
        'template_code' => 'A001_01',
        //라이브 서버
        'callback_url' => $callbackUrl,
        'message'=> $message,
        'phone_number'=> $phone,
        'tran_type'=>'N',
        'add_etc1' => $etc1,
        'add_etc2' => $etc2,
        'add_etc3' => $etc3
    ];

    $json = json_encode($post_data);
    /*
      json_encode부분에서 \n을 \\로 변경을 해주는데
      새로생긴 \는 replace로 제거가 안됨.
      그래서 \\n -> n로 만들면 \n으로 문자열이 완성이 됨.
    */
    $json = str_replace("\\n", "n", $json);

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, env('MTS_TALK_SEND_URL', ''));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);

    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    curl_setopt($ch, CURLOPT_ENCODING, 'UTF-8');

    $output = curl_exec($ch);

    if($output === false || $output === '')
    {
      $errno = curl_errno($ch);
      $error = curl_error($ch);

      Log::debug('[MTS ERROR] NO:'.$errno.' '.$error);
      Log::debug('[MTS ERROR] '.implode($post_data));

      curl_close($ch);

      return [false, $errno, $error];
    }

    curl_close($ch);

    return [true, json_decode($output)];
  }
}