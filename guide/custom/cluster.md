# 集群部署

## 前置条件
- 部署了多份后还需要在线编辑接口信息，编辑后需要解决其他实例未同步接口信息的问题。
- 使用同一存储(如接口信息存储在同一个数据库中或`Redis`中)
- 项目集成了`Redis`(如果未集成则需要自定义推送和实现监听逻辑)
## 开启集群配置
```yml
spring:
  data:
    # 集成spring-boot-starter-data-redis
    redis:
      host: 192.168.30.9
      port: 6379
      database: 4
      timeout: 5000
magic-api:
  cluster-config:
    enable: true # 开启集群配置
```

## 自定义推送
::: tip 提示
如无特殊情况，不需要实现自定义推送。
:::
```java

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.Message;
import org.springframework.data.redis.connection.MessageListener;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.data.redis.listener.ChannelTopic;
import org.springframework.data.redis.listener.RedisMessageListenerContainer;
import org.ssssssss.magicapi.model.MagicNotify;
import org.ssssssss.magicapi.provider.MagicAPIService;
import org.ssssssss.magicapi.provider.MagicNotifyService;
import org.ssssssss.magicapi.utils.JsonUtils;

@Configuration
public class CustomMagicNotifyConfiguration{

    private String channel = "magic-api:notify:channel";

    /**
     * 将通知推送到其他实例上
     */
    @Bean
    public MagicNotifyService customMagicNotifyService(StringRedisTemplate stringRedisTemplate) {
        // 使用Redis通知
        // return magicNotify -> stringRedisTemplate.convertAndSend(channel, JsonUtils.toJsonString(magicNotify));
        return new MagicNotifyService() {
            @Override
            public void sendNotify(MagicNotify magicNotify) {
                // 使用Redis通知
                stringRedisTemplate.convertAndSend(channel, JsonUtils.toJsonString(magicNotify));
            }
        };
    }

    /**
     * 配置Redis监听
     */
    @Bean
    public RedisMessageListenerContainer magicRedisMessageListenerContainer(RedisConnectionFactory redisConnectionFactory, MagicAPIService magicAPIService) {
        RedisMessageListenerContainer redisMessageListenerContainer = new RedisMessageListenerContainer();
        redisMessageListenerContainer.setConnectionFactory(redisConnectionFactory);
        // MessageListener messageListener = (message, pattern) -> magicAPIService.processNotify(JsonUtils.readValue(message.getBody(), MagicNotify.class));
        MessageListener messageListener = new MessageListener() {
            @Override
            public void onMessage(Message message, byte[] pattern) {
                // 处理消息通知
                magicAPIService.processNotify(JsonUtils.readValue(message.getBody(), MagicNotify.class));
            }
        };
        redisMessageListenerContainer.addMessageListener(messageListener, ChannelTopic.of(channel));
        return redisMessageListenerContainer;
    }
}
```

