<li id="weibo_li" class='widget widget_block'><h2 class="widgettitle">微博内容</h2>
    <ul id="weibo">
    <?php
    function http_to_null($url){
        $new_url_after = strstr($url,"//");
        if(!$new_url_after){
            return $url;
        }
        else{
            $new_url = "https:".$new_url_after;
            return $new_url_after;
        }
    }
    global $wpdb;
    $hit_time_row = $wpdb->get_row("SELECT * FROM wp_redonleft_weibo_hit WHERE ID = 1", ARRAY_A);
    
    $weibo_content_add = "wp-content/themes/blackcooler/json/weibo_content.json";
    $weibo_time_add = "wp-content/themes/blackcooler/json/weibo_time.json";
    $weibo_face = "wp-content/themes/blackcooler/json/weibo_emotions.json";
    
    $date_now = date("Y-m-d");
    $hour_now = floatval(date("H"))*3600;
    $min_now = floatval(date("i"))*60;
    $time_now = $hour_now + $min_now + floatval(date("s"));//现在时间换算成秒

    if($date_now != $hit_time_row['hit_time']){
        $hit_time_row['hit'] = 0;
    }
    $hit_time_row['hit_time'] = $date_now;
    $can_hits = floor($time_now/960);//微博API规定每天获取次数上限为100，为防止异常情况，我将上限设定为90次。即每960秒可增加一次获取次数。这里计算出到现在时刻，一共可以获取多少次
    $temp_hits = $hit_time_row['hit'] + 1;//从json中获取已经获取的次数，加上本次运行的一次
    $can_hits_real = $can_hits - $temp_hits;//前两者相减获得实际剩余的获取次数
    $td_width = 102;
    if($can_hits == 0){
        $can_hits_real = 0;
        $ip_width = 0;
    }
    else{
        $ip_width = $temp_hits / $can_hits * $td_width;//这里为下面的table中的div背景计算长度，为模拟进度条。这个进度条为表示已经请求的次数和允许请求的次数比值
    }
    $user_width = ($time_now/960 - $can_hits) * $td_width;//这个进度条为表示离请求次数增加还剩多久
    $percent_float = ($time_now/960 - $can_hits) * floatval(100);//以百分数展示还剩多久
    $percent = round($percent_float,0)."%";//以百分数展示还剩多久
    
    $content_row = $wpdb->get_row("SELECT * FROM wp_redonleft_weibo_content WHERE ID = 4", ARRAY_A);
    
    if($can_hits_real >= 1){
        $c = new SaeTClientV2('1916930258', 'bcfb3ba2c7fed73817113a63f3167376', '2.008N8BxByHPjFCa6f69c4d0f0xksxe');
        $hit_time_row['hit']++;
        
        $ms = $c->home_timeline(1,5,0,0,0,0);
        $limit =$c->rate_limit_status();
        echo "<table id='touch_limit'><tr><td>剩余请求次数</td><td>请求增速</td></tr><tr><td><div id='re_ip_hit' >".$can_hits_real."</div></td><td><div id='re_user_hit' style='width:".$user_width."px;'>".$percent."</div></td></tr></table>";

        if ( !$ms[ 'error' ] ) {
            $wpdb->update(
                'wp_redonleft_weibo_content',
                array('content' => json_encode($ms['statuses'])),
                array('ID' => 4)
            );
        }
        else{
            $ms['statuses'] = json_decode($content_row['content'],true);
        }
    }
    else{
        echo "<table id='touch_limit'><tr><td>剩余请求次数</td><td>请求增速</td></tr><tr><td><div id='re_ip_hit_red' >".$can_hits_real."</div></td><td><div id='re_user_hit_red' style='width:".$user_width."px;'>".$percent."</div></td></tr></table>";
        $ms['statuses'] = json_decode($content_row['content'],true);
    }

    $wpdb->update(
        'wp_redonleft_weibo_hit',
        array(
            'hit_time' => $hit_time_row['hit_time'],
            'hit' => $hit_time_row['hit']
        ),
        array('ID' => 1)
    );
    
    if ( is_array( $ms[ 'statuses' ] ) ) {
        foreach ( $ms[ 'statuses' ] as $item ) {
            echo "<li class='weibo_line toggle_display'><div class='weibo_text'>";
            print_r( $item[ 'text' ] );
            echo "</div>";
            if($item['retweeted_status']){
                echo "<div class = 'weibo_yinyong'>";
                echo "<span class = 'weibo_yinyong_user'><i class='fab fa-weibo'></i> ".$item['retweeted_status']['user']['screen_name']."</span><br>";
                echo $item['retweeted_status']['text']."<br />";
                echo "</div>";
            }
            echo "<div class='weibo_user'><i class='fab fa-weibo'></i> " . $item[ 'user' ][ 'screen_name' ] . "</div>";
            echo "</li>";
        }
    }
    if ( $ms[ 'error' ] ) {
        echo "错误：" . $ms[ 'error' ] . '<br />';
        echo "错误代码：" . $ms[ 'error_code' ] . '<br />';
    }
    ?>
    </ul>
</li>