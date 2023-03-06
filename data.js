var APP_DATA = {
  "scenes": [
    {
      "id": "0-",
      "name": "客廳",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6609707222866881,
          "pitch": 0.1769620131360341,
          "rotation": 0,
          "target": "1-"
        },
        {
          "yaw": 2.5195370196770934,
          "pitch": 0.08331325118205335,
          "rotation": 0,
          "target": "2-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.9611927332763663,
          "pitch": 0.03932142659047955,
          "title": "<span style=\"font-size: 13px; background-color: rgba(58, 68, 84, 0.8);\">名畫1</span>",
          "text": "價值 1000 萬的名畫。"
        },
        {
          "yaw": -3.0416332777752793,
          "pitch": 0.06385967035139473,
          "title": "<span style=\"font-size: 13px; background-color: rgba(58, 68, 84, 0.8);\">名畫2</span>",
          "text": "價值 500 萬的名畫。"
        },
        {
          "yaw": 1.8085536201010397,
          "pitch": -0.0665124331515603,
          "title": "<span style=\"font-size: 13px; background-color: rgba(58, 68, 84, 0.8);\">名畫3</span>",
          "text": "價值 800 萬的名畫。"
        },
        {
          "yaw": 0.08951163864302103,
          "pitch": 0.06946364707239461,
          "title": "<span style=\"font-size: 13px; background-color: rgba(58, 68, 84, 0.8);\">名畫4</span>",
          "text": "價值 2000 萬的名畫。"
        }
      ]
    },
    {
      "id": "1-",
      "name": "廚房",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8360239234974554,
          "pitch": 0.2610034860010977,
          "rotation": 0,
          "target": "0-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-",
      "name": "室外",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.2027265565189733,
        "pitch": -0.08213898608511272,
        "fov": 1.3608936558192368
      },
      "linkHotspots": [
        {
          "yaw": 0.032781485361631724,
          "pitch": -0.03544173516670668,
          "rotation": 0,
          "target": "0-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.1122120037948573,
          "pitch": 0.037490886023825,
          "title": "獨立屋",
          "text": "這是 Nick 的獨立屋。"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
