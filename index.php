<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Ilias KELESOGLU</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

</head>
<body>
<!-- A inclure -->
    <div id="navbar">
        <div id="logo_nav">

        </div>
        <div id="items">
            <ul>
                <li>
                    <a href="about.php" class="redirect">À propos</a>
                </li>
            </ul>
        </div>

        <div id="test commit">
            <ul>
                <li>
                    <a href="#">Je viens d'effectuer une modification du fichier Index.php après avoir FORK le git de Illias.</a>
                </li>
            </ul>
        </div>

        
    </div>
    <div id="slide"></div>
    <div id="container">
        <main>
            <div id="gallerie">
                <?php
                $scan = scandir('assets/images/img');
                foreach ($scan as $file){ ?>


                    <?php
                    $ext = explode('.', $file)[count(explode('.', $file))-1];
                    if($file != '.' && $file != '..' && ($ext == 'jpg' || $ext == 'png' || $ext == 'jpeg' || $ext == 'PNG')){ ?>
                        <div  class="img galleryItem" style='background-image: url("/assets/images/img/<?= $file ?>")'>
                        </div>
                    <?php }

                }
                ?>
            </div>
            <div id="showPhoto">
                <div id="imageShown">
                    <img src="" alt="" class="imageShown">
                </div>
            </div>
        </main>
    </div>
    <script src="assets/js/script.js"></script>
    <script src="assets/js/jquery-3.4.1-min.js"></script>
</body>
</html>