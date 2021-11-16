<form role="search" method="get" id="searchform" action="<?php echo home_url( '/' ); ?>">
    <div>
        <label class="screen-reader-text" for="s"><i class='fas fa-search' style="color: #b6b9bb"></i></label>
        <input type="text" value="" name="s" id="s" size="
        <?php
        if ($_GET['ds'] == 2) {
            echo "10";
        }
        else {
            echo "20";
        }
        ?>
        "/>
        <button type="submit" id="searchsubmit"><i class='fas fa-search' style="color: white"></i></button>
    </div>
</form>
