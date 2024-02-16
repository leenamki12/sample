<?php

foreach (glob(__DIR__ . '/web/*.php') as $file) {
    require $file;
}
