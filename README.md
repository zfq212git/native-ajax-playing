# native-ajax-playing
the code referred to sample here: https://www.cnblogs.com/jach/p/5709175.html

as part of one of my little projects, I need use ajax to update part of a web page but not do not want redirect and/or reload the whole page. So, use this small code for pre-playing and understanding the ajax code

the tricky points I encountered,
(1) response code 200 may not be sent as expected, if you are using "localhost".  This may be worked around by using your local IP or like 127.0.0.1.  As I researched, this issue may be as-designed.  The best way is to set up a real http server to help your testing... (one detailed report see here: http://blog.csdn.net/iaiti/article/details/42192659)
(2) chrome sounds like have some born blocking feature that does not work with ajax well?  some people said using firefox might be time-saving for quick testing...  but this exposes an issue that using ajax might need broad testing across different browsers.
(3) cross site resource sharing is another topic that should be aware using ajax, a good summary here, http://www.ruanyifeng.com/blog/2016/04/cors.html
