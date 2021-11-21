<div id="sidebar">
    <ul id="sidebar_first_ul">
        <li class="widget">
            <h2 class="widgettitle">视频</h2>
            <?php
            if ($_GET['bili_av']) {
            $bili_av = $_GET['bili_av'];
            } else {
            $bili_av = get_option('bilibili_num');
            }
            $change_av = "</li><li><form id='bili_form' action='index.php' method='get'>
                <input type='text' size='15' name='bili_av' value='" . $bili_av . "' />
                <input type='submit' value='提交BV号' /><br />
                <p>这里所展示的是我近期很喜欢的B站视频，可以通过提交BV号变更视频</p>
            </form></li></ul></li>";
            echo "<ul id='bili_player'><li>";
            rol_player(array('type' => 'bilibili'));
            echo $change_av;
            ?>
        <li id="aplayer_li" class="widget">
            <h2 class="widgettitle">音乐播放器控制</h2>
            <ul id="aplayer" class="toggle_display">
                播放器位于屏幕左下角<br />默认网易云音乐<br />可通过提交歌单ID变更播放列表
                <form method="get" action="index.php">
                    <?php
                    if($_GET['ap_num']){
                        $list_num = $_GET['ap_num'];
                    }
                    else{
                        $list_num = get_option('netease_num');;
                    }
                    ?>
                    <input type="number" name="ap_num" value="<?php echo $list_num; ?>"/>
                    <input type="submit" value="提交" /><br />
                </form>
            </ul>
        </li>
        <?php
        if ( !function_exists('dynamic_sidebar')
            || !dynamic_sidebar() ) :

        endif;
        get_weibo();
        ?>
    </ul>
</div>
