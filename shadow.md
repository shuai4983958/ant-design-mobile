#####前言：
	本地的系统是mac还是window是影响，本地客户端shadowsocks安装的类型。
	
[shadowsocks安装链接](https://github.com/shadowsocks/shadowsocks/wiki/Ports-and-Clients)

	包含MacOs、Windows、iOS、Android等平台的应用程序。
	


----------


####1、首先购买流程

 1. [搬瓦工官方网址](http://banwagong.cn/)本人资金有限，而且只是为了翻墙查阅资料，而非看视频，所以套餐选择19.9刀
    ![套餐选择19.9刀](https://img-blog.csdn.net/20180523185901242?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3J1bm5pbmdfc2h1YWk=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
 2. 补充订单信息并下单加入购物车
    ![这里写图片描述](https://img-blog.csdn.net/20180523190652858?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3J1bm5pbmdfc2h1YWk=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
 2. 填写优惠券码然后点击checkout
  ![这里写图片描述](https://img-blog.csdn.net/20180523191130845?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3J1bm5pbmdfc2h1YWk=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
 3. 这里填写用户信息是针对没有注册过的用户，付款你可以选择alipay支付，当然也可以选择其他的，毕竟支付宝支付方便对于国内的用户来说
  ![这里写图片描述](https://img-blog.csdn.net/20180523191931183?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3J1bm5pbmdfc2h1YWk=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
 4. 购买完毕以后点击Services=>My Services可以查看，购买信息，可以点开控制面板，可查看主机信息，操作主机
  ![这里写图片描述](https://img-blog.csdn.net/20180523193557996?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3J1bm5pbmdfc2h1YWk=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
 5. 查看主机信息，报告端口号，主机ip
  ![这里写图片描述](https://img-blog.csdn.net/2018052319385318?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3J1bm5pbmdfc2h1YWk=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
  

我们现在的购买vps服务器的流程走完了，接下来就是配vpn

----------


#####2、购买主机的服务器端操作

 1. 给自己的主机重装系统，重装系统之前需要stop服务器，之后Install new OS重装系统，我选择的是 centos-6-x86-bbr，反正这个系统可以用。这里可能需要等待几分钟，过一会就可以从新启动服务器了。
  ![这里写图片描述](https://img-blog.csdn.net/2018052319442842?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3J1bm5pbmdfc2h1YWk=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
 2. 安装Shadowsocks  ，可以参考[Shadowsocks Python版一键安装脚本](https://teddysun.com/342.html)，当然也有朋友提供了一个脚本，直接在服务器端执行。脚本不是本人写的，没发贴出来，谁想要可以留言，私发给你。执行完脚本以后，本地终端ssh账号密码登陆，
 

```
	登录：ssh -p 服务器端开放端口号 root@ip地址
	密码：邮件发给你的密码
	更改密码：password
	就会重新填写新密码
```

![这里写图片描述](https://img-blog.csdn.net/20180523195646580?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3J1bm5pbmdfc2h1YWk=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
 会生成（ip和端口号，密码，），这里的密码和端口号都是你自己定义的，也可以执行脚本生成。客户端填写ip和端口号密码，就是写生成的。
 ![这里写图片描述](https://img-blog.csdn.net/20180523195827585?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3J1bm5pbmdfc2h1YWk=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)


----------


#####3、本地机器操作
	mac操作系统
 1. [mac shadowsocks安装链接](https://github.com/shadowsocks/shadowsocks/wiki/Ports-and-Clients#os-x)
 2. 安装以后
  ![这里写图片描述](https://img-blog.csdn.net/20180523200235151?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3J1bm5pbmdfc2h1YWk=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
这里填写的ip，端口号为服务器端脚本生成的。一定要对应起来。
 3. 这里一定要选择自动代理模式，防止流量全部走的国外代理。自动代理模式只有被墙的时候才走国外ip，其他时候走的都是国内的
  ![这里写图片描述](https://img-blog.csdn.net/20180523200645213?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3J1bm5pbmdfc2h1YWk=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70) 
 4.  最后chrome引擎选择google，然后就可以完美的访问你梦寐以求的资源了。
	 
	
		windows操作系统
 1. [windows shadowsocks下载安装链接](https://github.com/shadowsocks/shadowsocks/wiki/Ports-and-Clients#windows)
 2. 下载最新的`Shadowsocks`版本.zip
 3. 本地解压缩。运行Shadowsocks.exe
  ![这里写图片描述](https://img-blog.csdn.net/20180524102922888?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3J1bm5pbmdfc2h1YWk=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
 4. 在电脑右下角任务栏找到ss图标，右键点击，点击启用系统代理，或者自动代理模式，然后编辑服务器，点击添加，填写完毕点击确认。
  ![这里写图片描述](https://img-blog.csdn.net/20180524103429482?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3J1bm5pbmdfc2h1YWk=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
  ![这里写图片描述](https://img-blog.csdn.net/20180524103444853?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3J1bm5pbmdfc2h1YWk=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
  ![](https://img-blog.csdn.net/20180524103236285?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3J1bm5pbmdfc2h1YWk=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)


#####4、问题解析
	1、多用户多端口配置多个vpn
	
		chmod 777 /etc/shadowsocks.json //防止权限不够
		vi /etc/shadowsocks.json  
			
单用户配置文件 
```
{
    "server":"0.0.0.0",
    "server_port":8989,
    "local_address":"127.0.0.1",
    "local_port":1080,
    "password":"yourpassword",
    "timeout":300,
    "method":"aes-256-cfb",
    "fast_open": false
}
```
多用户多端口配置文件
```
{
    "server":"0.0.0.0",
    "local_address":"127.0.0.1",
    "local_port":1080,
    "port_password":{
         "8989":"password0",
         "9001":"password1",
         "9002":"password2",
         "9003":"password3",
         "9004":"password4"
    },
    "timeout":300,
    "method":"aes-256-cfb",
    "fast_open": false
}
```
![这里写图片描述](https://img-blog.csdn.net/20180524105659869?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3J1bm5pbmdfc2h1YWk=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

	2、 Shadowsocks 服务
		启动：/etc/init.d/shadowsocks start
		停止：/etc/init.d/shadowsocks stop
		重启：/etc/init.d/shadowsocks restart
		状态：/etc/init.d/shadowsocks status
	3、服务器防火墙的设置导致了配置的多用户无法连接


----------
#####5、vps=>Shadowsocks翻墙原理解析
	文章的标题显得确实有点门外汉的意思。混淆了VPN和Shadowsocks的真正含义。

######5.1、什么是vpn
	简称：虚拟专用网络，一般用在企业用户上，当然翻墙只是附带的功能。

> 公司员工出差到外地，他想远程访问企业内网的服务器资源，为了安全和成本采用内网中架设一台VPN服务器。
	
	1、员工在外地连上互联网以后，通过互联网连接公司的vpn服务器，  
		通过vpn服务器进入企业内网。
	2、专用的含义，就是vpn服务器和员工客户端之间通讯数据包都加密了，  
	   有了数据加密，就可以认为数据是在一条专用的数据链路上进行安全传输
	3、本质上来讲就是利用加密技术在公网上封装出一个数据通道。员工在接入vpn  
		以后，其实就是接入了一个专用的加密通道，网络访问都是从这里出去的，  
		经过vpn服务器中转完成数据传输。

######5.2、什么是Shadowsocks
	

> 简称ss或者叫影梭，Shadowsocks分为服务器端和客户端，在使用之前，需要先将服务器端部署到服务器上面，然后通过客户端连接并创建本地代理。那么是如何实现翻墙的？

	通俗的说，
	1、假如你有一个代理服务器在香港，现在在国内想要访问google，
	2、你通过电脑发出请求，流量通过socks5代理连接发到香港的服务器上，  
	3、然后再由你在香港的服务器去访问google，再把访问结果传回你的电脑，  
	   这样就实现了翻墙。

>  那我们是如何通过vps，服务器端，客户端配置实现翻墙的呢？
	
		1、我们在vps服务器端部署Shadowsocks，部署完成以后 。
			用户需要按照指定的密码、加密方式和端口
		2、客户端下载Shadowsocks软件与服务器端连接。
		3、在成功连接服务器以后，客户端会在用户电脑上构建本地的Socks5代理  
		   浏览网络的时候，流量会被本地的Socks5代理，客户端加密以后发送到  
		   服务器端，服务器端以同样加密返回客户端，这样实现代理上网。

> Socks5代理是什么呢？
	
		1、socks代理只是简单的传递数据包，而不必关心是何种协议  
		   所以socks代理比其他应用层代理要快的多。
		2、socks5代理是把你的网络数据请求通过一条连接你和代理服务器之间的通  
		   道，由服务器转发到目的地，这个过程中你是没有通过一条专用通道的，  
		   只是数据包的发出，然后被代理服务器收到，整个过程并没有额外的处理

> 那么本地的Socks5代理有几种呢？怎么做到节省流量？
		
		1、直连模式就是流量不走代理。
		2、PAC也叫系统代理，自动代理模式，就是国内地址不走代理，国外走代理
		3、全局模式不管国内国外，所有流量通过代理服务器访问这样浪费流量。

######5.3、vpn和Shadowsocks的区别和优缺点
	
	vpn是虚拟专用网络，用来给企业传输加密数据用的，所以vpn的流量特征很明显，  
	                防火墙直接分析你的流量，如果特征匹配，直接封掉。  
	                目前就翻墙来说，PPTP类型的vpn基本死的差不多了，  
	                L2TP大部分地区干扰严重很不稳定。所以说vpn翻越防火墙，  
	                流量特征很明显，很容易被封掉，而且国内的vpn服务商，政  
	                府是很容易拿到他们的服务器日志的，你翻墙做什么没有一点  
	                。。。
	 Shadowsocks是专门用来翻墙的，本地的Socks5代理转发网络请求的时候，会对  
	               流量做混淆，所有流量在翻越防火墙的时候，基本被识别为普  
	               通流量，所以不容易被封掉，当然最好还是不要拿来做坏事，  
	               通过本地socks连接到自己的vps服务器上的Shadowsocks，  
	               通过vps服务器再去翻墙，饭回来拿到数据，再返回自己。
	  总结来说：vpn是虚拟专用网络，shadowsocks只是转发流量到我们的代理服务器，
	

  
	 

	