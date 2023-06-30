/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx44a3cbe3fc5fc140',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '5cef650a27a323f962ed7745e5e5ce7e',

  PROVINCE: '江西',
  CITY: '抚州',


  SWITCH: {
    weather: true,
    
    holidaytts: true,
    
    CIBA: false,
    
    oneTalk: false,
    
    earthyLoveWords: true,
    
    momentCopyrighting: false,
    
    poisonChickenSoup: false,
    
    poetry: false,

    horoscope: false,
  
    birthdayMessage: true,
  
    courseSchedule: false,
  },

  TIAN_API: {
    key: 'b55155b8ae1ece0586f8e2dd7123009b',
    
    
    morningGreeting: false,
  
    
    eveningGreeting: false,
  
    
    weather: 3,
  
    
    networkHot: 0,
  
    
    networkHotType: 'default',
  },

  IS_SHOW_COLOR: false,
  
  USERS: [
    {
      // 想要发送的人的名字
      name: '测试者',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oDCdW6sFaQYEhbh6cR-ajK79cFbE',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'lp4VC83x-K9d100AbjwGpwDcXNjETrZB28vPrO_WFaY',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-06',
      festivals: [
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '测试者', year: '2002', date: '11-06',
        },
      ],
      horoscopeDateType: '今日',
      
      SLOT_LIST: [
    // 这样配置的话，就会每次随机选一句话发送
    {
      keyword: 'lover_prattle',
      contents: [
        '因为太喜欢你，所以看谁都像是情敌。',
        '申请成为你爱里的永久居民。',
        '你很傻，你很笨，可我还是很羡慕你，因为你有我',
        '遇见你，就好像捡到了100斤的运气'
      ],
    }
    // 你可以不断按格式往下增加
    // ...
  ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-05-20' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'dTls3UklrylgN6zUk8wwqwcdTqAZ8b6HB12anOKiaNQ',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oDCdW6re5QwLECmZk0p8RIp-hMkg',
    }
  ],

}

module.exports = USER_CONFIG

