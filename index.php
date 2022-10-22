<?php

require_once 'partials/header.php';

$items = [
    'item 1',
    'item 2',
    'item 3',
];
?>

<div class="main">
    <h1>Пример вывода vue компонента</h1>

    <?= vueTag('vue-example', ['items' => $items]) ?>
</div>

<?
require_once 'partials/footer.php'; ?>

