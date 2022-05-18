<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
</head>
<body>
    <?php include 'inc/header.php'; ?>
    <?php include 'inc/caseList.php'; ?>
    <?php foreach($cases as $value) { ?>
    <div>
        <a href="case.php?caseID=<?php echo $value->getID; ?>" role="button" class="btn"><?php echo $value->getID; ?></a>;
    </div>
    <?php } ?>

</body>
</html>