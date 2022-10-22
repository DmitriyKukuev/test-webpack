<?php
function vueTag(string $class, array $data = []): string {
    return '<div class="' . $class . '" data-vue=\'' . json_encode($data) . '\'></div>';
}